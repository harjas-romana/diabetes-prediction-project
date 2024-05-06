// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [inputValues, setInputValues] = useState({
//     pregnancies: "",
//     glucose: "",
//     bloodPressure: "",
//     skinThickness: "",
//     insulin: "",
//     bmi: "",
//     diabetesPedigreeFunction: "",
//     age: "",
//   });

//   const handleInputChange = (event) => {
//     setInputValues({
//       ...inputValues,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const input_data_for_model = {
//       Pregnancies: inputValues.pregnancies,
//       Glucose: inputValues.glucose,
//       BloodPressure: inputValues.bloodPressure,
//       SkinThickness: inputValues.skinThickness,
//       Insulin: inputValues.insulin,
//       BMI: inputValues.bmi,
//       DiabetesPedigreeFunction: inputValues.diabetesPedigreeFunction,
//       Age: inputValues.age,
//     };
//     const input_json = JSON.stringify(input_data_for_model);
//     const response = await axios.post(url, data = input_json);
//     console.log(response.text);
//   };

//   return (
//     <div className="App">
//       <h1>Diabetes Prediction</h1>
//       <p>Note: The system is 80% accurate.</p>
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label htmlFor="pregnancies">Pregnancies:</label>
//           <input
//             type="number"
//             id="pregnancies"
//             name="pregnancies"
//             value={inputValues.pregnancies}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="glucose">Glucose:</label>
//           <input
//             type="number"
//             id="glucose"
//             name="glucose"
//             value={inputValues.glucose}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="bloodPressure">Blood Pressure:</label>
//           <input
//             type="number"
//             id="bloodPressure"
//             name="bloodPressure"
//             value={inputValues.bloodPressure}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="skinThickness">Skin Thickness:</label>
//           <input
//             type="number"
//             id="skinThickness"
//             name="skinThickness"
//             value={inputValues.skinThickness}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="insulin">Insulin:</label>
//           <input
//             type="number"
//             id="insulin"
//             name="insulin"
//             value={inputValues.insulin}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="bmi">BMI:</label>
//           <input
//             type="number"
//             id="bmi"
//             name="bmi"
//             value={inputValues.bmi}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="diabetesPedigreeFunction">
//             Diabetes Pedigree Function:
//           </label>
//           <input
//             type="number"
//             id="diabetesPedigreeFunction"
//             name="diabetesPedigreeFunction"
//             value={inputValues.diabetesPedigreeFunction}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={inputValues.age}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Predict</button>
//       </form>
//       <p>Made by Harjas Partap Singh Romana</p>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [inputValues, setInputValues] = useState({
//     pregnancies: "",
//     glucose: "",
//     bloodPressure: "",
//     skinThickness: "",
//     insulin: "",
//     bmi: "",
//     diabetesPedigreeFunction: "",
//     age: "",
//   });

//   const handleInputChange = (event) => {
//     setInputValues({
//       ...inputValues,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const input_data_for_model = {
//       Pregnancies: inputValues.pregnancies,
//       Glucose: inputValues.glucose,
//       BloodPressure: inputValues.bloodPressure,
//       SkinThickness: inputValues.skinThickness,
//       Insulin: inputValues.insulin,
//       BMI: inputValues.bmi,
//       DiabetesPedigreeFunction: inputValues.diabetesPedigreeFunction,
//       Age: inputValues.age,
//     };
//     const input_json = JSON.stringify(input_data_for_model);
//     const response = await axios.post(url, data = input_json);
//     console.log(response.text);
//   };

//   return (
//     <div className="App">
//       <h1>Diabetes Prediction</h1>
//       <p>Note: The system is 80% accurate.</p>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="input-container">
//           <label htmlFor="pregnancies">Pregnancies:</label>
//           <input
//             type="number"
//             id="pregnancies"
//             name="pregnancies"
//             value={inputValues.pregnancies}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="glucose">Glucose:</label>
//           <input
//             type="number"
//             id="glucose"
//             name="glucose"
//             value={inputValues.glucose}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="bloodPressure">Blood Pressure:</label>
//           <input
//             type="number"
//             id="bloodPressure"
//             name="bloodPressure"
//             value={inputValues.bloodPressure}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="skinThickness">Skin Thickness:</label>
//           <input
//             type="number"
//             id="skinThickness"
//             name="skinThickness"
//             value={inputValues.skinThickness}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="insulin">Insulin:</label>
//           <input
//             type="number"
//             id="insulin"
//             name="insulin"
//             value={inputValues.insulin}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="bmi">BMI:</label>
//           <input
//             type="number"
//             id="bmi"
//             name="bmi"
//             value={inputValues.bmi}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="diabetesPedigreeFunction">
//             Diabetes Pedigree Function:
//           </label>
//           <input
//             type="number"
//             id="diabetesPedigreeFunction"
//             name="diabetesPedigreeFunction"
//             value={inputValues.diabetesPedigreeFunction}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={inputValues.age}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Predict</button>
//       </form>
//       <p>Made by Harjas Partap Singh Romana</p>
//     </div>
//   );
// }

// export default App;







import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputValues, setInputValues] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/predict", inputValues);
      setResult(response.data.prediction);
      setShowResult(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="main-block">
      <form onSubmit={handleSubmit} className="left-part">
        <h1>Diabetes Prediction</h1>
        <p>
          This Web Application is processed by a Machine Learning Algorithm to
          predict the probability of an individual having Diabetes.
        </p>
        <p>
          <i>Note that this model is 80% accurate</i>
        </p>
        <div className="info">
          <p>
            <b>Please Enter values for the following:</b>
          </p>
          <br />
          <label>Number of Pregnancies</label>
          <input
            type="number"
            name="Pregnancies"
            placeholder="Number of times pregnant"
            value={inputValues.Pregnancies}
            onChange={handleInputChange}
            required
          />
          <label>Glucose Concentration</label>
          <input
            type="number"
            name="Glucose"
            placeholder="Plasma glucose concentration"
            value={inputValues.Glucose}
            onChange={handleInputChange}
            required
          />
          <label>Blood Pressure</label>
          <input
            type="number"
            step="0.01"
            name="BloodPressure"
            placeholder="Diastolic blood pressure (mm Hg)"
            value={inputValues.BloodPressure}
            onChange={handleInputChange}
            required
          />
          {/* Add more input fields for other features */}
          <label>Skin Thickness</label>
          <input
            type="number"
            step="0.01"
            name="SkinThickness"
            placeholder="Triceps skin fold thickness (mm)"
            value={inputValues.SkinThickness}
            onChange={handleInputChange}
            required
          />
          <label>Insulin Level</label>
          <input
            type="number"
            name="Insulin"
            step="0.01"
            placeholder="2-Hour serum insulin (mu U/ml)"
            value={inputValues.Insulin}
            onChange={handleInputChange}
            required
          />
          <label>Body Mass Index</label>
          <input
            type="number"
            name="BMI"
            step="0.01"
            placeholder="BMI = (weight in kg/(height in m)^2)"
            value={inputValues.BMI}
            onChange={handleInputChange}
            required
          />
          <label>Diabetes Pedigree Function</label>
          <input
            type="number"
            name="DiabetesPedigreeFunction"
            step="0.001"
            placeholder="Diabetes Pedigree Function"
            value={inputValues.DiabetesPedigreeFunction}
            onChange={handleInputChange}
            required
          />
          <label>Age</label>
          <input
            type="number"
            name="Age"
            placeholder="Age (in years)"
            value={inputValues.Age}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Predict</button>
      </form>
      {showResult && (
        <div className="result">
          <h2>Result</h2>
          <p>{result}</p>
        </div>
      )}
      <footer>
        <p>
          <i>Developed By Harjas Partap Singh Romana</i>
        </p>
      </footer>
    </div>
  );
}

export default App;
