window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var partNum = 10;

var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');

var w = window.innerWidth; var h = window.innerHeight;
var x = 100; var y = 100;

var particles = [];
for (i = 0; i < partNum; i++) {
  setTimeout(function () {
    particles.push(new newParticle);
  }, i * 20);
}

function newParticle() {
  this.x = w / 2;
  this.y = h / 2;

  this.vx = Math.random() * 10 - 5;
  this.vy = Math.random() * 10 - 5;

  this.radius = Math.random() * 15;

  this.mass = 1;

  var r = '#9A0680';
  var o = '#E04DB0';
  var y = '#5800FF';
  var array = [r, o, y];
  this.color = array[Math.floor(Math.random() * 3)];

  this.g = 0.15;
}

var draw = function () {
  requestAnimFrame(draw);

  c.width = w;
  c.height = h;

  for (t = 0; t < particles.length; t++) {
    var p = particles[t];

    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy += p.g;

    if (p.y <= p.radius)
      p.vy *= -1;
    if (p.y >= h - p.radius)
      p.vy *= -1;
    if (p.y > h - p.radius && p.vy > 0)
      p.vy *= -1;
    if (p.x <= p.radius)
      p.vx *= -1;
    if (p.x >= w - p.radius)
      p.vx *= -1;
    if (p.radius < 3) {
      p.color = 'blue';
    };
  }
};

draw();