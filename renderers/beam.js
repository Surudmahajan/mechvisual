import { drawAxes } from "./axes.js";

export function drawBeam(stage, layer, data) {
  drawAxes(stage, layer, { originX: 50, originY: stage.height() / 2 });
  if (!Array.isArray(data.x) || !Array.isArray(data.y)) return;

  const w = stage.width();
  const h = stage.height();

  const maxX = Math.max(...data.x);
  const maxY = Math.max(...data.y.map(Math.abs));

  const scaleX = (w - 100) / maxX;
  const scaleY = 100 / maxY;

  const points = [];
  data.x.forEach((xi, i) => {
    points.push(50 + xi * scaleX, h / 2 - data.y[i] * scaleY);
  });

  layer.add(new Konva.Line({
    points,
    stroke: data.type === "sfd" ? "#22d3ee" : "#f472b6",
    strokeWidth: 3,
    tension: 0.2
  }));
}
