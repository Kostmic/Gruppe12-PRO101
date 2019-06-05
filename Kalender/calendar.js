document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid', 'interaction'],
    editable: true,
    defaultView: 'dayGridMonth',
    displayEventTime: false,
    header: {
      left: 'prev, next today',
      center: 'title',
      right: 'addEvent'
    },
    customButtons: {
      addEvent: {
        text: '+',
        click: function () {
          toggleForm("block");
        }
      }
    }
  });

  calendar.render();
});

window.onload = function () {
  var loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", assignEvent);

  let data = localStorage.getItem("events");

  if (data) {
    LIST = JSON.parse(data);
    id = LIST.length; // Set the id to the last one in the list
    loadEvents(LIST);
  } else {
    // If data is empty
    LIST = [];
    id = 0;
  };
}

function loadEvents(array) {
  array.forEach(function (item) {
    calendar.addEvent({
      title: item.title + "\n" + "Room: " + item.room,
      start: item.date
    });
  });
};

function toggleForm(state) {
  document.getElementById("myForm").style.display = state;
}

function getInput(type) {
  return document.getElementById("user" + type).value;
}

function assignEvent() {
  inputTitle = getInput("Title");
  inputDate = new Date((getInput("Date")) + 'T00:00:00');
  inputRoom = getInput("Room");

  if (!isNaN(inputDate.valueOf())) {
    calendar.addEvent({
      title: inputTitle + "\n" + "Room: " + inputRoom,
      start: inputDate
    });

    LIST.push({
      title: inputTitle,
      date: inputDate,
      room: inputRoom,
      id: LIST.length
    });
    localStorage.setItem("events", JSON.stringify(LIST));

  } else {
    alert("Invalid date. Format is YYYY-MM-DD.");
  }
};

var select = document.getElementById('selectRoom');
/*
var rooms = [
  "U101","U102","U103","U104","U105","U106",
  "Forelesningssal","Bibliotek","Kantine",
  "201","202","203","204","205","206",
  "301","302","303","304","305","306",
  "401","402","403","404","405","406",
  "Lesesal"
];

for (var i = 0; i < rooms.length; i++) {
  var room = rooms[i];
  var el = document.createElement("option");
  el.textContent = room;
  el.value = room;
  rooms.appendChild(el);
}
*/
