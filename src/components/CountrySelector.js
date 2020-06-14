import React,{useState} from 'react';
import Chart from './Chart';
import DisplayStats from './DisplayStats';
import PieChart from './PieChart';
import { Typography, Grid } from '@material-ui/core';
import '../App.css';

function CountrySelector({countries}) {
    const [country,setCountry]=useState('World');
    return (    
    <>
    <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={4} >
        <Typography color="textPrimary" variant="h3"  gutterBottom>
            <h3 className="marginIt">{country}</h3>
          </Typography>
      </Grid>
      <Grid item xs={10} md={4} >
      <select onChange={(e) =>setCountry(e.currentTarget.value)} className="dropbtn">
        {countries.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
      </Grid>
    </Grid>
        
    <DisplayStats country={country}/>
    <Grid container spacing={3} justify="center">
    <Grid item xs={12} md={8} >
            <Typography color="textSecondary" variant="h4" gutterBottom>
                Statistics
            </Typography>
    </Grid>
    </Grid>
    <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={5} >
      <Chart country={country}/>
      </Grid>
      <Grid item xs={12} md={5} >
      <PieChart country={country}/>
      </Grid>
    </Grid>
      </>
    );
  }
  export default CountrySelector;