"use strict";
let firstContainer = document.createElement("p");
let secContainer = document.createElement("p");
let article = document.querySelector(".first__article");
let secArticle = document.querySelector(".sec__article");
article.append(firstContainer);
secArticle.append(secContainer);

/** Sample of Destructuring in a simple way */
  // Destructuring - To easy get data out of object / out of an array

let holder;
let a, b, rest;
[a, b] = [10, 20];
firstContainer.append(`The result of the a and b are `, [10, 20]);
console.log(` a and b equivalent >>`, a, b);

/** End of Sample */

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
  },
  {
    id: 2,
    status: "disabled",
    name: {
      first: "Margarett",
      middle: "Hayden",
      last: "Rohan",
    },
    username: "Margarett-Rohan",
    password: "PKAR_EKALUaw5EK",
    emails: ["Ava46@gmail.com", "Zion26@example.com"],
    phoneNumber: "298.406.9504 x6876",
    location: {
      street: "6181 Hettinger Hollow",
      city: "Rancho Cordova",
      state: "Minnesota",
      country: "Sweden",
      zip: "63810-2441",
      coordinates: {
        latitude: 75.4238,
        longitude: 35.485,
      },
    },
    website: "https://ornate-filly.name",
    domain: "negligible-text.biz",
    job: {
      title: "Global Optimization Analyst",
      descriptor: "Internal",
      area: "Interactions",
      type: "Orchestrator",
      company: "Russel, Breitenberg and Schaden",
    },
    creditCard: {
      number: "675939620489768556",
      cvv: "309",
      issuer: "mastercard",
    },
    uuid: "ebdd0e10-225f-4308-b073-05be266442f8",
    objectId: "65f12bea7cbf545024ea28dc",
  },
  {
    id: 3,
    status: "disabled",
    name: {
      first: "Rosemary",
      middle: "Brooklyn",
      last: "Heidenreich",
    },
    username: "Rosemary-Heidenreich",
    password: "W5rOWvTxCuzXq5y",
    emails: ["Maximillian.Von@example.com", "Bartholome.Turner@example.com"],
    phoneNumber: "398-370-5795 x7143",
    location: {
      street: "87023 Eloisa Squares",
      city: "Hammeschester",
      state: "Delaware",
      country: "Falkland Islands (Malvinas)",
      zip: "79667-2649",
      coordinates: {
        latitude: -17.4393,
        longitude: 139.4253,
      },
    },
    website: "https://finished-overhead.info",
    domain: "ill-informed-dilution.org",
    job: {
      title: "Direct Applications Planner",
      descriptor: "Chief",
      area: "Integration",
      type: "Producer",
      company: "Beer LLC",
    },
    creditCard: {
      number: "6763-3399-4269-1797",
      cvv: "654",
      issuer: "discover",
    },
    uuid: "4c9d2324-4f91-492e-a5bb-6331bdf8729c",
    objectId: "65f12bea7cbf545024ea28dd",
  },
  {
    id: 4,
    status: "disabled",
    name: {
      first: "Gaetano",
      middle: "River",
      last: "Runte",
    },
    username: "Gaetano-Runte",
    password: "d3dPPKI7HHkw8Jm",
    emails: [
      "Branson91@example.com",
      "Ana66@gmail.com",
      "sample@yahoo.com",
      "sample2@yahoo.com",
    ],
    phoneNumber: "(974) 916-2136",
    location: {
      street: "66872 Maybelle Rue",
      city: "Blockburgh",
      state: "Louisiana",
      country: "Central African Republic",
      zip: "68859-9619",
      coordinates: {
        latitude: 68.0224,
        longitude: -41.8457,
      },
    },
    website: "https://remote-igloo.name",
    domain: "intent-solidity.com",
    job: {
      title: "Future Division Facilitator",
      descriptor: "Chief",
      area: "Markets",
      type: "Designer",
      company: "Hagenes Inc",
    },
    creditCard: {
      number: "4104116779865",
      cvv: "075",
      issuer: "diners_club",
    },
    devices: "iPhone 13",
    uuid: "d0ac2284-b37b-4bb7-aa3d-d114fc957c07",
    objectId: "65f12bea7cbf545024ea28de",
  },
];

const getRootData = () => {
  return data;
};

const getContentData = (id) => {
  return data.find((d) => d.id === id);
};

const dataCollection = getContentData(4);

const {
  username,
  website,
  domain,
  uuid,
  creditCard,
  emails,
  job,
  devices,
  password,
  status,
} = dataCollection;
console.log(dataCollection);

let setOfItems = `
  Some of the data of Mr. ${username}. We saw the published website: ${website} and domain ${domain}. Some credits may leak ${creditCard.issuer}, ${creditCard.number}, ${creditCard.cvv}
`;

secContainer.append(setOfItems)