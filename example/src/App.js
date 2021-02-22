import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const serverUrl = 'http://localhost:3001';

function App() {

  const [weather, setWeather] = useState();
  const [zip, setZip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = () => {
    fetch(serverUrl + `/weather?zip=${zip}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setIsLoading(false);
      });
  };
  console.log(zip);
  return (
    <div className="App">
      <header>
        Weather
      </header>
      <div>
        <input
          type="number"
          onChange={(event) => setZip(event.target.value)}
          value={zip}
        />
        <button onClick={() => getWeather(zip)}>Submit</button>
      </div>
      { isLoading ?
        (
          <div>
            Loading...
          </div>
        ) : (
          <div>
            {weather.name}
            <div>
              {weather.main.temp}K
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
