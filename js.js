// debugger;
// var drawCats = function (howManyTimes) {
//   for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^=");
//   }
//   drawCats(10);
// };
const ad = 1
document.addEventListener("DOMContentLoaded", documentOnReady);

function documentOnReady() {
  const arraySmiles = ["🛤️", "🧖", "🧗‍♀️", "🛤️", "🧖", "🧗‍♀️", "😀", "🦁", "🧩"];
  const checkThemeEl = document.getElementById("checkTheme");
  const tabelEl = document.getElementById("table1");
  const black = "#151515";
  const white = "#aaa";
  const smilesWrapEl = document.getElementById("smile-wrap-element");
  
  console.log(`get el : ${tabelEl}`);
  checkThemeEl.addEventListener("change", function () {
    const styleObj = document.documentElement.style;
    if (checkThemeEl.checked) {
      styleObj.setProperty("--primery-color", white);
      styleObj.setProperty("--contrast-color", black);
    } else {
      styleObj.setProperty("--primery-color", black);
      styleObj.setProperty("--contrast-color", white);
    }
  });

  arraySmiles.forEach((i) => {
    const newEl = document.createElement("div");
    newEl.textContent = i;
    newEl.classList.add("smile-card");
    smilesWrapEl.appendChild(newEl);
  });
  function createTable(count){
    count = prompt('Введіть число');
    for (let i = 0; i < count; i = i + 1) {
    console.log(i);
    const rowElement = document.createElement("tr");
    
    console.log("i", i);
    for (let j = 0; j < count; j = j + 1) {
      console.log("j", j);
      const tdELement = document.createElement("td");
      rowElement.appendChild(tdELement);
      tdELement.innerHTML = j + 1 + i * 10
    }
    tabelEl.appendChild(rowElement);
  }
  }
  createTable()
}

const array = ["🛤️", "🧖", "🧗‍♀️", "🛤️", "🧖", "🧗‍♀️"];

for (let i = 0; i < array.length; i++) {
  const value = array[i];
  if (value === "🧍‍♂️") {
    console.log("People");
  } else if (value === "🛤️") {
    console.log("sub");
  }
}
array.forEach(function (i, index) {
  console.log("Element from forEach:", i, index);
});
const a = 12;

function addTable() {
  const table = document.getElementById("table");
  let counter = 1;
  for (let i = 1; i <= 10; i++) {
    const rowTable = table.insertRow(i - 1);
    rowTable.classList.add = "rowTable";

    for (l = 0; l <= 9; l++) {
      const cellTable = rowTable.insertCell(l);
      cellTable.innerText = counter++;
      cellTable.style.backgroundColor = "green";
      cellTable.classList.add("CellTable");

      if (i % 2 === 0) {
        cellTable.classList.add("Alternative");
        cellTable.style.backgroundColor = "red";
      }
      cellTable.addEventListener("mouseover", function () {
        cellTable.style.backgroundColor = "gold";
        cellTable.style.color = "black";
      });
      cellTable.addEventListener("mouseout", function () {
        cellTable.style.backgroundColor = "green";
        cellTable.style.color = "red";
        if (i % 2 === 0) {
          cellTable.classList.add("Alternative");
          cellTable.style.backgroundColor = "red";
        }
      });
    }
  }
}

addTable();
console.log(table);

//Урок 7

function getEl(id) {
  const symbol = id[0];
  if (symbol === "#") {
    return document.getElementById(id.slice(1));
  } else if (symbol === ".") {
    return document.getElementsByClassName(id.slice(1));
  } else {
    return document.getElementsByTagName(id);
  }
}
