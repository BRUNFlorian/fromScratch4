// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

let countryArray = [];

let fetchCountries = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countryArray = data));
  console.log(countryArray);

  displayCountry();
};

fetchCountries();

let displayCountry = () => {
  // On boucle sur chaque pays de notre tableau countryArray
  countryArray.forEach((country) => {
    const displayCountryFlag = country.flags.png;
    const displayCountryName = country.name.common;
    const displayCountryCapital =
      country.capital && country.capital[0] ? country.capital[0] : "Inconnue";
    const displayCountryPopulation = country.population;

    let countryContainer = document.querySelector(".countries-container");

    let countryCard = document.createElement("div");
    countryCard.classList.add("country-card"); //
    countryContainer.appendChild(countryCard);

    // Injection des données dans la carte
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
};
