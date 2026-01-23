import { arrow } from "../engine/utils.js";
import { scaleVectors } from "../engine/scale.js";

export function drawVectors(ctx, canvas, data) {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  if (!data.forces_x || !data.forces_y) return;

  const sx = scaleVectors(data.forces_x);
  const sy = scaleVectors(data.forces_y);

  sx.forEach((x, i) => {
    arrow(ctx, cx, cy, cx + x, cy - sy[i], `F${i + 1}`);
  });

  if (data.resultant) {
    arrow(ctx, cx, cy, cx + data.resultant.x, cy - data.resultant.y, "R");
  }
}
