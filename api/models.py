from flask import Flask
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from flask import jsonify
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
import sklearn.metrics as metrics
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.metrics import roc_auc_score, log_loss
from sklearn.metrics import confusion_matrix
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten


# function for the models
def classifierModel(X_train, y_train, modelType):
    if modelType == 1:
        model = LogisticRegression(class_weight='balanced', max_iter=100)
    elif modelType == 2:
        model = GaussianNB()
    elif modelType == 3:
        model = RandomForestClassifier(max_depth=5,
                                       random_state=2,
                                       n_estimators=750)
    elif modelType == 4:
        model = ExtraTreesClassifier(random_state=2, n_estimators=1000)
    elif modelType == 5:
        model = Sequential([
            Flatten(input_shape=(17, )),
            Dense(32, activation='relu'),
            Dense(32, activation='relu'),
            Dense(1, activation='sigmoid'),
        ])
        model.compile(optimizer='adam',
                      loss='binary_crossentropy',
                      metrics=['accuracy'])
        return model.fit(X_train, Y_train, batch_size=1)
    else:
        print('Unknown moodel type!')
        return

    model.fit(X_train, y_train)
    return model


# function for moel predictions and accuracies
def modelPredictions(X_test, y_test, model, inputs):

    input_pred = model.predict([inputs])
    y_pred = model.predict(X_test)
    accuracy = round(metrics.accuracy_score(y_test, y_pred), 3) * 100
    return [input_pred[0], accuracy]