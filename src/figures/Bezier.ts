import { Figure } from "./Figure";
import { randomNumber } from '../helpers'

export class Bezier extends Figure {

	public draw(): void {
		let vertices = []
		const center = [0,0];
		const baseRadius = 10;
		const numPoints = randomNumber(3, 30, true)
		const theta = 350 / numPoints

		for (let i = 1; i <= numPoints; i++) {
			const radius = i % 2 === 0 ? randomNumber(baseRadius, baseRadius + 15) : baseRadius
			const x = Math.floor(radius * Math.cos(2*Math.PI*i/numPoints + theta) + center[0])
			const y = Math.floor(radius * Math.sin(2*Math.PI*i/numPoints + theta) + center[1])
			vertices.push([x, y])
		}
	
		this.moveTo(vertices[0][0], vertices[0][1])
		
		for (let i = 0; i < vertices.length; i = i + 2) {
			const mid = i + 1 >= vertices.length ? ((i + 1) - vertices.length) : i + 1
			const end = i + 2 >= vertices.length ? ((i + 2) - vertices.length) : i + 2
			this.bezierCurveTo(
				vertices[i][0], vertices[i][1],
				vertices[mid][0], vertices[mid][1],
				vertices[end][0], vertices[end][1], 
			)
		}	
	
		this.area = this.calculateArea(vertices)
		this.name = this.name + numPoints.toString()
	}
	
	public calculateArea(vertices: number[][]) {
		let area = 0
		for (let i = 0; i < vertices.length; i++) {
			let addX = vertices[i][0];
			let addY = vertices[i == vertices.length - 1 ? 0 : i + 1][1];
			let subX = vertices[i == vertices.length - 1 ? 0 : i + 1][0];
			let subY = vertices[i][1];
	
			area += (addX * addY * 0.5);
			area -= (subX * subY * 0.5);
		}
		return Math.round(Math.abs(area));
	}
}
