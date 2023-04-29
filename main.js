//INPUTS
const DayInput = document.getElementById("day");
const MonthInput = document.getElementById("month");
const YearInput = document.getElementById("year");

//OUTPUTS
const dOb = document.getElementById("DD");
const mOb = document.getElementById("MM");
const yOb = document.getElementById("YY");

//FORM ELEMENT
const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Date_validity() {
    const user_input = document.querySelectorAll("input");
    let date_validator = true;
    user_input.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = 
            "this field is required.";
            date_validator = false;
        } else if (MonthInput.value > 12) {
            MonthInput.style.borderColor = "red";
            MonthInput.parentElement.querySelector("small").innerText =
             "must be a valid month.";
            date_validator = false;
        } else if (DayInput.value > 31) {
            DayInput.style.bordercolor = "red";
            DayInput.parentElement.querySelector("small").innerText = 
            "must be a valid day.";
            date_validator = false;
        } else {
            i.style.bordercolor = "black";
            parent.querySelector("small").innerText = "";
            date_validator = true;
        }
    });
    return date_validator;
}

function Submit_button(e) {
    e.preventDefault();
    if (Date_validity()) {
        if (DayInput.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (MonthInput.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - DayInput.value;
        const m = month - MonthInput.value;
        const y = year - YearInput.value;

        dOb.innerHTML = d;
        mOb.innerHTML = m;
        yOb.innerHTML = y;
    }
}

//ADDING THE SUBMIT EVENTLISTENER TO FORM
form.addEventListener("submit", Submit_button);
