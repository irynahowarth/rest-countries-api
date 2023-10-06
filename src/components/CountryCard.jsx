import React from "react";

export default function CountryCard(props) {
  return (
    <>
      <div className="country-tile-flag">
        <img src={props.image} />
      </div>
      <div className="country-tile-details">
        <h3>{props.name}</h3>
        <h4>
          Population: <span>{props.population.toLocaleString("en-GB")}</span>
        </h4>
        <h4>
          Region: <span>{props.region}</span>
        </h4>
        <h4>
          Capital: <span>{props.capital ? props.capital.join(", ") : ""}</span>
        </h4>
      </div>
    </>
  );
}
