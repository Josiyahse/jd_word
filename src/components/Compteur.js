import React, { useState, useEffect }  from 'react';
import axios from "axios";
import Country from './Country';

const Compteur = () => {

    const [contryVisited, setcontryVisited] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(1);

    useEffect(() => {
        if (playOnce) {
            axios
                .get(
                    "https://restcountries.eu/rest/v2/all?fields=name;flag"
                )
                .then(res =>{
                setcontryVisited(res.data);
                setPlayOnce(false);
                })
        }

        setRangeValue(contryVisited.length);

    }, [contryVisited, rangeValue, playOnce]);

    // setRangeValue(rangeValue);
    return (
        <div className="compteur">
            <h1>JD Nomad visited {rangeValue} countries</h1>
            <div className="countries-list">
                    <ul>
                        {contryVisited.map((country)=>
                            <Country country={country} key={country.name} />
                        )}                       
                    </ul>
            </div>
            
        </div>
    );
};

export default Compteur;