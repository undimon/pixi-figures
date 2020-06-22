import { Graphics } from "pixi.js"
import { randomNumber } from '../helpers'

export abstract class Figure extends Graphics {

	public area: number = 0
	public name: string

	constructor(x: number, y: number, color: number) {
		super()
		this.name = this.constructor.name
		this.interactive = true
		this.buttonMode = true
		
		this.beginFill(0xffffff)
		this.draw()
		this.endFill()
		this.update(null, color)

		this.x = x
		this.y = y
	}

	public getType(): string {
		return this.name
	}

	public draw():void {}

	public bindClick(handler: Function): void {
		this.on('pointerdown', handler)
    }

	public update(gravity: number | null, color?: number): void {	
		if (gravity) this.y += gravity * 0.5
		if (color) this.tint = color
		this.angle += randomNumber(1, 4)
	}
}