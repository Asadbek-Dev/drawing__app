var canvas = document.getElementById('myCanvas');
var cntx = canvas.getContext('2d');
var painting = document.getElementById('content');
var paintStyle = getComputedStyle(painting);
canvas.width = parseInt(paintStyle.getPropertyValue('width'));
canvas.height = parseInt(paintStyle.getPropertyValue('height'));

var mouse = { x: 0, y: 0 };

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
}, false);

cntx.lineWidth = 5;
cntx.lineJoin = 'round';
cntx.lineCap = 'round';

function changeThickness() {
    thickness = document.getElementById('thickness').value;
    cntx.lineWidth = thickness;
}
function changeColor() {
    color = document.getElementById('color').value;
    cntx.strokeStyle = color;
}

canvas.addEventListener('mousedown', function (e) {
    cntx.beginPath();
    cntx.moveTo(mouse.x, mouse.y);
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
canvas.addEventListener('mouseup', function () {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function () {
    cntx.lineTo(mouse.x, mouse.y);
    cntx.stroke();
};
