import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';

/*const apiURL = " https://ih-countries-api.herokuapp.com/countries";*/

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountriesData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />

            <Route exact path="/" component={CountriesList} />
            <Route path="/countries/:alpha3Code" component={CountryDetails} />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
