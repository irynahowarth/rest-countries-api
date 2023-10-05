import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetail() {
  const { id } = useParams();
  const [currentCountry, setCurrentCountry] = React.useState(null);
  const [countryCode, setCountryCode] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?fullText=true&codes=${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentCountry(data[0]));
  }, [id]);

  React.useEffect(() => {
    if (currentCountry) {
      const codeQuery = currentCountry.borders.join(",");
      fetch(
        `https://restcountries.com/v3.1/alpha?codes=${codeQuery}&fields=name,cca3`
      )
        .then((res) => res.json())
        .then((data) => setCountryCode(data));
    }
  }, [currentCountry]);
  var countryBordersEls = "";

  if (countryCode) {
    countryBordersEls = countryCode.map((el) => {
      return (
        <Link to={`/${el.cca3.toLowerCase()}`} key={el.cca3}>
          {el.name.common}
        </Link>
      );
    });
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
          <ul>{countryCode && countryBordersEls}</ul>
        </section>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
}
