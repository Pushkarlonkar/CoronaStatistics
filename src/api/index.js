import axios  from "axios";
const url = 'https://covid19.mathdro.id/api';

export const fetchData =async(country)=>{

    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }
    try{
        const {data} = await axios.get(changeableUrl);
        // console.log(response); 
        const modifiedData ={
            confirmed : data.confirmed,
            recovered : data.recovered, 
            deaths : data.deaths,
            lastUpdate : data.lastUpdate
        }
        return modifiedData ;
    }catch(error){
        console.log(error);
    }
}

export const fetchCountries = async() =>{
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        // console.log("Inside fetchCountries");
        // console.log(countries);
        return countries;
    } catch (error) {
        console.log(error);
    }
}