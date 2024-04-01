let equation = "";
function handleGetValue(value) {
  equation += value;
  document.getElementById("display").innerHTML = equation;
}
function handleCalculate() {
  const result = eval(equation);
  document.getElementById("display").innerHTML = result;
  equation = result;
}
function clearAll() {
    equation = "";
    document.getElementById("display").innerHTML = "";
    equation = result;
}
function clearOne() {
  equation = equation.slice(0, equation.length - 1);
  document.getElementById("display").innerHTML = equation;
}
function darkTheme() {
  document.getElementById("mainCal").style.backgroundColor = "black";
  document.getElementById("mainCal").style.color = "white";
}
function lightTheme() {
  document.getElementById("mainCal").style.backgroundColor = "white";
}
