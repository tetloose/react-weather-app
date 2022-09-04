import './scss/app/app.styles.scss'

const App = () => {
  return (
    <main className="l-container is-align-middle">
      <h1 className="l-container__title is-center">
        Weather Widget
      </h1>
      <section className="l-container__block">
        <div className="l-row">
          <div className="l-row__col is-centered is-med-half">
            <div className="location">
              <input
                type="search"
                id="location-id"
                name="location-name"
                placeholder="Weather by location"
                className="location__search"
              />
            </div>
          </div>
          <div className="l-row__col">
            <div className="weather weather--className">
              <time
                className='weather__date'
                datetime="2008-02-14 20:00"
              >
                Today 15th
              </time>
              <div className="weather__icon weather__icon--className">
                Will be an svg
              </div>
              <div className="weather__description">
                Clear sky
              </div>
              <div className="weather__temp weather__temp--celsius">
                22<sup>o</sup><small>c</small>
              </div>
              <div className="weather__temp weather__temp--fahrenheit">
                72<sup>o</sup><small>f</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
