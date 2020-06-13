import React, { useState,useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import  {getCountryData} from './Api'

const Chart = (country) => {
    const [chartData,setChartData]=useState({});

    const setData=(responseData)=>{        
        let confirmed=parseInt(responseData.totalCases.split(',').join(''));
        let death=parseInt(responseData.totalDeath.split(',').join(''));
        let recovered=parseInt(responseData.recovered.split(',').join(''));
        setChartData({
            labels:['Total cases','Recovered','Death'],
            datasets:[
                {
                    labels:['Confirmed','Recovered','Deaths'],
                    data:[confirmed,recovered,death],
                    backgroundColor:[
                        'blue',
                        'green',
                        'red'
                    ],
                    borderWidth:4
                }
            ]
        })
        return chartData;
    }
    const chart=()=>{
        const fetchdata=async ()=>{
            const responseData=await getCountryData(country.country);
            setData(responseData);
           
        }
        fetchdata();
  
}
    useEffect(chart, [country])
    return (
        <div className="App">
            <h1>Statistics</h1>
            <div>
                <Bar data={chartData}             options={{
                title: {
                    display: true,
                    text: `Statistic Of COVID19`,
                    fontSize: 25
                },
                legend: {
                    display: false,
                }
            }}/>
            </div>
            
        </div>
    )
}
export default Chart;