import { drawAxes } from "./axes.js";
export function drawVectors(stage, layer, data) {
  drawAxes(stage, layer);
  const cx = stage.width() / 2;
  const cy = stage.height() / 2;

  if (!Array.isArray(data.vectors)) return;

  data.vectors.forEach(v => {
    const scale = 3;

    const arrow = new Konva.Arrow({
      points: [cx, cy, cx + v.x * scale, cy - v.y * scale],
      pointerLength: 10,
      pointerWidth: 10,
      fill: "#38bdf8",
      stroke: "#38bdf8",
      strokeWidth: 2
    });

    const label = new Konva.Text({
      text: v.label || "",
      x: cx + v.x * scale + 5,
      y: cy - v.y * scale + 5,
      fill: "white",
      fontSize: 14
    });

    layer.add(arrow);
    layer.add(label);
  });
}
