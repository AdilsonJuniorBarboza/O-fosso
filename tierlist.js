import "https://libs.gullerya.com/data-tier-list/2.2.0/data-tier-list.js";

const items = [
  "Dream Theater",
  "Tool",
  "Apocalyptica",
  "Metallica",
  "Riverside"
];

const dtList = document.querySelector("data-tier-list");
dtList.items = items;

setTimeout(() => {
  dtList.items.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
}, 4000);
