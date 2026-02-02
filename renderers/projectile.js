import { drawAxes } from "./axes.js";
export function drawProjectile(stage, layer, data) {
  drawAxes(stage, layer, { originX: 50, originY: stage.height() - 50 });
  if (!Array.isArray(data.x) || !Array.isArray(data.y)) return;

  const pts = [];
  for (let i = 0; i < data.x.length; i++) {
    pts.push(50 + data.x[i] * 10, stage.height() - (50 + data.y[i] * 10));
  }

  layer.add(new Konva.Line({
    points: pts,
    stroke: "#22d3ee",
    strokeWidth: 3,
    tension: 0.3
  }));
}
