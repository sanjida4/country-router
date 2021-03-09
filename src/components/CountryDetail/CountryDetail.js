import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {name} = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    }, []);

    return (
        <div>
            <h3>This is details about: {name}</h3>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <p>Currencies: {country.currencies}</p>
        </div>
    );
};

export default CountryDetail;