import { Figure } from "./Figure"
import { randomNumber } from '../helpers'

export class Polygon extends Figure {

	constructor(x: number, y: number, color: number) {
		super()

		const vertices = []
		const center = [0,0]
		const radius = 10
		const numPoints = randomNumber(3, 6)
		const theta = randomNumber(0, 350) / numPoints

		for (let i = 1; i <= numPoints; i++) {
			const x = Math.floor(radius * Math.cos(2*Math.PI*i/numPoints + theta) + center[0])
			const y = Math.floor(radius * Math.sin(2*Math.PI*i/numPoints + theta) + center[1])
			vertices.push([x, y])
		}
		const path = vertices.reduce((acc, val) => acc.concat(val), [])

		this.beginFill(color)
		this.drawPolygon(path)
		this.endFill()
		
		this.area = this.calculateArea(vertices)
		this.x = x
		this.y = y    
	}

	public calculateArea(vertices: number[][]): number {
		let area = 0
		for (let i = 0; i < vertices.length; i++) {
			let addX = vertices[i][0]
			let addY = vertices[i == vertices.length - 1 ? 0 : i + 1][1]
			let subX = vertices[i == vertices.length - 1 ? 0 : i + 1][0]
			let subY = vertices[i][1]
	
			area += (addX * addY * 0.5)
			area -= (subX * subY * 0.5)
		}
		return Math.round(Math.abs(area))
	}
}