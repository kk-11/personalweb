const canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);
mouse = { x: 0, y: 0 };
function mousemove(event) {
  mouse = { x: event.clientX, y: event.clientY };
}
window.addEventListener('mousemove', mousemove);
context.lineWidth = 0.1;
this.mouse = { x: 0, y: 0 };

const a = Math.random() * 10 - 2;
const b = Math.random() * 4 - 2;
const c = Math.random() * 4 - 2;
const d = Math.random() * 4 - 2;

const points = [];
for (let y = 0; y < height; y += 20) {
  points.push({
    x: 0,
    y: y,
    vx: 0,
    vy: 0,
  });
}

render();

function render() {
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const value = getValue(2 * p.x - mouse.x, 2 * p.y - mouse.y);
    p.vx += Math.cos(value) * 0.1;
    p.vy += Math.sin(value) * 0.1;
    context.beginPath();
    context.moveTo(p.x, p.y);
    p.x += p.vx;
    p.y += p.vy;
    context.lineTo(p.x, p.y);

    context.stroke();
    p.vx *= 0.99;
    p.vy *= 0.99;
    context.closePath();
  }

  requestAnimationFrame(render);
}

function getValue(x, y) {
  // http://paulbourke.net/fractals/clifford/
  const scale = 0.005;
  x = (x - width / 2) * scale;
  y = (y - height / 2) * scale;

  const x1 = Math.sin(a) - Math.cos(b * x);
  const y1 = Math.sin(c * x) - Math.cos(d * y);

  return Math.atan2(y1 - y, x1 - x);
}

const showmore = () => {
  document.getElementById('showmore').classList.toggle('active');
  document.getElementById('moreinfo').classList.toggle('active');
};
