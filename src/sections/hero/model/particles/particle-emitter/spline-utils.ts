import type { SplineFunction } from './types'

/**
 * Creates a linear spline for smooth interpolation between points
 * @param lerp - Linear interpolation function
 * @returns Spline object with addPoint and getValueAt methods
 */
export function getLinearSpline(lerp: (t: number, a: number, b: number) => number): SplineFunction {
  const points: [number, number][] = []
  
  function addPoint(t: number, d: number) {
    points.push([t, d])
  }
  
  function getValueAt(t: number): number {
    let p1 = 0
    
    for (let i = 0; i < points.length; i++) {
      if (points[i][0] >= t) {
        break
      }
      p1 = i
    }
    
    const p2 = Math.min(points.length - 1, p1 + 1)
    
    if (p1 === p2) {
      return points[p1][1]
    }
    
    return lerp(
      (t - points[p1][0]) / (points[p2][0] - points[p1][0]),
      points[p1][1], 
      points[p2][1]
    )
  }
  
  return { addPoint, getValueAt }
}