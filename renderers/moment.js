export function drawMoment(stage, layer) {
  const cx=stage.width()/2, cy=stage.height()/2;
  layer.add(new Konva.Arc({
    x:cx,y:cy,innerRadius:40,outerRadius:42,angle:300,
    rotation:30,stroke:"#fbbf24",strokeWidth:3
  }));
}
