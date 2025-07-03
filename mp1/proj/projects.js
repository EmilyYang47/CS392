let numOne = document.getElementById("one");
let numTwo = document.getElementById("two");
let result = document.getElementById("output");

function doAdd() {
  console.log("I am working");
  result.innerHTML = `${String(Number(numOne.value) + Number(numTwo.value))}`;
}
