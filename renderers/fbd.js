export function drawFBD(stage, layer, data) {
  const cx = stage.width()/2;
  const cy = stage.height()/2;

  const block = new Konva.Rect({
    x: cx-40, y: cy-40, width: 80, height: 80,
    fill: "#1e293b", stroke: "#e5e7eb", strokeWidth: 2
  });
  layer.add(block);

  let forces = data.forces || [];
  if (data.solution?.Rx) {
    forces.push({label:"R", fx:data.solution.Rx, fy:data.solution.Ry});
  }

  forces.forEach(f=>{
    const scale=3;
    layer.add(new Konva.Arrow({
      points:[cx,cy,cx+f.fx*scale,cy-f.fy*scale],
      pointerLength:10,pointerWidth:10,
      fill:"#38bdf8",stroke:"#38bdf8",strokeWidth:2
    }));
  });
}
