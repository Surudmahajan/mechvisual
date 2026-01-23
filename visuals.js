import { render } from "./engine/core.js";

window.addEventListener("message", e => {
  if (!e.data || e.data.type !== "ENGINE_RESULT") return;

  const { domain, operation, data } = e.data.payload;
  render(domain, operation, data);
});
