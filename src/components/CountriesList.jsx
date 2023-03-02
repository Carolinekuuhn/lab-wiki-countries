import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountriesList() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
          .then(response => {
            setCountries(response.data);
          })
        });

  return (
    <div className="list-group">
    <h2>Countries List</h2>
      {countries.map(country => (
        <Link
          key={country.alpha3Code}
          to={`/${country.alpha3Code}`}
          className="list-group-item list-group-item-action"
        >
          {country.name}
        </Link>
      ))}
    </div>
  );
}

export default CountriesList