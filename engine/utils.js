export function clearCanvas(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function arrow(ctx, x1, y1, x2, y2, label) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 2;
  ctx.stroke();

  const angle = Math.atan2(y2 - y1, x2 - x1);
  const head = 10;

  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - head * Math.cos(angle - Math.PI / 6),
             y2 - head * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - head * Math.cos(angle + Math.PI / 6),
             y2 - head * Math.sin(angle + Math.PI / 6));
  ctx.fillStyle = "#38bdf8";
  ctx.fill();

  if (label) {
    ctx.fillStyle = "#e5e7eb";
    ctx.font = "12px monospace";
    ctx.fillText(label, x2 + 5, y2 + 5);
  }
}
