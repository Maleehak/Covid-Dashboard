import React,{useState,useEffect}from 'react';
import CountrySelector from './components/CountrySelector'
import {getAllCountryData} from './components/Api'
import './App.css'


function App() {
      const [countries, setCountries] = useState([]);
      const fetchdata=async ()=>{
      const responseData=await getAllCountryData();
      const data=responseData.data;
      const countryArray=data.map((data)=>{
        return data.Country_text;
      });
      setCountries(countryArray);

    }
    useEffect(() => {
      fetchdata();
  }, [])
      
      return (
        <div >
          <CountrySelector countries={countries}/>
        </div>
      );
}

export default App;
