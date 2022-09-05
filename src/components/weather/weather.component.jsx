import Moment from 'react-moment'
import * as moment from 'moment'
import './weather.styles.scss'

const Weather = ({data}) => {
  const {
    celsius,
    date,
    description,
    fahrenheit,
    icon,
    title
  } = data

  const days = [
    'Monday',
    'Tuesday',
    'Wedsday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  const todayDate = new Date()
  const todayDay = moment(todayDate).day()
  const weatherDay = moment(date).day()

  return (
    <div className={`weather weather--${title.toLocaleLowerCase().split(' ').join('-')} weather--${description.toLocaleLowerCase().split(' ').join('-')}`}>
      <div className='weather__date'>
        {todayDay === weatherDay ? 'Today' : days[moment(date).day() - 1]} <Moment format='Do'>{date}</Moment>
      </div>
      <div className="weather__details">
        <div
          style={
            {
              backgroundImage: `url(https://openweathermap.org/img/wn/${icon}@4x.png)`
            }
          }
          className="weather__icon weather__icon--static"
        />
        <div className="weather__description">
          {description}
        </div>
        <div className="weather__temp weather__temp--celsius">
          {celsius}&#8451;
        </div>
        <div className="weather__temp weather__temp--fahrenheit">
          {fahrenheit}&#8457;
        </div>
      </div>
      <div
        style={
          {
            backgroundImage: `url(https://openweathermap.org/img/wn/${icon}@4x.png)`
          }
        }
        className="weather__icon weather__icon--fixed"
      />
    </div>
  )
}

export default Weather;
