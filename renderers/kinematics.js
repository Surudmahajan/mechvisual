export function drawKinematics(ctx, canvas, data) {
  if (!data.trajectory) return;

  ctx.strokeStyle = "#22d3ee";
  ctx.lineWidth = 2;
  ctx.beginPath();

  data.trajectory.forEach((p, i) => {
    const x = 50 + p.x * 20;
    const y = canvas.height - (50 + p.y * 20);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.stroke();
}
