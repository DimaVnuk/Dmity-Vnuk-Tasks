const prevDay = document.getElementsByClassName("prev-date");
const nextDay = document.getElementsByClassName("next-date");

function inactivePrevDays() {
  hideInactiveDays.addEventListener("click", () => {
    for (let i = 0; i < prevDay.length; i++) {
      prevDay[i].style.opacity = "0";
    }
    for (let j = 0; j < nextDay.length; j++) {
      nextDay[j].style.opacity = "0";
    }
  });
  showInactiveDays.addEventListener("click", () => {
    for (let i = 0; i < prevDay.length; i++) {
      prevDay[i].style.opacity = "0.5";
    }
    for (let j = 0; j < nextDay.length; j++) {
      nextDay[j].style.opacity = "0.5";
    }
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

inactivePrevDays();
configOpen();
initButtons();
renderCalendar();