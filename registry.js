import { drawFBD } from "./renderers/fbd.js";
import { drawBeam } from "./renderers/beam.js";
import { drawTruss } from "./renderers/truss.js";
import { drawProjectile } from "./renderers/projectile.js";
import { drawVectors } from "./renderers/vectors.js";
import { drawPulley } from "./renderers/pulley.js";
import { drawMoment } from "./renderers/moment.js";

export const REGISTRY = {
  "statics:resultant-concurrent": drawFBD,
  "statics:lami": drawFBD,
  "friction:block-inclined": drawFBD,
  "statics:equilibrant": drawVectors,

  "structures:beam": drawBeam,
  "structures:truss": drawTruss,

  "kinematics:projectile": drawProjectile,

  "vectors:add-2d": drawVectors,
  "vectors:resolve": drawVectors,
  "vectors:direction": drawVectors,

  "kinematics:pulley-system": drawPulley,

  "statics:moment-about-point": drawMoment,
  "statics:couple": drawMoment
};
