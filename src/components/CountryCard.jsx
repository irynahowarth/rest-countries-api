import React from "react";
import Img from "../assets/images/ua.svg";

export default function CountryCard() {
  return (
    <section>
      <img src={Img} width={150} />
      <h1>Country Name</h1>
      <h4>
        Population: <span>44134693</span>
      </h4>
      <h4>
        Region: <span>Europe</span>
      </h4>
      <h4>
        Capital: <span>Kyiv</span>
      </h4>
    </section>
  );
}
