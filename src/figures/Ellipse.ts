import { Figure } from "./Figure"
import { randomNumber } from '../helpers'

export class Ellipse extends Figure {
	constructor(x: number, y: number, color: number) {
		super()

		const width =  15
		const height = 10

		this.beginFill(color)
		this.drawEllipse(0, 0, width, height)
		this.angle = randomNumber(0, 360)
		this.endFill()

		this.area = this.calculateArea(width, height)
		this.x = x
		this.y = y
	}

	public calculateArea(width: number, height: number) {
		return Math.round(Math.PI  * width * height)
	}
}