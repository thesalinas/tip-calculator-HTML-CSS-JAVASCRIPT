let bill = document.getElementById("bill");
let billValue = parseInt(bill.value);

let numberPerson = document.getElementById("people");
let numberPersonValue = parseInt(numberPerson.value);

let tipBtn = document.querySelectorAll(".btns-button");

let tipAmount = document.getElementById("tip-amount");
let tipTotal = document.getElementById("total-amount");

let alertBill = document.getElementById("alert-bill");
let alertPeople = document.getElementById("alert-people");

let tipValue;
tipBtn.forEach((element) => {
  element.addEventListener("click", (event) => {
    removeActive();
    customBtn.value = toString("custom");
    tipValue = parseInt(event.target.innerText.slice(0, -1));
    element.classList.add("active");
    calculateTips();
  });
});

const removeActive = () => {
  //Cambiar estilo Button
  tipBtn.forEach((element) => {
    element.classList.remove("active");
  });
};

//Actualizamos el BILL INPUT
bill.addEventListener("input", () => {
  billValue = parseInt(bill.value);
  if (billValue == 0 || isNaN(billValue)) {
    bill.style.borderColor = "rgb(164, 68, 68)";
    alertBill.classList.add("error");
  } else {
    alertBill.classList.remove("error");
    bill.style.borderColor = "hsl(172, 67%, 45%)";
    calculateTips();
  }
});

//Actualizamos el NUMBER_PEOPLE INPUT
numberPerson.addEventListener("input", () => {
  numberPersonValue = parseInt(numberPerson.value);
  if (numberPersonValue == 0 || isNaN(numberPersonValue)) {
    numberPerson.style.borderColor = "rgb(164, 68, 68)";
    alertPeople.classList.add("error");
  } else {
    alertPeople.classList.remove("error");
    numberPerson.style.borderColor = "hsl(172, 67%, 45%)";
    calculateTips();
  }
});

const calculateTips = () => {
  //Tip Amount
  tipAmount.innerText = (
    (billValue * tipValue) /
    100 /
    numberPersonValue
  ).toFixed(2);
  // Total Amount
  tipTotal.innerText = (
    ((billValue * tipValue) / 100 + billValue) /
    numberPersonValue
  ).toFixed(2);
};

// Acutalizando con el Custoom

let customBtn = document.querySelector(".btns-custom");

customBtn.addEventListener("click", () => {
  removeActive();
});

customBtn.addEventListener("input", () => {
  tipValue = parseInt(customBtn.value);
  console.log(tipValue);
  if (!isNaN(tipValue)) {
    calculateTips();
  }
});

let resetBtn = document.querySelector(".result-reset");
resetBtn.addEventListener("click", () => {
  bill.value = 0;
  billValue = 0;
  numberPerson.value = 0;
  numberPersonValue = 0;
  tipAmount.innerText = 0;
  tipTotal.innerText = 0;
  customBtn.value = "value";
});
