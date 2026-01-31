export function drawFBD(stage, layer, data) {
  const cx = stage.width() / 2;
  const cy = stage.height() / 2;

  const block = new Konva.Rect({
    x: cx - 40,
    y: cy - 40,
    width: 80,
    height: 80,
    fill: "#1e293b",
    stroke: "#e5e7eb",
    strokeWidth: 2
  });
  layer.add(block);

  const sol = data.solution || {};

  if (sol.normal) {
    layer.add(new Konva.Arrow({
      points: [cx, cy, cx, cy - 100],
      fill: "#22d3ee",
      stroke: "#22d3ee"
    }));
  }

  if (sol.friction) {
    layer.add(new Konva.Arrow({
      points: [cx, cy, cx - 100, cy],
      fill: "#f59e0b",
      stroke: "#f59e0b"
    }));
  }

  if (sol.downslope_force) {
    layer.add(new Konva.Arrow({
      points: [cx, cy, cx + 80, cy + 80],
      fill: "#ef4444",
      stroke: "#ef4444"
    }));
  }
}
