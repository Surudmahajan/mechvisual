import { drawAxes } from "./axes.js";
export function drawPulley(stage, layer) {
  drawAxes(stage, layer);
  const cx = stage.width() / 2;
  const cy = 200;

  layer.add(new Konva.Circle({
    x: cx,
    y: cy,
    radius: 40,
    stroke: "#e5e7eb",
    strokeWidth: 3
  }));

  layer.add(new Konva.Line({
    points: [cx - 40, cy, cx - 40, cy + 150],
    stroke: "#38bdf8",
    strokeWidth: 2
  }));

  layer.add(new Konva.Rect({
    x: cx - 60,
    y: cy + 150,
    width: 40,
    height: 40,
    fill: "#1e293b",
    stroke: "#e5e7eb"
  }));
}
