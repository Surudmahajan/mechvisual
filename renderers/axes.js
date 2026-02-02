export function drawAxes(stage, layer, options = {}) {
  const padding = 50;
  const w = stage.width();
  const h = stage.height();

  const originX = options.originX ?? w / 2;
  const originY = options.originY ?? h / 2;

  const axisColor = "#64748b";

  // X Axis
  layer.add(new Konva.Arrow({
    points: [padding, originY, w - padding, originY],
    stroke: axisColor,
    fill: axisColor,
    strokeWidth: 1,
    pointerLength: 8,
    pointerWidth: 8
  }));

  // Y Axis
  layer.add(new Konva.Arrow({
    points: [originX, h - padding, originX, padding],
    stroke: axisColor,
    fill: axisColor,
    strokeWidth: 1,
    pointerLength: 8,
    pointerWidth: 8
  }));

  // Origin Dot
  layer.add(new Konva.Circle({
    x: originX,
    y: originY,
    radius: 4,
    fill: "#94a3b8"
  }));

  // Labels
  layer.add(new Konva.Text({
    text: "X",
    x: w - padding + 10,
    y: originY - 15,
    fill: axisColor,
    fontSize: 14
  }));

  layer.add(new Konva.Text({
    text: "Y",
    x: originX + 10,
    y: padding - 20,
    fill: axisColor,
    fontSize: 14
  }));

  // Tick Marks
  const tickSpacing = 40;

  for (let x = originX + tickSpacing; x < w - padding; x += tickSpacing) {
    layer.add(new Konva.Line({ points: [x, originY - 5, x, originY + 5], stroke: axisColor }));
  }

  for (let x = originX - tickSpacing; x > padding; x -= tickSpacing) {
    layer.add(new Konva.Line({ points: [x, originY - 5, x, originY + 5], stroke: axisColor }));
  }

  for (let y = originY - tickSpacing; y > padding; y -= tickSpacing) {
    layer.add(new Konva.Line({ points: [originX - 5, y, originX + 5, y], stroke: axisColor }));
  }

  for (let y = originY + tickSpacing; y < h - padding; y += tickSpacing) {
    layer.add(new Konva.Line({ points: [originX - 5, y, originX + 5, y], stroke: axisColor }));
  }
}
