

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid"],
    customButtons: {
    reload: {
        text: '+',
        click: function() {
          document.getElementById("myForm").style.display = "block";
        }
    }
},
header: {
    left: 'prev,next today',
    center: 'title',
    right: 'reload'
},
     events: function(title, start, room){
       title = titleinput;
       start = startinput;
       room = roominput;
     }
   });

  calendar.render();
 });

 function openForm() {
   document.getElementById("myForm").style.display = "block";
 }

 function closeForm() {
   document.getElementById("myForm").style.display = "none";
 }
console.log(userTitle)

var titleinput = document.getElementById("userTitle");
var startinput = document.getElementById("userStart");
var roominput = document.getElementById("userRoom")
