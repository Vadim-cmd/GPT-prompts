var i = 0;
var txt =
  "Saving time, Personalization, Improving user experience, Better outcomes.With well-designed prompts, customers can complete tasks or get the information they need more quickly and efficiently. This can be especially valuable in customer service scenarios, where customers may be looking for quick answers or resolutions to their problems";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// ========== chat =============================================

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

