import { drawAxes } from "./axes.js";
export function drawTruss(stage, layer, data) {
  drawAxes(stage, layer);
  const joints = data.joints || [];
  const members = data.members || [];

  members.forEach(m => {
    const j1 = joints[m[0]];
    const j2 = joints[m[1]];
    layer.add(new Konva.Line({
      points: [j1.x, j1.y, j2.x, j2.y],
      stroke: "#e5e7eb",
      strokeWidth: 3
    }));
  });

  joints.forEach(j => {
    layer.add(new Konva.Circle({ x: j.x, y: j.y, radius: 5, fill: "#38bdf8" }));
  });
}
