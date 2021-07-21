/* import * as $ from 'jquery' */
/* import xml from './assets/' */
/* import csv from './assets/' */
/* import "./style.css"; */
import "./style.scss";

let clicked = null;
const prevDay = document.getElementsByClassName("prev-date");
const nextDay = document.getElementsByClassName("next-date");

let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const newEventModal = document.getElementById("newEventModal");
const backDrop = document.getElementById("modalBackDrop");
const monthDays = document.querySelector(".days");
const weakDays = document.querySelector(".weakDays");

const dayOfWeak = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayOfWeakStartWithMon = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

function openModal(dt) {
  clicked = dt;

  const eventForDay = events.find((e) => e.dt === clicked);

  if (eventForDay) {
    document.getElementById("eventText").innerText = eventForDay.title;
    deleteEventModal.style.display = "block";
  } else {
    newEventModal.style.display = "block";
  }
  backDrop.style.display = "block";
}

function renderCalendar() {
  date.setDate(1);

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); //daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  let firstDayIndex = date.getDay();
  let firstDayIndexNew = date.getDay() - 1;
  /* firstDayIndex; */

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
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

  document.querySelector(".date h1").innerHTML = months[date.getMonth()]; // get current months

  document.querySelector(".date p").innerHTML = new Date().toDateString(); // get current day, months, day, year

  let weak = "";
  let days = "";
  let newWeak = "";
  let newDays = "";
  let daysMonHol = "";
  let daysTueHol = "";
  let daysWedHol = "";
  let daysThuHol = "";
  let daysFriHol = "";
  // prev days
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  //end prev days

  // new prev days
  for (let t = firstDayIndexNew; t > 0; t--) {
    newDays += `<div class="prev-date">${prevLastDay - t + 1}</div>`;
  }
  // end new prev days

  // new prev days
  for (let h = firstDayIndex; h > 0; h--) {
    daysMonHol += `<div class="prev-date">${prevLastDay - h + 1}</div>`;
  }
  // end new prev days
  for (let q = firstDayIndex; q > 0; q--) {
    daysTueHol += `<div class="prev-date">${prevLastDay - q + 1}</div>`;
  }

  for (let w = firstDayIndex; w > 0; w--) {
    daysWedHol += `<div class="prev-date">${prevLastDay - w + 1}</div>`;
  }

  for (let e = firstDayIndex; e > 0; e--) {
    daysThuHol += `<div class="prev-date">${prevLastDay - e + 1}</div>`;
  }

  for (let r = firstDayIndex; r > 0; r--) {
    daysFriHol += `<div class="prev-date">${prevLastDay - r + 1}</div>`;
  }
  // weak
  for (let k = 0; k < dayOfWeak.length; k++) {
    weak += `<div>${dayOfWeak[k]}</div>`;
  }
  for (let a = 0; a < dayOfWeakStartWithMon.length; a++) {
    newWeak += `<div>${dayOfWeakStartWithMon[a]}</div>`;
  }
  // end weak

  // current day
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class = "today">${i}</div>`;
    } else {
      days += `<div class = 'click-div'>${i}</div>`;
    }
  }
  // end current day

  // new current day
  for (let p = 1; p <= lastDay; p++) {
    if (
      p === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      newDays += `<div class = "today">${p}</div>`;
    } else {
      newDays += `<div class = 'click-div'>${p}</div>`;
    }
  }
  //end new current day

  // new current day mon
  for (let z = 1; z <= lastDay; z++) {
    if (
      z === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysMonHol += `<div class = "today">${z}</div>`;
    } else {
      daysMonHol += `<div class ="holiday-mon">${z}</div>`;
    }
  }
  for (let y = 1; y <= lastDay; y++) {
    if (
      y === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysTueHol += `<div class = "today">${y}</div>`;
    } else {
      daysTueHol += `<div class ="holiday-tue">${y}</div>`;
    }
  }
  for (let u = 1; u <= lastDay; u++) {
    if (
      u === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysWedHol += `<div class = "today">${u}</div>`;
    } else {
      daysWedHol += `<div class ="holiday-wed">${u}</div>`;
    }
  }
  for (let o = 1; o <= lastDay; o++) {
    if (
      o === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysThuHol += `<div class = "today">${o}</div>`;
    } else {
      daysThuHol += `<div class ="holiday-thu">${o}</div>`;
    }
  }
  for (let f = 1; f <= lastDay; f++) {
    if (
      f === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysFriHol += `<div class = "today">${f}</div>`;
    } else {
      daysFriHol += `<div class ="holiday-fri">${f}</div>`;
    }
  }

  // end new current day mon

  // next days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  //end next days

  // new next days
  for (let s = 1; s <= nextDays; s++) {
    newDays += `<div class="next-date">${s}</div>`;
  }
  //end new next days

  // new next days
  for (let l = 1; l <= nextDays; l++) {
    daysMonHol += `<div class="next-date">${l}</div>`;
  }
  //end new next days
  for (let g = 1; g <= nextDays; g++) {
    daysTueHol += `<div class="next-date">${g}</div>`;
  }
  for (let b = 1; b <= nextDays; b++) {
    daysWedHol += `<div class="next-date">${b}</div>`;
  }
  for (let n = 1; n <= nextDays; n++) {
    daysThuHol += `<div class="next-date">${n}</div>`;
  }
  for (let m = 1; m <= nextDays; m++) {
    daysFriHol += `<div class="next-date">${m}</div>`;
  }

  if (startWithMon.checked) {
    weakDays.innerHTML = newWeak;
    monthDays.innerHTML = newDays;
  } else {
    weakDays.innerHTML = weak;
    monthDays.innerHTML = days;
  }

  if (hideInactiveDays.checked) {
    for (let i = 0; i < prevDay.length; i++) {
      prevDay[i].style.opacity = "0";
    }
    for (let j = 0; j < nextDay.length; j++) {
      nextDay[j].style.opacity = "0";
    }
  } else {
    for (let i = 0; i < prevDay.length; i++) {
      prevDay[i].style.opacity = "0.5";
    }
    for (let j = 0; j < nextDay.length; j++) {
      nextDay[j].style.opacity = "0.5";
    }
  }

  if (monHoliday.checked) {
    monthDays.innerHTML = daysMonHol;
  }
  if (tueHoliday.checked) {
    monthDays.innerHTML = daysTueHol;
  }
  if (wedHoliday.checked) {
    monthDays.innerHTML = daysWedHol;
  }
  if (thuHoliday.checked) {
    monthDays.innerHTML = daysThuHol;
  }
  if (friHoliday.checked) {
    monthDays.innerHTML = daysFriHol;
  }
}

function inactivePrevDays() {
  hideInactiveDays.addEventListener("click", () => {
    renderCalendar();
  });
}

function startMonday() {
  startWithMon.addEventListener("change", () => {
    renderCalendar();
  });
}

monthDays.addEventListener("click", () =>
  openModal(`${month + 1}/ ${day}/ ${year}`)
);

function initButtons() {
  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
}

function closeModal() {
  newEventModal.style.display = "none";
  backDrop.style.display = "none";
  eventTitleInput.value = "";
  clicked = null;
  renderCalendar();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove("error");

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem("events", JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add("error");
  }
}

function configOpen() {
  configWindow.hidden = true;
  config.addEventListener("click", () => {
    configWindow.hidden = false;
  });

  iconClose.addEventListener("click", () => {
    configWindow.hidden = true;
  });

  document.getElementById("saveButton").addEventListener("click", saveEvent);
  document.getElementById("cancelButton").addEventListener("click", closeModal);
}

function openWeather() {
  openWeatherPanel.addEventListener("click", () => {
    contWeatherApi.style.display = "flex";
    iconCloseWeather.style.display = "block";
  });

  iconCloseWeather.addEventListener("click", () => {
    contWeatherApi.style.display = "none";
    iconCloseWeather.style.display = "none";
  });
}

function chooseHoliday() {
  monHoliday.addEventListener("change", () => {
    renderCalendar();
  });

  tueHoliday.addEventListener("change", () => {
    renderCalendar();
  });

  wedHoliday.addEventListener("change", () => {
    renderCalendar();
  });

  thuHoliday.addEventListener("change", () => {
    renderCalendar();
  });

  friHoliday.addEventListener("change", () => {
    renderCalendar();
  });
}

chooseHoliday();
startMonday();
openWeather();
inactivePrevDays();
configOpen();
initButtons();
weatherFiveDay();
renderCalendar();

function weatherFiveDay() {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?id=625073&appid=9ad87bd97cf062943c727a11f4096436"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("dayWeatherCurrentDay").innerHTML =
        data.list[0].dt_txt;
      document.querySelector(".city").innerHTML = data.city.name;
      document.querySelector(".current-weather").innerHTML = `${Math.round(
        data.list[0].main.temp - 273
      )} &deg`;
      document.querySelector(".desc-weather").innerHTML =
        data.list[0].weather[0]["description"];

      document.getElementById("dayWeatherSecondDay").innerHTML =
        data.list[2].dt_txt;
      document.querySelector(".city-second").innerHTML = data.city.name;
      document.querySelector(
        ".current-weather-second-day"
      ).innerHTML = `${Math.round(data.list[2].main.temp - 273)} &deg`;
      document.querySelector(".desc-weather-second-day").innerHTML =
        data.list[2].weather[0]["description"];

      document.getElementById("dayWeatherThirdtDay").innerHTML =
        data.list[9].dt_txt;
      document.querySelector(".city-third").innerHTML = data.city.name;
      document.querySelector(
        ".current-weather-third-day"
      ).innerHTML = `${Math.round(data.list[9].main.temp - 273)} &deg`;
      document.querySelector(".desc-weather-third-day").innerHTML =
        data.list[9].weather[0]["description"];

      document.getElementById("dayWeatherFourthDay").innerHTML =
        data.list[17].dt_txt;
      document.querySelector(".city-fourth").innerHTML = data.city.name;
      document.querySelector(
        ".current-weather-fourth-day"
      ).innerHTML = `${Math.round(data.list[17].main.temp - 273)} &deg`;
      document.querySelector(".desc-weather-fourth-day").innerHTML =
        data.list[17].weather[0]["description"];

      document.getElementById("dayWeatherFifthDay").innerHTML =
        data.list[25].dt_txt;
      document.querySelector(".city-fifth").innerHTML = data.city.name;
      document.querySelector(
        ".current-weather-fifth-day"
      ).innerHTML = `${Math.round(data.list[25].main.temp - 273)} &deg`;
      document.querySelector(".desc-weather-fifth-day").innerHTML =
        data.list[25].weather[0]["description"];
    })
    .catch(function () {
      //error
    });
}

weatherFiveDay();
