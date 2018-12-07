import React, { Component } from 'react';
import './App.css';
import countries from "./countries.json"
import { Countries, CountryDetail } from './components/CountryDetail';
import CountryList from "./CountryList"
import Navbar from "./components/Navbar"
import Router from "./Router"

class App extends Component {
  constructor(){
    super();
    this.state = {
      countriez: []
    }
  }
  componentWillMount(){
    let {countriez} = this.state
    this.setState({countriez:countries})
    // console.log(countriez)
  }
  render(){
    let {countriez} = this.state;
    console.log("que es",countriez)
    return(
      <div>
        <Navbar/>
      
      <div className="container">

        <div>
        <CountryList/>
        </div>
        <div className="detail">
          <Router/>
        </div>
      </div>
      </div>
    )
  }  
}


export default App;
//capital, area, borders