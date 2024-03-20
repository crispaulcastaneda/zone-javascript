let firstContainer = document.createElement("p");
let secContainer = document.createElement("p");
let article = document.querySelector(".first__article");
let secArticle = document.querySelector(".sec__article");
article.append(firstContainer);
secArticle.append(secContainer);

/** Spread Syntax (...) */
// allows an iterable, such an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
// object literals, the spread syntax enumerates the properties of an object

/** Basic Example */

const sum = (x, y, z) => {
  return x + y + z;
}

const nums = [1, 2, 3];

console.log(sum(...nums));


const array = [1,2,3];
const obj = { ...array };
console.log(obj);


/** End of Basic Example */


const data = [
  {
    id: 1,
    status: "active",
    name: {
      first: "Harold",
      middle: "Gray",
      last: "Cremin",
    },
    username: "Harold-Cremin",
    password: "IYPiK8NGbmCgsZN",
    emails: ["Roy32@example.com", "Tyra23@gmail.com"],
    devices: ["iPhone", "Acer Laptop", "iPad", "PS5"],
    phoneNumber: "493-544-7689",
    location: {
      street: "1475 Farrell Shore",
      city: "Bayonne",
      state: "West Virginia",
      country: "Brunei Darussalam",
      zip: "63346-2921",
      coordinates: {
        latitude: -23.5186,
        longitude: -114.439,
      },
    },
    website: "https://gentle-foal.name/",
    domain: "clumsy-stadium.biz",
    job: {
      title: "Global Interactions Producer",
      descriptor: "Central",
      area: "Interactions",
      type: "Liaison",
      company: "Robel, Boehm and Marks",
    },
    creditCard: {
      number: "5449-0736-6625-3583",
      cvv: "185",
      issuer: "discover",
    },
    uuid: "7d02d3e9-ae04-4b99-b823-e42473425e4a",
    objectId: "65f12bea7cbf545024ea28db",
  }
];

const getRootData = () => {
  return data;
}

const getContenData = (id) => {
  return data.find((d) => d.id === id);
}
const dataCollection = getContenData(1);

const {
  devices
} = dataCollection;

// using ...devices to array
let dataOfArray = ["32'Monitor", "Nintendo Switch", ...devices];
console.log(dataOfArray);

// Using concatenation
let setOfArray = ["PS4", "iPhone 15"];
let arrConcatRest = setOfArray.concat(...devices);
console.log(arrConcatRest);