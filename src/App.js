

import React from 'react';
import './App.css';

function App() {
  const handleSubmit = event => {
   event.preventDefault();
   alert('Form submit olundu!')
 }

  return(
    <div className="wrapper">
      <h1>Salam</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;


