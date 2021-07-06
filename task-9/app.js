let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const newEventModal = document.getElementById("newEventModal");
const backDrop = document.getElementById("modalBackDrop");
const monthDays = document.querySelector(".days");
const weekDays = document.querySelector(".weekdays");
const eventTitle = document.getElementById("eventTitleInput");
const startWeek = document.getElementById("startWithMon");
const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayOfWeekStartWithMon = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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

  const firstDayIndex = date.getDay();

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

  let week = "";
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    // prev days
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let k = 0; k < dayOfWeek.length; k++) {
    week += `<div>${dayOfWeek[k]}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    // current day
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class = "today">${i}</div>`;
    } else {
      days += `<div class = 'click-div'>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    // prev days
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;
  weekDays.innerHTML = week;
}

