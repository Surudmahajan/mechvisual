import { drawVectors } from "../renderers/vectors.js";
import { drawStatics } from "../renderers/statics.js";
import { drawKinematics } from "../renderers/kinematics.js";
import { drawStructures } from "../renderers/structures.js";

export const REGISTRY = {
  "vectors:magnitude": drawVectors,
  "vectors:add-2d": drawVectors,
  "vectors:direction": drawVectors,
  "vectors:resolve": drawVectors,

  "statics_particles:resultant-concurrent": drawStatics,
  "statics_particles:lami": drawStatics,
  "friction:block-inclined": drawStatics,

  "kinematics_particles:projectile": drawKinematics,
  "kinematics_particles:rectilinear": drawKinematics,

  "structures:beam": drawStructures
};
