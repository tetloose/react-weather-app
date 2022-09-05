import Weather from '../weather/weather.component'

const WeatherLoop = ({forecasts}) => (
  <div className="l-row is-med-justify-content-evenly has-med-small-gutter">
    {forecasts.map((forecast, forecastIndex) => {
      return (
        <div
          key={`weather-${forecastIndex}`}
          className="l-row__col"
        >
          <Weather
            data={forecast}
          />
        </div>
      )
    })}
  </div>
)

export default WeatherLoop;
