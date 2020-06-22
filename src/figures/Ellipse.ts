import { Figure } from "./Figure"

export class Ellipse extends Figure {

	public draw(): void {
		const width =  15
		const height = 10		
		this.drawEllipse(0, 0, width, height)
		this.area = this.calculateArea(width, height)
	}	

	public calculateArea(width: number, height: number) {
		return Math.round(Math.PI  * width * height)
	}
}