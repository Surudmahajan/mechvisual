export function drawProjectile(stage, layer, data) {
  if (!data.trajectory) return;
  const pts=[];
  data.trajectory.forEach(p=>{
    pts.push(50+p.x*10, stage.height()-(50+p.y*10));
  });
  layer.add(new Konva.Line({
    points:pts, stroke:"#22d3ee", strokeWidth:3, tension:0.3
  }));
}
