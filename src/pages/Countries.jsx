import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";

export default function Countries() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const countryList =
    (countries.length > 0 &&
      countries.map((country) => {
        // country.name.common
        return (
          <Link key={country.cca3} to={`/${country.cca3.toLowerCase()}`}>
            <CountryCard
              name={country.name.official}
              population={country.population}
              region={country.region}
              capital={country.capital}
              image={country.flags.svg}
            />
          </Link>
        );
      })) ||
    "";

  return (
    <>
      <h1>List of Countries here</h1>
      <form style={{ display: "none" }}>
        <input placeholder="Search for a country..." />
        <select name="region" id="region">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      {countryList}
    </>
  );
}
