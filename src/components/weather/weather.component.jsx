import './weather.styles.scss'

const Weather = () => {
  return (
    <div className="weather weather--shower-rain">
      <time className='weather__date'>
        Today 15th
      </time>
      <div className="weather__details">
        <div className="weather__icon weather__icon--static" />
        <div className="weather__description">
          Shower Rain
        </div>
        <div className="weather__temp weather__temp--celsius">
          22&#8451;
        </div>
        <div className="weather__temp weather__temp--fahrenheit">
          72&#8457;
        </div>
      </div>
      <div className="weather__icon weather__icon--fixed" />
    </div>
  )
}

export default Weather;
