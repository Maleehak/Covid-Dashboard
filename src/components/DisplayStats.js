import React,{useEffect,useState}from 'react';
import {getCountryData} from './Api';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import './DisplayStats.css';


const FetchTotalData =({country}) => {

    const [totalCases,getTotalCases]=useState(0);
    const [recovered,getTotalRecovered]=useState(0);
    const [death,getTotalDeath]=useState(0);
    useEffect(() => {
        const fetchdata=async () => {
            const responseData=await getCountryData(country);
            getTotalCases(responseData.totalCases);
            getTotalRecovered(responseData.recovered);
            getTotalDeath(responseData.totalDeath);
        }
        fetchdata();
    }, [country]);

    return (
        <>
        <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className="border 10px solid red">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              {totalCases}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        </Grid>

        <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
        
              {recovered}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recovered cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        </Grid>

        <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
            {death}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths in COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        </Grid>
           
          
        
        </>
    )
}

export default FetchTotalData;

