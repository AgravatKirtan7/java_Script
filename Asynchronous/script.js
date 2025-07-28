"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//Render Error

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  // Handle languages safely
  const languages = data.languages ? Object.values(data.languages)[0] : "N/A";

  // Handle currencies safely
  const currencies = data.currencies
    ? Object.values(data.currencies)[0]?.name || "N/A"
    : "N/A";

  // Format population with commas
  const formattedPopulation = (+data.population).toLocaleString();

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" alt="${data.name.common} flag" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${formattedPopulation}</p>
        <p class="country__row"><span>🗣️</span>${languages}</p>
        <p class="country__row"><span>💰</span>${currencies}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbours = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

//   request.addEventListener("load", function () {
//     // Handle HTTP errors
//     if (this.status !== 200) {
//       throw new Error(`Country not found (${this.status})`);
//     }

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render main country with "main" class for styling
//     renderCountry(data, "main");

//     // Get neighbors if they exist
//     const borders = data.borders;
//     if (!borders) {
//       console.log(`${data.name.common} has no neighboring countries.`);
//       return;
//     }

//     console.log(`Loading ${borders.length} neighboring countries...`);

//     // Get neighbor countries data
//     borders.forEach((border) => {
//       const neighborRequest = new XMLHttpRequest();
//       neighborRequest.open(
//         "GET",
//         `https://restcountries.com/v3.1/alpha/${border}`
//       );

//       neighborRequest.addEventListener("load", function () {
//         const [neighborData] = JSON.parse(this.responseText);
//         renderCountry(neighborData, "neighbour");
//       });

//       neighborRequest.send();
//     });
//   });

//   request.addEventListener("error", function () {
//     console.error(`Network error when fetching ${country}`);
//   });

//   request.send();
// };

// getCountryAndNeighbours("usa");

//-
//-
//-
//-
//-

// - -- - - - -- - -- - before
// const request = new XMLHttpRequest();
// request.open("Get", "https://restcountries.com/v3.1/name/india");
// request.send();

// const request = fetch("https://restcountries.com/v3.1/name/india");
// console.log(request);

//promises

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbours = data[0].borders[0];
//       if (!neighbours) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbours}`);
//     })

//     .then((data) => {
//       if (data) {
//         renderCountry(data[0], "neighbour");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching country data:", error);
//       renderError(`Something went wrong ❌❌❌❌ ${error.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });
// // getCountryData("usa");

//error handoling--------------------------------------------------------------------------
// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbours = data[0].borders[0];
//       if (!neighbours) return;

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbours}`,
//         "Neighbour not found"
//       );
//     })

//     .then((data) => {
//       if (data) {
//         renderCountry(data[0], "neighbour");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching country data:", error);
//       renderError(`Something went wrong ❌❌❌❌ ${error.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });
// getCountryData("usa");

//----------------------------------------------------------

//promise and setTimeout
// console.log("test start");
// setTimeout(() => {
//   console.log("0 sec timer");
// }, 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// console.log("test end");

// const lotteryPromise = new Promise(function (resolve, reject) {
//   // console.log("lottery draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You win");
//     } else {
//       reject(new Error("You lost"));
//     }
//   }, 2000);
// });
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log("1 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("1 second passed");
//   });

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (country) {
  // Geolocation
  const pos = await getPosition();

  const { latitude: lat, longitude: lng } = pos.coords;
  //geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();

  //country data
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);

  renderCountry(data[0]);
  return `you are in ${dataGeo.city}, ${dataGeo.country}`;
};

// const city = whereAmI("portugal");
// console.log(city);

// whereAmI("portugal")
//   .then((city) => console.log(city))
//   .catch((err) => console.error(err));

// console.log("hi");

const getCountry = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    if (!res.ok) {
      throw new Error(`Country not found: ${country} (${res.status})`);
    }

    const data = await res.json();
    return data; // Return the parsed data
  } catch (error) {
    console.error(`Error fetching ${country}:`, error);
    throw error; // Re-throw to be handled by caller
  }
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getCountry(c1),
      getCountry(c2),
      getCountry(c3),
    ]);

    // Fixed: Added return statement and proper array access
    const capitals = data.map((countryData) => {
      return countryData[0].capital[0]; // capital is also an array in v3.1 API
    });

    console.log(capitals);
    return capitals;
  } catch (err) {
    console.error("Error fetching countries:", err);
  }
};

// get3Countries("portugal", "canada", "usa");

//  promise.race

// (async function () {
//   const res = await Promise.race([
//     getCountry("portugal"),
//     getCountry("usa"),
//     getCountry("canada"),
//   ]);
//   console.log(res);
//   const capital = res[0].capital[0];
//   console.log(capital);
// })();

// ---------------------------- coding challenge -1  ------------------------//

const geography = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country}`);
      //   return data;
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
      return res.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((error) => {
      console.error("Error fetching geography data:", error);
    })
    .finally(() => {
      // countriesContainer.style.opacity = 1;
    });
};

// geography(52.508, 13.381);

//-------------------------------------------coding challenge-2 -----------------------------------------------

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgCOntainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      document.querySelector(".images").append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};
// let currentImg;
// createImage("img/img-2.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("img loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-3.jpg");
//   })
//   .then((img) => {
//     let currentImg = img;
//     console.log("img loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((error) => console.error(error));

/// -----------------------------------------coding=challenge-3-----------------------------------------------

//wait function

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

const imgContainer = document.querySelector(".images");

const createImage1 = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

// createImage1('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage1('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage1("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    // Load image 1
    img = await createImage1("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(5);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage1(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
