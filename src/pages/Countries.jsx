import React from "react";
import CountryCard from "../components/CountryCard";

export default function Countries() {
  return (
    <>
      <h1>List of Countries here</h1>
      <form>
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
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </>
  );
}
