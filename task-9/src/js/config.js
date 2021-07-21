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

function chooseDay() {
  monthDays.addEventListener("click", () =>
    openModal(`${month + 1}/ ${day}/ ${year}`)
  );
}

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
chooseDay();
startMonday();
openWeather();
inactivePrevDays();
configOpen();
initButtons();
weatherFiveDay();
renderCalendar();
