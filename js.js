function addNum() {
  const firstNum = prompt("Введіть перше число");
 
 const secondNum = prompt("Введіть друге число");

 const thirdNum = prompt("Введіть третье число");

  if (firstNum === null || secondNum === null || thirdNum === null) {
    alert("Ви вийшли");
  } else if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
    alert("Введіть будь ласка число");
  } else if (firstNum === "" || secondNum === "" || thirdNum === "") {
    alert("Нічого не написано!");
  } else {
    const result = (Number(firstNum) + Number(secondNum) + Number(thirdNum)) / 3;
    alert(`Середне значення 3-х чисел : ${result}`);
  }
}
addNum();

