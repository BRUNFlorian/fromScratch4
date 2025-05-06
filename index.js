let countryArray = [];

let fetchCountries = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countryArray = data));
  console.log(countryArray);

  displayCountry(countryArray);
};

fetchCountries();

let displayCountry = (countries) => {
  let countryContainer = document.querySelector(".countries-container");
  countryContainer.innerHTML = "";

  countries.forEach((country) => {
    const displayCountryFlag = country.flags.png;
    const displayCountryName = country.name.common;
    const displayCountryCapital =
      country.capital && country.capital[0] ? country.capital[0] : "Inconnue";
    const displayCountryPopulation = country.population;

    let countryCard = document.createElement("div");
    countryCard.classList.add("country-card");
    countryContainer.appendChild(countryCard);

    countryCard.innerHTML = `
      <img src="${displayCountryFlag}" alt="Flag ${displayCountryName}">
      <h1>Country: ${displayCountryName}</h1>
      <h2>Capital: ${displayCountryCapital}</h2>
      <p>Population: ${displayCountryPopulation}</p>
    `;
  });
};

let inputSearch = document.querySelector("#inputSearch");

inputSearch.addEventListener("input", (e) => {
  let inputText = e.target.value;
  console.log(inputText);

  searchFilter(inputText);
});

let searchFilter = (inputText) => {
  let filteredCountries = countryArray.filter((country) =>
    country.name.common.toLowerCase().includes(inputText.toLowerCase())
  );
  console.log(filteredCountries);

  displayCountry(filteredCountries);
};
