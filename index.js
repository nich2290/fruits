"use strict";

function get() {
  fetch("https://inappropriatedb-4dbf.restdb.io/rest/fruit", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d888182fd86cb75861e262c",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(fruits => {
      console.log(fruits);
      fruits.forEach(addFruit);
    });

  document.querySelector("button").addEventListener("click", e => {
    post();
  });
}
get();
function post() {
  const data = {
    name: "Pineapple",
    taste: "Sour",
    season: "Summer"
  };

  const postData = JSON.stringify(data);
  fetch("https://inappropriatedb-4dbf.restdb.io/rest/fruit", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d888182fd86cb75861e262c",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      addFruit(data);
    });
}
function addFruit(fruits) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h1").textContent = fruits.name;
  copy.querySelector("h3").textContent = `Taste: ${fruits.taste}`;
  copy.querySelector("p").textContent = `Season: ${fruits.season}`;
  copy.querySelector("img").src = `https://inappropriatedb-4dbf.restdb.io/media/${fruits.image}`;
  document.querySelector("#app").appendChild(copy);
}
