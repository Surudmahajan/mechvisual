import { arrow } from "../engine/utils.js";
import { scaleVectors } from "../engine/scale.js";

/*
  This renderer is ADAPTER-AWARE.
  It accepts multiple backend output shapes and normalizes them
  into forces_x / forces_y + resultant (x,y) for drawing.
*/

export function drawVectors(ctx, canvas, data) {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  let forcesX = null;
  let forcesY = null;
  let resultant = null;

  /* ============================
     NORMALIZATION LAYER
     ============================ */

  // Case 1: Direct forces (ideal case)
  if (Array.isArray(data.forces_x) && Array.isArray(data.forces_y)) {
    forcesX = data.forces_x;
    forcesY = data.forces_y;
  }

  // Case 2: Solution object with Rx, Ry
  else if (data.solution && typeof data.solution === "object") {
    if (
      typeof data.solution.Rx === "number" &&
      typeof data.solution.Ry === "number"
    ) {
      forcesX = [data.solution.Rx];
      forcesY = [data.solution.Ry];
      resultant = {
        x: data.solution.Rx,
        y: data.solution.Ry
      };
    }
  }

  // Case 3: Resultant magnitude + angle
  else if (
    typeof data.resultant_magnitude === "number" &&
    typeof data.resultant_angle === "number"
  ) {
    const rad = (data.resultant_angle * Math.PI) / 180;
    const rx = data.resultant_magnitude * Math.cos(rad);
    const ry = data.resultant_magnitude * Math.sin(rad);

    forcesX = [rx];
    forcesY = [ry];
    resultant = { x: rx, y: ry };
  }

  // If nothing usable, exit quietly
  if (!forcesX || !forcesY) return;

  /* ============================
     DRAWING
     ============================ */

  const sx = scaleVectors(forcesX);
  const sy = scaleVectors(forcesY);

  // Draw individual vectors
  sx.forEach((x, i) => {
    arrow(
      ctx,
      cx,
      cy,
      cx + x,
      cy - sy[i],
      `F${i + 1}`
    );
  });

  // Draw resultant if available and not already implicit
  if (resultant) {
    const [rx] = scaleVectors([resultant.x]);
    const [ry] = scaleVectors([resultant.y]);

    arrow(
      ctx,
      cx,
      cy,
      cx + rx,
      cy - ry,
      "R"
    );
  }
}

