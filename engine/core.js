import { REGISTRY } from "./registry.js";
import { clearCanvas } from "./utils.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

export function render(domain, operation, data) {
  clearCanvas(ctx, canvas);

  const key = `${domain}:${operation}`;
  const renderer = REGISTRY[key];

  if (!renderer) {
    ctx.fillStyle = "#94a3b8";
    ctx.font = "16px monospace";
    ctx.fillText("No visuals available for this operation.", 40, 40);
    return;
  }

  renderer(ctx, canvas, data);
}
