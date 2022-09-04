import { useState, useEffect } from 'react';

import SearchField from './components/search-field/search-field.component'
import Weather from './components/weather/weather.component'

const App = () => {
  const [locationField, setLocationField] = useState('London')

  const onLocationChange = (event) => {
    const locationFieldString = event.target.value.toLocaleLowerCase()

    setLocationField(locationFieldString)
  }

  useEffect(() => {
    console.log('state updated', locationField)
  }, [locationField] )

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
