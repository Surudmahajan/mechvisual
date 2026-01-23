import { drawVectors } from "../renderers/vectors.js";
import { drawStatics } from "../renderers/statics.js";
import { drawKinematics } from "../renderers/kinematics.js";
import { drawStructures } from "../renderers/structures.js";

/*
  DOMAIN NORMALIZATION:
  OmniEngine sends simplified domains.
  Visuals adapts them here.
*/

export const REGISTRY = {
  /* ===== VECTORS ===== */
  "vectors:add-2d": drawVectors,
  "vectors:magnitude": drawVectors,
  "vectors:direction": drawVectors,
  "vectors:resolve": drawVectors,

  /* ===== STATICS ===== */
  "statics:resultant-concurrent": drawStatics,
  "statics:lami": drawStatics,
  "friction:block-inclined": drawStatics,

  /* ===== KINEMATICS ===== */
  "kinematics:projectile": drawKinematics,
  "kinematics:rectilinear": drawKinematics,

  /* ===== STRUCTURES ===== */
  "structures:beam": drawStructures
};
