import axios from 'axios';

//to get total cases,total deaths and total recovered for each country
export const getCountryData=async (countryy)=>{
    try {
            const url=`https://covid-19.dataflowkit.com/v1/${countryy}`
            const data= await axios.get(url);
            const dataArray=await(Object.values(data.data));
            const dataLength=dataArray.length;
            const totalCases=dataArray[dataLength-3];
            const totalDeath=dataArray[dataLength-2]
            const recovered=dataArray[dataLength-1];
            return {totalCases,totalDeath,recovered}
    } catch (e) {
            console.log(e);
        }
}

//To get list of all countries name
export const getAllCountryData=async () =>{
        try {
                const data= await axios.get('https://covid-19.dataflowkit.com/v1');
                return data;
        } catch (e) {
                console.log(e);
            }

 }


  