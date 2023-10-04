import React from "react";

export default function CountryCard(props) {
  return (
    <section>
      <img src={props.image} width={150} />
      <h1>{props.name}</h1>
      <h4>
        Population: <span>{props.population}</span>
      </h4>
      <h4>
        Region: <span>{props.region}</span>
      </h4>
      <h4>
        Capital: <span>{props.capital ? props.capital.join(", ") : ""}</span>
      </h4>
    </section>
  );
}
