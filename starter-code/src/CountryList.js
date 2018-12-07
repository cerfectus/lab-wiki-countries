import React from "react";
import { Link } from "react-router-dom";
import countries from "../src/countries.json";

class CountryList extends React.Component {
  render() {
    return (
      <div className="col-5 country-list">
        <div className="list-group">
          {countries.map((country, index,cca3) => (
            <Link key={index} to={`/detail/${cca3}`} className="list-group-item list-group-item-action ">
                {country.name.common}
            </Link>

          ))}
        </div>
      </div>
    );
  }
}
export default CountryList;
