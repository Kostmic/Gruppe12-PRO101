document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid', 'interaction'],
    editable: true,
    defaultView: 'dayGridMonth',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'addEvent'
    },
    customButtons: {
      addEvent: {
        text: '+',

        click: function() {
          document.getElementById("myForm").style.display = "block";
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

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function getTitle() {
  return document.getElementById("userTitle").value;
}

function getDate() {
  return document.getElementById("userStart").value;
}

function getRoom() {
  return document.getElementById("userRoom").value;
}

function assignEvent() {
  calendar.addEvent({
    title: getTitle() + "\n"+ "Room: " + getRoom(),
    start: getDate(),
  });
};