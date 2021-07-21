import './style/style.scss';


let clicked : null = null;

const prevDay = document.getElementsByClassName("prev-date") as HTMLCollectionOf<HTMLElement>;
const nextDay = document.getElementsByClassName("next-date") as HTMLCollectionOf<HTMLElement>;

const newEventModal = document.getElementById("newEventModal") as HTMLElement;
const backDrop = document.getElementById("modalBackDrop") as HTMLElement;
const monthDays = document.querySelector(".days") as HTMLElement;
const weakDays = document.querySelector(".weakDays") as HTMLElement;
const deleteModal = document.getElementById("deleteEventModal") as HTMLElement;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events") as string)
  : [] ;

const dayOfWeak : string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayOfWeakStartWithMon : string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const date : Date = new Date();
const day: number = date.getDate();
const month : number = date.getMonth();
const year: number = date.getFullYear();


function openModalWindow(dt: any) : void {
  clicked = dt;

  const eventForDay = events.find((e: any) => e.dt === clicked);
const textEvent = document.getElementById("eventText") as HTMLElement;
  if (eventForDay) {
    textEvent.innerText = eventForDay.title;
    deleteModal.style.display = "block";
  } else {
    newEventModal.style.display = "block";
  }
  backDrop.style.display = "block";
}
const hiddenInactiveDays = document.getElementById("hideInactiveDays") as HTMLInputElement;
const startWithMonday = document.getElementById("startWithMon") as HTMLInputElement;
const mondayHoliday = document.getElementById("monHoliday") as HTMLInputElement;
const tuesdayHoliday = document.getElementById("tueHoliday") as HTMLInputElement;
const wednesdayHoliday = document.getElementById("wedHoliday") as HTMLInputElement;
const thursdayHoliday = document.getElementById("thuHoliday") as HTMLInputElement;
const fridayHoliday = document.getElementById("friHoliday") as HTMLInputElement;
function renderCalendar() : void{
  date.setDate(1);

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); 

  const prevLastDay: number = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  let firstDayIndex: number = date.getDay();
  let firstDayIndexNew: number = date.getDay() - 1;
  /* firstDayIndex; */

  const lastDayIndex: number = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays : number = 7 - lastDayIndex - 1;

  const months : string[] = [
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
  for (let x: number = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  //end prev days

  // new prev days
  for (let t: number = firstDayIndexNew; t > 0; t--) {
    newDays += `<div class="prev-date">${prevLastDay - t + 1}</div>`;
  }
  // end new prev days

  // new prev days
  for (let h: number = firstDayIndex; h > 0; h--) {
    daysMonHol += `<div class="prev-date">${prevLastDay - h + 1}</div>`;
  }
  // end new prev days
  for (let q: number = firstDayIndex; q > 0; q--) {
    daysTueHol += `<div class="prev-date">${prevLastDay - q + 1}</div>`;
  }

  for (let w: number = firstDayIndex; w > 0; w--) {
    daysWedHol += `<div class="prev-date">${prevLastDay - w + 1}</div>`;
  }

  for (let e: number = firstDayIndex; e > 0; e--) {
    daysThuHol += `<div class="prev-date">${prevLastDay - e + 1}</div>`;
  }

  for (let r: number = firstDayIndex; r > 0; r--) {
    daysFriHol += `<div class="prev-date">${prevLastDay - r + 1}</div>`;
  }
  // weak
  for (let k: number = 0; k < dayOfWeak.length; k++) {
    weak += `<div>${dayOfWeak[k]}</div>`;
  }
  for (let a : number= 0; a < dayOfWeakStartWithMon.length; a++) {
    newWeak += `<div>${dayOfWeakStartWithMon[a]}</div>`;
  }
  // end weak

  // current day
  for (let i: number = 1; i <= lastDay; i++) {
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
  for (let p: number = 1; p <= lastDay; p++) {
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
  for (let z: number = 1; z <= lastDay; z++) {
    if (
      z === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysMonHol += `<div class = "today">${z}</div>`;
    } else {
      daysMonHol += `<div class ="holiday-mon">${z}</div>`;
    }
  }
  for (let y: number = 1; y <= lastDay; y++) {
    if (
      y === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysTueHol += `<div class = "today">${y}</div>`;
    } else {
      daysTueHol += `<div class ="holiday-tue">${y}</div>`;
    }
  }
  for (let u: number = 1; u <= lastDay; u++) {
    if (
      u === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysWedHol += `<div class = "today">${u}</div>`;
    } else {
      daysWedHol += `<div class ="holiday-wed">${u}</div>`;
    }
  }
  for (let o: number = 1; o <= lastDay; o++) {
    if (
      o === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      daysThuHol += `<div class = "today">${o}</div>`;
    } else {
      daysThuHol += `<div class ="holiday-thu">${o}</div>`;
    }
  }
  for (let f: number = 1; f <= lastDay; f++) {
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
  for (let j: number = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  //end next days

  // new next days
  for (let s : number = 1; s <= nextDays; s++) {
    newDays += `<div class="next-date">${s}</div>`;
  }
  //end new next days

  // new next days
  for (let l : number= 1; l <= nextDays; l++) {
    daysMonHol += `<div class="next-date">${l}</div>`;
  }
  //end new next days
  for (let g: number = 1; g <= nextDays; g++) {
    daysTueHol += `<div class="next-date">${g}</div>`;
  }
  for (let b: number = 1; b <= nextDays; b++) {
    daysWedHol += `<div class="next-date">${b}</div>`;
  }
  for (let n: number = 1; n <= nextDays; n++) {
    daysThuHol += `<div class="next-date">${n}</div>`;
  }
  for (let m: number = 1; m <= nextDays; m++) {
    daysFriHol += `<div class="next-date">${m}</div>`;
  }
  
  
  if (startWithMonday.checked) {
    weakDays.innerHTML = newWeak;
    monthDays.innerHTML = newDays;
  } else {
    weakDays.innerHTML = weak;
    monthDays.innerHTML = days;
  }


  if (hiddenInactiveDays.checked) {
    for (let i: number = 0; i < prevDay.length; i++) {
      prevDay[i].style.opacity = "0";
    }
    for (let j: number = 0; j < nextDay.length; j++) {
      nextDay[j].style.opacity = "0";
    }
  } else {
    for (let i: number = 0; i < prevDay.length; i++) {
      prevDay[i].style.opacity = "0.5";
    }
    for (let j: number = 0; j < nextDay.length; j++) {
      nextDay[j].style.opacity = "0.5";
    }
  }


  if (mondayHoliday.checked) {
    monthDays.innerHTML = daysMonHol;
  }
  if (tuesdayHoliday.checked) {
    monthDays.innerHTML = daysTueHol;
  }
  if (wednesdayHoliday.checked) {
    monthDays.innerHTML = daysWedHol;
  }
  if (thursdayHoliday.checked) {
    monthDays.innerHTML = daysThuHol;
  }
  if (fridayHoliday.checked) {
    monthDays.innerHTML = daysFriHol;
  }
}



function inactivePreviousDays() : void{
  hiddenInactiveDays.addEventListener("click", () => {
    renderCalendar();
  });
}

function startedMonday() : void{
  startWithMonday.addEventListener("change", () => {
    renderCalendar();
  });
}

monthDays.addEventListener("click", () =>
openModalWindow(`${month + 1}/ ${day}/ ${year}`)
);

function initializeButtons() : void{
  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
}
const titleInput = document.getElementById("eventTitleInput") as HTMLInputElement;
function closeModalWindow() : void{
  newEventModal.style.display = "none";
  backDrop.style.display = "none";
  titleInput.value = "";
  clicked = null;
  renderCalendar();
}

function saveEventClicked() : void{
  if (titleInput.value) {
    titleInput.classList.remove("error");

    events.push({
      date: clicked,
      title: titleInput.value,
    });

    localStorage.setItem("events", JSON.stringify(events));
    closeModalWindow();
  } else {
    titleInput.classList.add("error");
  }
}

const configurationWindow = document.getElementById("configWindow") as HTMLInputElement;
const options = document.getElementById("config") as HTMLInputElement;
const closeButton = document.getElementById("iconClose") as HTMLInputElement;
function configurationOpen() {
  configurationWindow.hidden = true;
  options.addEventListener("click", () => {
    configurationWindow.hidden = false;
  });

  closeButton.addEventListener("click", () => {
    configurationWindow.hidden = true;
  });

  document.getElementById("saveButton").addEventListener("click", saveEventClicked);
  document.getElementById("cancelButton").addEventListener("click", closeModalWindow);
}

const weatherPanel = document.getElementById("openWeatherPanel") as HTMLInputElement;
const weatherApi = document.getElementById("contWeatherApi") as HTMLInputElement;
const closeWeatherButton = document.getElementById("iconCloseWeather") as HTMLInputElement;
function openWeatherWindow() {
  weatherPanel.addEventListener("click", () => {
    weatherApi.style.display = "flex";
    closeWeatherButton.style.display = "block";
  });

  closeWeatherButton.addEventListener("click", () => {
    weatherApi.style.display = "none";
    closeWeatherButton.style.display = "none";
  });
}

function chooseHolidayDay() : void{
  mondayHoliday.addEventListener("change", () => {
    renderCalendar();
  });

  tuesdayHoliday.addEventListener("change", () => {
    renderCalendar();
  });

  wednesdayHoliday.addEventListener("change", () => {
    renderCalendar();
  });

  thursdayHoliday.addEventListener("change", () => {
    renderCalendar();
  });

  fridayHoliday.addEventListener("change", () => {
    renderCalendar();
  });
}

chooseHolidayDay();
startedMonday()
openWeatherWindow();
inactivePreviousDays();
configurationOpen()
initializeButtons()

renderCalendar();
closeModalWindow()


function weatherFiveDayApi() {
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

weatherFiveDayApi();