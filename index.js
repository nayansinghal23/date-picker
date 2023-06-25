// constants
const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();
let currentMonthValue = date.getMonth(),
  currentYearValue = date.getFullYear(),
  totalDaysInMonth = document.querySelector(".days-container");

// setting actual date
if (date.getMonth() < 10) {
  document.querySelector(".selected-date").innerHTML = `${date.getDate()} / 0${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;
} else {
  document.querySelector(".selected-date").innerHTML = `${date.getDate()} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;
}
document.querySelector(".month-item").innerHTML = `${
  monthsArray[date.getMonth()]
} ${date.getFullYear()}`;

// setting click functionality on date
let selectedDate = false;
let datesContainer = document.querySelector(".dates-container");

const isDateSelected = () => {
  if (selectedDate) {
    datesContainer.style.display = "none";
    selectedDate = false;
  } else {
    datesContainer.style.display = "block";
    selectedDate = true;
  }
};

// Prev and Next month / year functionality
const prevMonth = () => {
  currentMonthValue--;
  if (currentMonthValue < 0) {
    currentMonthValue = 11;
    currentYearValue--;
  }
  document.querySelector(
    ".month-item"
  ).innerHTML = `${monthsArray[currentMonthValue]} ${currentYearValue}`;
  rearrangePopulateDates();
};

const nextMonth = () => {
  currentMonthValue++;
  if (currentMonthValue > 11) {
    currentMonthValue = 0;
    currentYearValue++;
  }
  document.querySelector(
    ".month-item"
  ).innerHTML = `${monthsArray[currentMonthValue]} ${currentYearValue}`;
  rearrangePopulateDates();
};

// Populating dates according to their months
const populateDates = () => {
  if (
    currentMonthValue === 0 ||
    currentMonthValue === 2 ||
    currentMonthValue === 4 ||
    currentMonthValue === 6 ||
    currentMonthValue === 7 ||
    currentMonthValue === 9 ||
    currentMonthValue === 11
  ) {
    for (let j = 1; j <= 31; j++) {
      const div = document.createElement("div");
      div.innerHTML = j;
      div.classList.add("day");
      div.addEventListener("click", () => {
        const children = document.querySelectorAll(".day");
        children.forEach((child) => {
          child.classList.remove("selected");
        });
        div.classList.add("selected");
        if (currentMonthValue < 9) {
          if (j < 10) {
            document.querySelector(".selected-date").innerHTML = `0${j} / 0${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          } else {
            document.querySelector(".selected-date").innerHTML = `${j} / 0${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          }
        } else {
          if (j < 10) {
            document.querySelector(".selected-date").innerHTML = `0${j} / ${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          } else {
            document.querySelector(".selected-date").innerHTML = `${j} / ${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          }
        }
      });
      totalDaysInMonth.appendChild(div);
    }
  } else if (currentMonthValue === 1) {
    if (isLeapYear(currentYearValue)) {
      for (let j = 1; j <= 29; j++) {
        const div = document.createElement("div");
        div.innerHTML = j;
        div.classList.add("day");
        div.addEventListener("click", () => {
          const children = document.querySelectorAll(".day");
          children.forEach((child) => {
            child.classList.remove("selected");
          });
          div.classList.add("selected");
          if (j < 10) {
            document.querySelector(".selected-date").innerHTML = `0${j} / 0${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          } else {
            document.querySelector(".selected-date").innerHTML = `${j} / 0${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          }
        });
        totalDaysInMonth.appendChild(div);
      }
    } else {
      for (let j = 1; j <= 28; j++) {
        const div = document.createElement("div");
        div.innerHTML = j;
        div.classList.add("day");
        div.addEventListener("click", () => {
          const children = document.querySelectorAll(".day");
          children.forEach((child) => {
            child.classList.remove("selected");
          });
          div.classList.add("selected");
          if (j < 10) {
            document.querySelector(".selected-date").innerHTML = `0${j} / 0${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          } else {
            document.querySelector(".selected-date").innerHTML = `${j} / 0${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          }
        });
        totalDaysInMonth.appendChild(div);
      }
    }
  } else {
    for (let j = 1; j <= 30; j++) {
      const div = document.createElement("div");
      div.innerHTML = j;
      div.classList.add("day");
      div.addEventListener("click", () => {
        const children = document.querySelectorAll(".day");
        children.forEach((child) => {
          child.classList.remove("selected");
        });
        div.classList.add("selected");
        if (currentMonthValue < 9) {
          if (j < 10) {
            document.querySelector(".selected-date").innerHTML = `0${j} / 0${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          } else {
            document.querySelector(".selected-date").innerHTML = `${j} / 0${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          }
        } else {
          if (j < 10) {
            document.querySelector(".selected-date").innerHTML = `0${j} / ${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          } else {
            document.querySelector(".selected-date").innerHTML = `${j} / ${
              currentMonthValue + 1
            } / ${currentYearValue}`;
          }
        }
      });
      totalDaysInMonth.appendChild(div);
    }
  }
};

populateDates();

// Rearranging Populate Dates function
const rearrangePopulateDates = () => {
  let child = totalDaysInMonth.lastElementChild;
  while (child) {
    totalDaysInMonth.removeChild(child);
    child = totalDaysInMonth.lastElementChild;
  }
  populateDates();
};

// Check for leap year
const isLeapYear = (year) => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  }
  return false;
};
