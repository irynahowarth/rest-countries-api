import React from "react";
import { useParams } from "react-router-dom";
import Img from "../assets/images/ua.svg";

export default function CountryDetail() {
  const { id } = useParams();
  const [currentCountry, setCurrentCountry] = React.useState(null);
  const [countryCode, setCountryCode] = React.useState(null);

  // React.useEffect(() => {
  //   Promise.all([
  //     fetch(`https://restcountries.com/v3.1/alpha?codes=${id}`),
  //     fetch(`https://restcountries.com/v3.1/all?fields=name,cca3`),
  //   ])
  //     .then(([resOne, resTwo]) => Promise.all([resOne.json(), resTwo.json()]))
  //     .then(([dataOne, dataTwo]) => {
  //       setCurrentCountry(dataOne[0]);
  //       setCountryCode(dataTwo);
  //     });
  // }, []);

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentCountry(data[0]));
  }, []);

  // https://restcountries.com/v3.1/all?fields=name,cca3,borders
  //https://restcountries.com/v3.1/alpha?codes=CAN,MEX&fields=name

  React.useEffect(() => {
    if (currentCountry) {
      const codeQuery = currentCountry.borders.join(",");
      fetch(
        `https://restcountries.com/v3.1/alpha?codes=${codeQuery}&fields=name`
      )
        .then((res) => res.json())
        .then((data) => setCountryCode(data));
    }
  }, [currentCountry]);

  if (countryCode) {
    console.log(countryCode);
  }

  return (
    <>
      {currentCountry ? (
        <section>
          <img src={currentCountry.flags.svg} width={300} />
          <h2>{currentCountry.name.official}</h2>
          <h4>
            Native Name:{" "}
            <span>
              {Object.values(currentCountry.name.nativeName)
                .map((item) => item.official)
                .join(" ,")}
            </span>
          </h4>
          <h4>
            Population: <span>{currentCountry.population}</span>
          </h4>
          <h4>
            Region: <span>{currentCountry.region}</span>
          </h4>
          {currentCountry.subregion && (
            <h4>
              Sub Region: <span>{currentCountry.subregion}</span>
            </h4>
          )}
          <h4>
            Capital: <span>{currentCountry.capital.join(", ")}</span>
          </h4>
          <h4>
            Top Level Domain: <span>{currentCountry.tld.join(", ")}</span>
          </h4>
          <h4>
            Currencies:{" "}
            <span>
              {Object.values(currentCountry.currencies)
                .map((item) => item.name)
                .join(", ")}
            </span>
          </h4>
          <h4>
            Languages:{" "}
            <span>{Object.values(currentCountry.languages).join(", ")}</span>
          </h4>
          <h4>Border Countries:</h4>
          <ul>{countryCode && <h1>YEP</h1>}</ul>
        </section>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
}
