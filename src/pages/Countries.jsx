import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";

export default function Countries() {
  const [countries, setCountries] = React.useState([]);
  const [filterRegion, setFilterRegion] = React.useState("");
  const [filterName, setFilterName] = React.useState("");

  React.useEffect(() => {
    const urlFetch =
      filterRegion && !filterName
        ? `https://restcountries.com/v3.1/region/${filterRegion}`
        : filterName
        ? `https://restcountries.com/v3.1/name/${filterName}`
        : `https://restcountries.com/v3.1/all`;
    fetch(urlFetch)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [filterName, filterRegion]);

  function renderCountry(arr) {
    return arr.map((country) => {
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
    });
  }

  const countryList =
    countries.length > 0
      ? filterName && filterRegion
        ? renderCountry(
            countries.filter((country) => {
              return country.region.toLowerCase() === filterRegion;
            })
          )
        : renderCountry(countries)
      : "No data availible";

  return (
    <>
      <h1>List of Countries here</h1>
      <form
        style={{ display: "block" }}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          placeholder="Search for a country..."
          id="name-filter"
          value={filterName}
          onChange={(event) => {
            setFilterName(event.target.value);
          }}
        />
        <select
          name="region"
          id="region-filter"
          value={filterRegion}
          onChange={(event) => {
            setFilterRegion(event.target.value);
          }}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      {countryList}
    </>
  );
}
