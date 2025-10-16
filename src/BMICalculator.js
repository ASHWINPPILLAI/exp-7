import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  // State variables for inputs and results
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');

  // Function to calculate BMI
  const calculateBmi = () => {
    // Validate inputs: check if empty or non-positive
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Please enter valid positive values for height and weight.');
      return;
    }

    // Calculate BMI using the formula
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    // Determine BMI status based on classification
    if (bmiValue < 18.5) {
      setBmiStatus('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiStatus('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiStatus('Overweight');
    } else {
      setBmiStatus('Obese');
    }
  };
  
  // Function to reset fields
  const resetFields = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setBmiStatus('');
  };


  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label htmlFor="height">Height (in cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="e.g., 175"
        />
      </div>
      <div className="input-group">
        <label htmlFor="weight">Weight (in kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g., 70"
        />
      </div>
      <div className="button-group">
        <button onClick={calculateBmi}>Calculate BMI</button>
        <button className="reset-button" onClick={resetFields}>Reset</button>
      </div>

      {/* Display results conditionally */}
      {bmi && (
        <div className="result-section">
          <h2>Your BMI: {bmi}</h2>
          <p>
            Status: <span className={`bmi-status ${bmiStatus.toLowerCase().replace(' ', '-')}`}>{bmiStatus}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;