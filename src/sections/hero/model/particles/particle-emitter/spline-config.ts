import { getLinearSpline } from './spline-utils'
import type { SplineFunction } from './types'

/**
 * Creates the alpha (opacity) spline for particle lifecycle
 * Controls how particles fade in and out over their lifetime
 */
export function createAlphaSpline(): SplineFunction {
  const spline = getLinearSpline((t, a, b) => a + t * (b - a))
  spline.addPoint(0.0, 0.0)   // Start invisible
  spline.addPoint(0.2, 0.8)   // Quick fade in
  spline.addPoint(0.5, 1.0)   // Peak visibility 
  spline.addPoint(0.8, 0.6)   // Gradual fade
  spline.addPoint(1.0, 0.0)   // Fade to invisible
  return spline
}

/**
 * Creates the size spline for particle lifecycle
 * Controls how particles grow over their lifetime
 */
export function createSizeSpline(): SplineFunction {
  const spline = getLinearSpline((t, a, b) => a + t * (b - a))
  spline.addPoint(0.0, 0.0)   // Start small
  spline.addPoint(0.3, 0.6)   // Quick initial growth
  spline.addPoint(0.7, 0.9)   // Slow to full size
  spline.addPoint(1.0, 1.0)   // Full size
  return spline
}