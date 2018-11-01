import React, { useState, useEffect  } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './firebase'

function App() {

  const [count, setCount] = useState('loading'); 

  useEffect(() => {
    db.once("value", snap => {setCount(snap.child('result').val()) } )
  }, [count]);

  const handleCountClick = (e) => {
    if (e.target.id === 'add'){
      setCount(count + 1)
      db.update({result: count + 1})
    } else {
      setCount(count - 1)
      db.update({result: count - 1})
    } 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <p>You clicked {count} times</p>
          <button id='add' onClick={handleCountClick}>
            Add
      </button>
          <button id='minus' onClick={handleCountClick}>
            Subtract
      </button>
        </div>
      </header>
    </div>
  );
}

export default App; 