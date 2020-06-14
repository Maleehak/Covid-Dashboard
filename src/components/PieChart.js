import React, { useState,useEffect } from 'react';
import {Pie} from 'react-chartjs-2';
import  {getCountryData} from './Api';

const PieChart = (country) => {
    const [chartData,setChartData]=useState({});

    const setData=(responseData)=>{        
        let death=parseInt(responseData.totalDeath.split(',').join(""),10);
        let recovered=parseInt(responseData.recovered.split(',').join(""),10);
        setChartData({
            labels:['Recovered','Death'],
            datasets:[
                {
                    labels:['Recovered','Deaths'],
                    data:[recovered,death],
                    backgroundColor:[
                        '#42f593',
                        '#f54b42'
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
    <>
            <div>
                <Pie data={chartData}             options={{
                title: {
                    display: true,
                    fontSize: 25
                },
                legend: {
                    display: false,
                }
            }}/>
            </div>
       </>
              
    )
}
export default PieChart;
