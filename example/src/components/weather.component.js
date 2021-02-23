import { useState } from 'react';

const serverUrl = 'http://localhost:3001';

function WeatherComponent() {

    const [weather, setWeather] = useState();
    const [zip, setZip] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState();

    const getWeather = (value) => {
        const isInt = parseInt(value);
        let requestUrl = serverUrl + '/weather';
        setIsLoading(true);
        if (isInt >= 0) {
            requestUrl += `?zip=${value}`;
        } else {
            requestUrl += `?cityName=${value}`;
        }
        fetch(requestUrl)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
                setIsLoading(false);
            })
            .catch((error) => setIsLoading(false)); //TODO: Display something went wrong page???
    };

    return (
        <div>
            <div>
                Zip
                <input
                    type="text"
                    onChange={(event) => setZip(event.target.value)}
                    value={zip || ''}
                    pattern="[0-9]*"
                    maxLength="5"
                />
                <button onClick={() => getWeather(zip)}>Submit</button>
            </div>
            <div>
                City
                <input
                    type="text"
                    onChange={(event) => setCity(event.target.value)}
                    value={city || ''}
                    pattern="[A-Za-z]"
                />
                <button onClick={() => getWeather(city)}>Submit</button>
            </div>
            { isLoading &&
                (
                    <div>
                        Loading...
                    </div>
                )
            }
            { !!weather && (
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

export default WeatherComponent;
