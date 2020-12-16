from flask import Flask
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from flask import jsonify
from flask import request
import models
from flask_cors import CORS
from sklearn.model_selection import train_test_split

app = Flask(__name__)
CORS(app)


# functino to preprocess the data
# output an array with the features in the first element and the target as the second element
def dataProcessing():
    df = pd.read_csv('online_shoppers_intention.csv')
    df['Revenue'] = df['Revenue'].map({False: 0, True: 1})
    df['Weekend'] = df['Weekend'].map({False: 0, True: 1})
    data = pd.get_dummies(df, columns=['VisitorType'], drop_first=True)
    data = data.drop(columns=['Month'])
    X = data.drop('Revenue', axis=1)
    y = data['Revenue']
    return [X, y]


# function to predict the user's inputs with the model
def dataPrediction(res, X_test, y_test, model):
    inputs = [
        res['administrative'], res['administrativeDuration'],
        res['informational'], res['informationalDuration'],
        res['productRelated'], res['productRelatedDuration'],
        res['bounceRates'], res['exitRates'], res['pageValues'],
        res['specialDay'], res['os'], res['browser'], res['region'],
        res['trafficType'], 1 if res['weekend'] == 'true' else 0,
        0 if res['alreadyVisit'] == 'true' else 1,
        1 if res['alreadyVisit'] == 'true' else 0
    ]
    return models.modelPredictions(X_test, y_test, model, inputs)


# logistic regression classifier
@app.route('/logisticRegression', methods=['POST'])
def logisticRegression():

    data = dataProcessing()
    X_train, X_test, y_train, y_test = train_test_split(data[0],
                                                        data[1],
                                                        test_size=0.2,
                                                        random_state=1234)
    model = models.classifierModel(X_train, y_train, 1)
    res = request.get_json()
    results = dataPrediction(res, X_test, y_test, model)

    return {'result': str(results[0]), 'accuracy': str(round(results[1], 1))}


# naive bayes classifier
@app.route('/naiveBayes', methods=['POST'])
def naiveBayes():
    data = dataProcessing()
    X_train, X_test, y_train, y_test = train_test_split(data[0],
                                                        data[1],
                                                        test_size=0.2,
                                                        random_state=1234)
    model = models.classifierModel(X_train, y_train, 2)
    res = request.get_json()
    results = dataPrediction(res, X_test, y_test, model)

    return {'result': str(results[0]), 'accuracy': str(round(results[1], 1))}


# random forest classifier
@app.route('/randomForest', methods=['POST'])
def randomForest():
    data = dataProcessing()
    X_train, X_test, y_train, y_test = train_test_split(data[0],
                                                        data[1],
                                                        test_size=0.2,
                                                        random_state=1234)
    model = models.classifierModel(X_train, y_train, 3)
    res = request.get_json()
    results = dataPrediction(res, X_test, y_test, model)
    print(round(results[1], 1))
    return {'result': str(results[0]), 'accuracy': str(round(results[1], 1))}


# extra tree classifier
@app.route('/extraTree', methods=['POST'])
def extraTree():
    data = dataProcessing()
    X_train, X_test, y_train, y_test = train_test_split(data[0],
                                                        data[1],
                                                        test_size=0.2,
                                                        random_state=1234)
    model = models.classifierModel(X_train, y_train, 3)
    res = request.get_json()
    results = dataPrediction(res, X_test, y_test, model)

    return {'result': str(results[0]), 'accuracy': str(results[1])}


# neural network classifier
@app.route('/neuralNetwork', methods=['POST'])
def neuralNetwork():
    data = dataProcessing()
    X_train, X_test, y_train, y_test = train_test_split(data[0],
                                                        data[1],
                                                        test_size=0.2,
                                                        random_state=1234)
    model = models.classifierModel(X_train, y_train, 4)
    res = request.get_json()
    input_pred = model.predict([res])
    test_loss, test_acc = model.evaluate(X_test, Y_test)
    return {'result': str(results), 'accuracy': str(test_acc * 100)}
