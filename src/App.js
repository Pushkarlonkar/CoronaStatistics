import './App.css';
import {fetchData} from './api';
import React, { useState, useEffect } from 'react';
import Cards from './components/cards/Cards';
import CountryPicker from './components/countryPicker/CountryPicker';
class App extends React.Component{
  state = {
    data : {},
    country : '',
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({data : data});
  }
  handleCountryChange = async(country)=>{
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    this.setState({data : fetchedData,country : country});
    // console.log(country);
  }

  render(){
    if(this.state.data){

      return(
        <div className='container'>
          <div className="title center">
              <h2>CORONA STATISTICS</h2>
          </div>
          <hr/>
          <CountryPicker data = {this.state.data} handleCountryChange= {this.handleCountryChange}/>
          <Cards data = {this.state.data}/>
        
        </div>
      )
    }else{
      return(
        <div>
          Loading.....
        </div>
      )
    }
  }
}

export default App;
