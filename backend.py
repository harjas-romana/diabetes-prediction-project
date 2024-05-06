from flask import Flask, request, jsonify
import numpy as np
from ml import scaler, classifier

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    input_values = request.json
    input_data = np.array([list(input_values.values())])
    std_data = scaler.transform(input_data)
    prediction = classifier.predict(std_data)
    result = "Diabetic" if prediction[0] == 1 else "Not Diabetic"
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
