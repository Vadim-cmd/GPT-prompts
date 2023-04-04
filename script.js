//=========== typewriter ======================================

var i = 0;
var txt =
  "Saving time, Personalization, Better user experience, Excelent outcomes.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


