import { Figure } from "./Figure"

export class Circle extends Figure {
	
	public draw(): void {
		const radius = 10
		this.drawCircle(0, 0, radius)
		this.area = this.calculateArea(radius)
	}

	public calculateArea(radius: number) {
		return Math.round(Math.PI  * Math.pow(radius, 2))
	}	
}