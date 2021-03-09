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
        <div style= {{margin: '20px', border: '1px solid red', borderRadius: '20px', fontSize: '20px', width: '400px', padding: '20px'}}>
            <p><strong>{name}</strong></p>
            {
                country.length > 0 && (
                    <div>
                        <img src={country[0].flag} width="350px"/>
                        <p>Region: {country[0].region}</p>
                        <p>Population: {country[0].population}</p>
                        <p>Currencies: {country[0].currencies[0].symbol}</p>
                    </div>
                )
            }
        </div>
    );
};

export default CountryDetail;