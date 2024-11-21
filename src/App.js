import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [advice, setAdvice] = useState('');
  const [food, setFood] = useState('');

  // Function to calculate BMI and give advice
  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100; // Convert height to meters

    if (weightInKg > 0 && heightInMeters > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      // Categorize the BMI and give advice and food recommendations
      if (bmiValue < 18.5) {
        setCategory('Underweight');
        setAdvice('It is important to maintain a healthy weight. Consult a healthcare provider to plan a balanced diet.');
        setFood('Eat nutrient-dense foods like nuts, seeds, whole grains, avocados, and lean proteins.');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory('Normal weight');
        setAdvice('You are at a healthy weight. Keep maintaining a balanced diet and stay physically active.');
        setFood('Maintain a balanced diet with vegetables, fruits, lean proteins, whole grains, and healthy fats.');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setCategory('Overweight');
        setAdvice('It might be helpful to lose weight. Regular exercise and a calorie-controlled diet can help you achieve a healthy weight.');
        setFood('Focus on eating vegetables, fruits, lean meats, and whole grains. Limit sugar and processed foods.');
      } else {
        setCategory('Obesity');
        setAdvice('Consult a healthcare provider for a personalized weight loss plan, including exercise and nutrition advice.');
        setFood('Eat more vegetables, lean protein, and fiber-rich foods. Avoid sugary drinks and limit high-calorie foods.');
      }
    } else {
      setBmi(null);
      setCategory('');
      setAdvice('');
      setFood('');
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
          <p><strong>Advice:</strong> {advice}</p>
          <p><strong>Food Recommendations:</strong> {food}</p>
        </div>
      )}
    </div>
  );
}

export default App;
