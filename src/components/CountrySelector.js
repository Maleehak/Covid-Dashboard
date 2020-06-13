import React,{useState} from 'react';
import Chart from './Chart';
import DisplayStats from './DisplayStats';

function CountrySelector({countries}) {
    const [country,setCountry]=useState('World');

    return (
    <>
    <p>{country}</p>
      <select onChange={e=>setCountry(e.currentTarget.value)} className="dropbtn">
        {countries.map(item => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
        <h1>{country}</h1>
    <DisplayStats country={country}/>
      <Chart country={country}/>
      </>
    );
  }
  export default CountrySelector;