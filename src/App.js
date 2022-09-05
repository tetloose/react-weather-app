import { useState, useEffect } from 'react';

import SearchField from './components/search-field/search-field.component'
import WeatherLoop from './components/weather-loop/weather-loop.component'

const App = () => {
  const [locationField, setLocationField] = useState('London GB')
  const [location, setLocation] = useState();
  const [fiveDayForcast, setFiveDayForecast] = useState([]);
  const [filteredFiveDayForcast, setFilteredFiveDayForcast] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(
        {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      )
    })
  }, [])

  useEffect(() => {
    const fetchFiveDayForecast = async () => {
      await fetch(`${process.env.REACT_APP_WEATHER_API}?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(response => response.json())
        .then(result => setFiveDayForecast(result))
    }

    if (location !== undefined) {
      fetchFiveDayForecast();
    }

  }, [location])

  useEffect(() => {
    if (fiveDayForcast.list !== undefined)  {
      let prevDate = new Date()
      const filteredForecast = []

      fiveDayForcast.list.forEach((day, dayIndex) => {
        const dayDT = new Date(day.dt * 1000)
        if (dayIndex < 1 || dayDT.getDate() > prevDate.getDate() || dayDT.getMonth() > prevDate.getMonth() || dayDT.getFullYear() > prevDate.getFullYear()) {
          prevDate = dayDT;
          const weatherObj = {
            title: day.weather[0].main,
            date: dayDT,
            description: day.weather[0].description,
            celsius: Math.floor(day.main.temp - 273.15),
            fahrenheit: Math.floor((day.main.temp - 273.15) * (9/5) + 32),
            icon: day.weather[0].icon
          }
          filteredForecast.push(weatherObj)
        }
      })

      setFilteredFiveDayForcast(filteredForecast)
    }
  }, [fiveDayForcast])

  const onLocationChange = (event) => {
    setLocationField(event.target.value.toLocaleLowerCase())
  }

  return (
    <main className="l-container is-align-item-center">
      <section className="l-container__block">
        <div className="l-row">
          <div className="l-row__col is-centered is-med-half">
            <SearchField
              debounceTimer={500}
              className='location'
              value={locationField}
              placeholder='Enter Location GB'
              onChangeHandler={onLocationChange}
            />
          </div>
        </div>
        {
          filteredFiveDayForcast
          ? <WeatherLoop forecasts={filteredFiveDayForcast} />
          : 'Sorry no weather today'
        }
      </section>
    </main>
  )
}

export default App
