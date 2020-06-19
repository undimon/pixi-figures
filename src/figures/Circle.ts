import { Figure } from "./Figure"

export class Circle extends Figure {
	constructor(x: number, y: number, color: number) {
		super()

		const radius = 10
		this.beginFill(color)
		this.drawCircle(0, 0, radius)
		this.endFill()

		this.area = this.calculateArea(radius)
		this.x = x
		this.y = y
	}

	public calculateArea(radius: number) {
		return Math.round(Math.PI  * Math.pow(radius, 2))
	}	
}