import { Circle } from './Circle'
import { Ellipse } from './Ellipse'
import { Polygon } from './Polygon'
import { Bezier } from './Bezier'

export type FigureType = (typeof Circle | typeof Ellipse | typeof Polygon | typeof Bezier)

export * from './Figure'
export * from './Bezier'
export * from './Polygon'
export * from './Ellipse'
export * from './Circle'
