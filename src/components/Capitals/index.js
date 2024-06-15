import {Component} from 'react'

import './index.css'

import CapitalItem from '../CapitalItem'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    initialcountryAndCapitalsList: countryAndCapitalsList,
    filteredOption: countryAndCapitalsList[0],
  }

  selectCapital = event => {
    const {initialcountryAndCapitalsList} = this.state
    const filteredCountryList = initialcountryAndCapitalsList.filter(
      eachObj => eachObj.id === event.target.value,
    )
    this.setState({filteredOption: filteredCountryList[0]})
  }

  render() {
    const {initialcountryAndCapitalsList, filteredOption} = this.state
    console.log(filteredOption)
    return (
      <div className="main-container">
        <div className="content-container">
          <h1>Countries And Capitals</h1>
          <div className="select-container">
            <select
              id="countryCapitals"
              name="countryCapitals"
              onChange={this.selectCapital}
            >
              {initialcountryAndCapitalsList.map(eachObj => (
                <CapitalItem
                  countryAndCapitalsList={eachObj}
                  key={eachObj.id}
                />
              ))}
            </select>
            <label htmlFor="countryCapitals">
              is Capital of which Country?
            </label>
          </div>
          <div className="name-container">
            <p className="country-name">{filteredOption.country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
