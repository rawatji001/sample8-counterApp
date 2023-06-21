const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("resetValue");
const displayValue = document.getElementById("displayValue");

//For decrement Button-------------
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed ");
  }
});

//For increment Button-----------
incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});

//For Reset Button------------
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});
