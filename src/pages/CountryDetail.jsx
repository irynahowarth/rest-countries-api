import React from "react";
import Img from "../assets/images/ua.svg";

export default function CountryDetail() {
  return (
    <>
      <img src={Img} width={400} />
      <h1>Ukraine</h1>
      <h4>
        Native Name: <span>Україна</span>
      </h4>
      <h4>
        Population: <span>44134693</span>
      </h4>
      <h4>
        Region: <span>Europe</span>
      </h4>
      <h4>
        Sub Region: <span>Eastern Europe</span>
      </h4>
      <h4>
        Capital: <span>Kyiv</span>
      </h4>
      <h4>
        Top Level Domain: <span>.ua</span>
      </h4>
      <h4>
        Currencies: <span>Ukrainian hryvnia</span>
      </h4>
      <h4>
        Languages: <span>Ukrainian</span>
      </h4>
      <h4>Border Countries:</h4>
      <ul>
        <li>
          <a>Belorussia</a>
        </li>
        <li>
          <a>Hungary</a>
        </li>
        <li>
          <a>Moldova</a>
        </li>
        <li>
          <a>Poland</a>
        </li>
        <li>
          <a>Romania</a>
        </li>
        <li>
          <a>Russia</a>
        </li>
        <li>
          <a>Slovakia</a>
        </li>
      </ul>
    </>
  );
}
