# import numpy as np
# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# from sklearn import svm
# from sklearn.metrics import accuracy_score

# diabetes_dataset = pd.read_csv('diabetes.csv')

# diabetes_dataset.head()

# diabetes_dataset.shape

# diabetes_dataset.describe()


# diabetes_dataset['Outcome'].value_counts()

# diabetes_dataset.groupby('Outcome').mean()





# x = diabetes_dataset.drop(columns = 'Outcome', axis = 1)
# y = diabetes_dataset['Outcome']
# print(x)


# scaler = StandardScaler()

# scaler.fit(x)


# standardized_data = scaler.transform(x)

# x = standardized_data


# x_train, x_test, y_train, y_test = train_test_split(x,y, test_size = 0.2, stratify = y, random_state = 2)

# print(x_train.shape, x_test.shape, y_train.shape, y_test.shape)
# classifier = svm.SVC(kernel = 'linear')

# classifier.fit(x_train, y_train)



# x_train_predict = classifier.predict(x_train)


# training_data_accuracy = accuracy_score(x_train_predict, y_train)

# print(training_data_accuracy)


# x_test_predict = classifier.predict(x_test)

# test_data_accuracy = accuracy_score(x_test_predict, y_test)

# import numpy as np
# from sklearn.externals import joblib

# # Load the trained ML model
# model = joblib.load('model.pkl')

# def predict_diabetes(input_values):
#     # Preprocess input values if required
#     input_array = np.array([list(input_values.values())])
#     prediction = model.predict(input_array)
#     if prediction[0] == 0:
#         return "Not diabetic"
#     else:
#         return "Diabetic"


# iinput_data = []

# # Accept input from the user
# for feature in ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 
#                 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']:
#     value = float(input(f"Enter value for {feature}: "))
#     input_data.append(value)

# # Convert input_data to a numpy array
# input_data_as_numpy_array = np.asarray(input_data)

# # Reshape the input_data array
# input_data_reshape = input_data_as_numpy_array.reshape(1, -1)

# # Standardize the input data
# std_data = scaler.transform(input_data_reshape)

# # Make prediction
# prediction = classifier.predict(std_data)

# # Output the prediction result
# if prediction[0] == 0:
#     print("You are not diabetic")
# else:
#     print("You are diabetic")



import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score
from sklearn.externals import joblib

# Load the diabetes dataset
diabetes_dataset = pd.read_csv('diabetes.csv')

# Preprocess the dataset
x = diabetes_dataset.drop(columns='Outcome', axis=1)
y = diabetes_dataset['Outcome']
scaler = StandardScaler()
scaler.fit(x)
x = scaler.transform(x)

# Split the dataset into training and testing sets
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, stratify=y, random_state=2)

# Train the SVM classifier
classifier = svm.SVC(kernel='linear')
classifier.fit(x_train, y_train)

# Save the trained model
joblib.dump(classifier, 'model.pkl')
