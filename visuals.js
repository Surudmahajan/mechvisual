import { REGISTRY } from "./registry.js";

const stage = new Konva.Stage({
  container: "container",
  width: window.innerWidth,
  height: window.innerHeight
});
const layer = new Konva.Layer();
stage.add(layer);

window.addEventListener("resize", () => {
  stage.width(window.innerWidth);
  stage.height(window.innerHeight);
});

window.addEventListener("message", e => {
  if (!e.data || e.data.type !== "ENGINE_RESULT") return;

  const { domain, operation, data } = e.data.payload;
  const key = `${domain}:${operation}`;
  const renderer = REGISTRY[key];

  layer.destroyChildren();

  if (!renderer) {
    layer.add(new Konva.Text({
      text: `No renderer for ${key}`,
      x: 20,
      y: 20,
      fill: "red",
      fontSize: 18
    }));
    layer.draw();
    return;
  }

  renderer(stage, layer, data);
  layer.draw();
});
