import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then(response => {
        setCountry(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [alpha3Code]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
      <img src={country.flag} alt={country.name} width="300" />
    </div>
  );
}

export default CountryDetails;
