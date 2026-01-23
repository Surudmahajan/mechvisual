import { arrow } from "../engine/utils.js";

export function drawStatics(ctx, canvas, data) {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.strokeStyle = "#e5e7eb";
  ctx.strokeRect(cx - 40, cy - 40, 80, 80);

  if (data.forces) {
    data.forces.forEach(f => {
      arrow(ctx, cx, cy, cx + f.fx, cy - f.fy, f.label);
    });
  }

  if (data.reaction) {
    arrow(ctx, cx, cy, cx + data.reaction.x, cy - data.reaction.y, "R");
  }
}
