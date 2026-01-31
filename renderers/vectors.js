export function drawVectors(stage, layer, data) {
  const cx = stage.width()/2;
  const cy = stage.height()/2;

  if (!Array.isArray(data.vectors)) return;

  data.vectors.forEach(v => {
    layer.add(new Konva.Arrow({
      points: [cx, cy, cx + v.x*3, cy - v.y*3],
      pointerLength: 10,
      pointerWidth: 10,
      fill: "#38bdf8",
      stroke: "#38bdf8",
      strokeWidth: 2
    }));

    layer.add(new Konva.Text({
      text: v.label || "",
      x: cx + v.x*3 + 5,
      y: cy - v.y*3 + 5,
      fill: "white",
      fontSize: 14
    }));
  });
}
