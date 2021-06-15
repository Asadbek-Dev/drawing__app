var canvas = document.getElementById("myCanvas");
const uchBtn = document.querySelector("form button");
const tortBtn = document.querySelector("#tort");
const aylanaBtn = document.querySelector("#aylana");
var deBtn = document.querySelector("#delButton");
var cntx = canvas.getContext("2d");
var painting = document.getElementById("content");
var paintStyle = getComputedStyle(painting);
canvas.width = parseInt(paintStyle.getPropertyValue("width"));
canvas.height = parseInt(paintStyle.getPropertyValue("height"));
const triangle = document.querySelector("#triangle");
const rectangle = document.querySelector("#rectangle");
const circle = document.querySelector("#circle");

var mouse = { x: 0, y: 0 };
uchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (triangle.style.display == "none") {
    triangle.style.display = "block";
  } else {
    triangle.style.display = "none";
  }
});
tortBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (rectangle.style.display == "none") {
    rectangle.style.display = "block";
  } else {
    rectangle.style.display = "none";
  }
});
aylanaBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (circle.style.display == "none") {
    circle.style.display = "block";
  } else {
    circle.style.display = "none";
  }
});

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
});

cntx.lineWidth = 5;
cntx.lineJoin = "round";
cntx.lineCap = "round";

function changeThickness() {
  thickness = document.getElementById("thickness").value;
  cntx.lineWidth = thickness;
}
function changeColor() {
  color = document.getElementById("color").value;
  cntx.strokeStyle = color;
}

canvas.addEventListener("mousedown", function (e) {
  cntx.beginPath();
  cntx.moveTo(mouse.x, mouse.y);
  canvas.addEventListener("mousemove", onPaint);
});
canvas.addEventListener("mouseup", function () {
  canvas.removeEventListener("mousemove", onPaint);
});

var onPaint = function () {
  cntx.lineTo(mouse.x, mouse.y);
  cntx.stroke();
};
