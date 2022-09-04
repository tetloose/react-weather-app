import './scss/location/location.styles.scss'
import './scss/weather/weather.styles.scss'

const App = () => {
  return (
    <main className="l-container is-align-item-center">
      <section className="l-container__block">
        <div className="l-row">
          <div className="l-row__col is-centered is-med-half">
            <input
              type="search"
              id="location-id"
              name="location-name"
              placeholder="Weather by location"
              className="location"
            />
          </div>
        </div>
        <div className="l-row is-med-justify-content-evenly has-med-small-gutter">
          <div className="l-row__col">
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
          </div>
          <div className="l-row__col">
            <div className="weather weather--rain">
              <time className='weather__date'>
                Today 15th
              </time>
              <div className="weather__details">
                <div className="weather__icon weather__icon--static" />
                <div className="weather__description">
                  Rain
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
          </div>
          <div className="l-row__col">
            <div className="weather weather--snow">
              <time className='weather__date'>
                Today 15th
              </time>
              <div className="weather__details">
                <div className="weather__icon weather__icon--static" />
                <div className="weather__description">
                  Snow
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
          </div>
          <div className="l-row__col">
            <div className="weather weather--thunderstorm">
              <time className='weather__date'>
                Today 15th
              </time>
              <div className="weather__details">
                <div className="weather__icon weather__icon--static" />
                <div className="weather__description">
                  Thunderstorm
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
          </div>
          <div className="l-row__col">
            <div className="weather weather--clear-sky">
              <time className='weather__date'>
                Today 15th
              </time>
              <div className="weather__details">
                <div className="weather__icon weather__icon--static" />
                <div className="weather__description">
                  Clear sky
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
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
