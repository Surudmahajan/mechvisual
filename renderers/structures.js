export function drawStructures(ctx, canvas, data) {
  const y = canvas.height / 2;

  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(100, y);
  ctx.lineTo(canvas.width - 100, y);
  ctx.stroke();

  if (data.loads) {
    data.loads.forEach(l => {
      ctx.beginPath();
      ctx.moveTo(100 + l.x * 50, y - 40);
      ctx.lineTo(100 + l.x * 50, y);
      ctx.stroke();
    });
  }
}
