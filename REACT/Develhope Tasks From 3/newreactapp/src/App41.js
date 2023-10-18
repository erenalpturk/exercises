import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function CarDetails({ initialData }) {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the submitted data here, e.g., send it to an API
    console.log('Submitted Data:', formData);
  };

  return (
    <div>
      <h1>Car Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Model:
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Year:
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Color:
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

function App() {
  const initialCarData = {
    model: '',
    year: '',
    color: '',
  };

  return (
    <div>
      <CarDetails initialData={initialCarData} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
