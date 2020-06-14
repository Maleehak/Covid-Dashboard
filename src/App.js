import React,{useState,useEffect}from 'react';
import CountrySelector from './components/CountrySelector';
import {getAllCountryData} from './components/Api';

function App() {
      const [countries, setCountries] = useState([]);
      const fetchdata=async () => {
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
        <div className="body parallax">
          <CountrySelector countries={countries}/>
        </div>
      );
}

export default App;
