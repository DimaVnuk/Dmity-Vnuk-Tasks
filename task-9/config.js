const prevDay = document.getElementsByClassName("prev-date");
const nextDay = document.getElementsByClassName("next-date");
const wdScreen = document.querySelector('.container')

function inactivePrevDays() {
  hideInactiveDays.addEventListener("click", () => {
    renderCalendar()
  });
}

startWithMon.addEventListener("change", () => {
  renderCalendar();
});

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

function openWeather(){
  
  openWeatherPanel.addEventListener('click', () =>{
    contWeatherApi.style.display ='flex';
    iconCloseWeather.style.display = 'block'
    
  })



  iconCloseWeather.addEventListener('click', () => {
    contWeatherApi.style.display = 'none';
    iconCloseWeather.style.display = 'none'
  })
}




openWeather();
inactivePrevDays();
configOpen();
initButtons();
renderCalendar();