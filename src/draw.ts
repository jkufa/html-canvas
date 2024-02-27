export function draw() {
  const canvas = document.getElementById('tutorial') as HTMLCanvasElement;
  const ctx = canvas?.getContext('2d');
  window.addEventListener('load', draw);

  if (!ctx) return;

  ctx.fillStyle = '#646cff';
  ctx.strokeStyle = '#646cff';
  // ctx.fillRect(10 ,10, 50  , 50);

  // ctx.fillStyle = '#ff9264';
  // ctx.fillRect(40 ,40, 50, 50);

  // drawTriangle(ctx);

  // drawSmiley(ctx);

  // Filled triangle
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(105, 25);
  ctx.lineTo(25, 105);
  ctx.closePath();
  ctx.fill();

  // Stroked triangle
  let offset = 0;
  march();

  // ctx.strokeRect(10, 10, 100, 100);
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(10, 10, 100, 100);
  }
  
  function march() {
    offset++;
    if (offset > 5) {
      offset = 0;
    }
    draw();
    setTimeout(march, 20);
  }
}

function drawTriangle(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(200, 50);
    context.lineTo(150, 100);
    context.fill();
}

function drawSmiley(context: CanvasRenderingContext2D) {
  context.beginPath();
  context.arc(75, 75, 50, 0, Math.PI * 2, true);
  context.moveTo(97, 105);
  context.arc(75, 105, 22, 0, Math.PI, true);
  context.moveTo(65, 65);
  context.arc(58, 65, 8, 0, Math.PI * 2, true);
  context.moveTo(95, 65);
  context.arc(88, 65, 8, 0, Math.PI * 2, true);
  context.stroke();
}
