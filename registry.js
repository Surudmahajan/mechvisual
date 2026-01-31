import { drawFBD } from "./renderers/fbd.js";
import { drawBeam } from "./renderers/beam.js";
import { drawTruss } from "./renderers/truss.js";
import { drawProjectile } from "./renderers/projectile.js";
import { drawVectors } from "./renderers/vectors.js";
import { drawPulley } from "./renderers/pulley.js";
import { drawMoment } from "./renderers/moment.js";

/*
  This registry mirrors AI proxy REGISTRY exactly.
  Keys = `${domain}:${operation}`
*/

export const REGISTRY = {

  /* ================= VECTORS ================= */
  "vectors:magnitude": drawVectors,
  "vectors:direction": drawVectors,
  "vectors:add-2d": drawVectors,
  "vectors:resolve": drawVectors,
  "vectors:dot": drawVectors,
  "vectors:cross": drawVectors,
  "vectors:angle-between": drawVectors,

  /* ============= STATICS (PARTICLES) ============= */
  "statics_particles:resultant-concurrent": drawFBD,
  "statics_particles:equilibrant": drawVectors,
  "statics_particles:equilibrium-check": drawVectors,
  "statics_particles:lami": drawFBD,

  /* ================= FRICTION ================= */
  "friction:limiting-friction": drawFBD,
  "friction:angle-of-friction": drawFBD,
  "friction:block-inclined": drawFBD,

  /* ============= STATICS (RIGID) ============= */
  "statics_rigid:moment-about-point": drawMoment,
  "statics_rigid:varignon": drawMoment,
  "statics_rigid:couple": drawMoment,
  "statics_rigid:reaction-2d": drawFBD,

  /* ================= TRUSSES ================= */
  "truss:determinacy": drawTruss,
  "truss:method-of-joints-single": drawTruss,
  "truss:zero-force-members": drawTruss,

  /* ================= BEAMS ================= */
  "beam:reactions": drawBeam,
  "beam:moment-at-section": drawBeam,
  "beam:sfd-point-load": drawBeam,
  "beam:bmd-point-load": drawBeam,
  "beam:sfd-udl": drawBeam,
  "beam:bmd-udl": drawBeam,

  /* =========== KINEMATICS (PARTICLES) =========== */
  "kinematics_particles:rectilinear": drawVectors,
  "kinematics_particles:motion-under-gravity": drawProjectile,
  "kinematics_particles:projectile": drawProjectile,
  "kinematics_particles:relative-velocity-1d": drawVectors,
  "kinematics_particles:relative-velocity-2d": drawVectors,
  "kinematics_particles:pulley-system": drawPulley,

  /* =========== KINEMATICS (RIGID) =========== */
  "kinematics_rigid:pure-translation": drawVectors,
  "kinematics_rigid:pure-rotation": drawMoment,
  "kinematics_rigid:general-plane-motion": drawVectors,
  "kinematics_rigid:relative-velocity": drawVectors,
  "kinematics_rigid:relative-acceleration": drawVectors,
  "kinematics_rigid:instantaneous-center": drawMoment,

  /* =========== KINETICS (PARTICLES) =========== */
  "kinetics_particles:newton-second-law": drawFBD,
  "kinetics_particles:work": drawVectors,
  "kinetics_particles:work-energy": drawVectors,
  "kinetics_particles:power": drawVectors,
  "kinetics_particles:impulse": drawVectors,
  "kinetics_particles:momentum": drawVectors,
  "kinetics_particles:impact": drawVectors,

  /* =========== KINETICS (RIGID) =========== */
  "kinetics_rigid:force-acceleration": drawFBD,
  "kinetics_rigid:torque-angular-acceleration": drawMoment,
  "kinetics_rigid:work-energy": drawVectors,
  "kinetics_rigid:angular-momentum": drawMoment,
  "kinetics_rigid:pure-rolling": drawFBD,

  /* ================= VIBRATIONS ================= */
  "vibrations:natural-frequency": drawVectors,
  "vibrations:free-undamped": drawVectors,
  "vibrations:free-damped": drawVectors,
  "vibrations:logarithmic-decrement": drawVectors,
  "vibrations:forced-vibration": drawVectors,
  "vibrations:resonance": drawVectors,

  /* ================= PROPERTIES ================= */
  "properties:moment-of-inertia": drawMoment,
  "properties:parallel-axis": drawMoment,
  "properties:perpendicular-axis": drawMoment,
  "properties:radius-of-gyration": drawMoment,
  "properties:flywheel-energy": drawMoment,
  "properties:gyroscopic-couple": drawMoment,
  "properties:gyroscopic-stability": drawMoment
};
