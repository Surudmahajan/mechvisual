export function drawBeam(stage, layer, data) {
  const y = stage.height()/2;
  layer.add(new Konva.Line({
    points:[100,y,stage.width()-100,y],
    stroke:"#e5e7eb",strokeWidth:6
  }));

  (data.loads||[]).forEach(l=>{
    layer.add(new Konva.Arrow({
      points:[100+l.x*60,y-80,100+l.x*60,y],
      pointerLength:10,pointerWidth:10,
      fill:"#ef4444",stroke:"#ef4444",strokeWidth:2
    }));
  });
}
