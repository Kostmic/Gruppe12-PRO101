

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid", "timeGrid", "list"],
    defaultView: 'timeGridWeek',
    customButtons: {
    reload: {
        text: '+',
        click: function() {
        var userInput = prompt("how are you?");   //this is just a test
        return userInput;
        }
    }
},
header: {
    left: 'prev,next today',
    center: 'title',
    right: 'reload'
}
//     customButtons: {
//       myCustomButton: {
//         text: 'custom!',
//         click: function() {
//           alert("you clicked me")
//         }
//       }
//     events: [{
//     title: 'simple event',
//     start: '2019-05-02',
//   },
//   {
//     title: 'event with URL',
//     url: 'https://www.google.com/',
//     start: '2019-05-03'
//   }
// ]
   });

  calendar.render();
 });
console.log(calendar.reload.click);
