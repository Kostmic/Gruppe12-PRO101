document.addEventListener('DOMContentLoaded', function() {
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
        click: function() {
          toggleForm("block");
        }
      }
    }
  });

  calendar.render();
});

window.onload = function() {
  var loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", assignEvent);
}

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
  } else {
    alert("Invalid date. Format is YYYY-MM-DD.");
  }
};