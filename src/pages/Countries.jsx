import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";

export default function Countries() {
  const [countries, setCountries] = React.useState([]);
  const [filterRegion, setFilterRegion] = React.useState("");

  React.useEffect(() => {
    const urlFetch = filterRegion
      ? `https://restcountries.com/v3.1/region/${filterRegion}`
      : "https://restcountries.com/v3.1/all";
    fetch(urlFetch)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [filterRegion]);

  const countryList =
    (countries.length > 0 &&
      countries.map((country) => {
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
      <form
        style={{ display: "block" }}
        onSubmit={(event) => event.preventDefault()}
      >
        <input placeholder="Search for a country..." />
        <select
          name="region"
          id="region-select"
          value={filterRegion}
          onChange={(event) => {
            setFilterRegion(event.target.value);
          }}
        >
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
