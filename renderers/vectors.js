export function drawVectors(stage, layer, data) {
  const cx = stage.width()/2;
  const cy = stage.height()/2;

  let fx=data.forces_x||[], fy=data.forces_y||[];
  if (data.solution?.Rx) {
    fx=[data.solution.Rx]; fy=[data.solution.Ry];
  }

  fx.forEach((x,i)=>{
    layer.add(new Konva.Arrow({
      points:[cx,cy,cx+x*3,cy-fy[i]*3],
      pointerLength:10,pointerWidth:10,
      fill:"#22d3ee",stroke:"#22d3ee",strokeWidth:2
    }));
  });
}
