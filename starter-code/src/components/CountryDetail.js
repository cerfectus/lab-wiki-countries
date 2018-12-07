import React from "react";
import countries from '../countries.json';
import {Link} from "react-router-dom";

class CountryDetail extends React.Component{
    constructor(){
        super()
        this.state={
            cca3: ""
        }
    }
    render(){
        //compara el cca3
        let cca3 = this.props.match.params.cca3;
        console.log("cca3", cca3)
        let country = countries.find(country => cca3 === cca3)

        return(
            <div className="col-7">
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td className='td-capital'>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((cca3, index) => {
                                    const country = countries.find(country => country.cca3 === cca3);
                                    return (
                                        <li key={index}>
                                            <Link key={index} to={`/detail/${country.cca3}`}>
                                                {country.name.common}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    
}
 export default CountryDetail;


