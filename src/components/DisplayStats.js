import React,{useEffect,useState}from 'react';
import {getCountryData} from './Api'

const FetchTotalData =({country}) => {

    const [totalCases,getTotalCases]=useState(0);
    const [recovered,getTotalRecovered]=useState(0);
    const [death,getTotalDeath]=useState(0);
    useEffect(() => {
        const fetchdata=async ()=>{
            const responseData=await getCountryData(country);
            getTotalCases(responseData.totalCases)
            getTotalRecovered(responseData.recovered)
            getTotalDeath(responseData.totalDeath)
        }
        fetchdata();
    }, [country]);

    return (
        <>
        <div className="container-2">
            <h4>Total Cases</h4><br/>
            <p className="plus">{totalCases}</p>
        </div>
        <div className="container-2">
            <h4>Total Recovered</h4>
            <p className="ok">{recovered}</p>
        </div>
        <div className="container-2">
            <h4>Total Death</h4>
            <p className="minus">{death}</p>
        </div>

        </>
    )
}

export default FetchTotalData;

