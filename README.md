# Online Shopper Intention Predictions
![Picture1](https://user-images.githubusercontent.com/75978963/103548324-eb594a80-4ea5-11eb-8c53-826e35dff9b3.png)

## Project Goal
The goal of this project is to predict if an online user, when entering the website, has the intention of buying a product on the site.
Using the dataset and Flask as a web framework, we made a website able predict in real time if the online user has the intention of buying a product

## Machine Learning Models
To predict whether the user has the intention of buying a product online or not, we will be using 5 different supervised machine learning models. 

* Logistic Regression - A statistical model that in its basic form uses a logistic function to model a binary dependent variables
* Naïve Bayes -  A probabilistic classifier, which means it predicts based on the probability of an object
* Random Forest -  Ensemble learning method which constructs a multitude of decision trees at training time
* Extra Tree - Uses a simpler algorithm than Random Forest  to construct the decision trees used as a members of the ensemble
* Neural Networks (DL)- Series of  algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain works

After comparing the different accuracies found by using the performance of the models, we will see that the model with the highest accuracy is Random Forest (90.27%)

![Capture](https://user-images.githubusercontent.com/75978963/103549640-fb722980-4ea7-11eb-9d7f-441f7ece2219.PNG)

## Web App
A web application was made using ReactJS (frontend) and Flask (backend).
* Flask - Flask will act as the API service to do some python specific tasks and send the results back to the frontend.
* ReactJS - ReactJS will be used for the frontend for building the user interface and interact with the API.  

## Test it !
![Picture2](https://user-images.githubusercontent.com/75978963/103550166-c914fc00-4ea8-11eb-9537-86446629f406.png)
