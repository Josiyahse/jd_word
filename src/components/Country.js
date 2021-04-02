import React from 'react';

const Country = (props) => {
    const { country } = props;
    
    return (
        <li className="country-display">
            <p>{country.name}</p>
            <img src={country.flag} className="flag"/>           
        </li>
    );
};

export default Country;