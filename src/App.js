import Location from './components/location/location.component'
import Weather from './components/weather/weather.component'

const App = () => {
  return (
    <main className="l-container is-align-item-center">
      <section className="l-container__block">
        <div className="l-row">
          <div className="l-row__col is-centered is-med-half">
            <Location />
          </div>
        </div>
        <div className="l-row is-med-justify-content-evenly has-med-small-gutter">
          <div className="l-row__col">
            <Weather />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
