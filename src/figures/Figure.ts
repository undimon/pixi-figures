import { Graphics } from "pixi.js"
import { randomNumber } from '../helpers'

export abstract class Figure extends Graphics {

	public area: number = 0

	constructor() {
		super()
		this.interactive = true
        this.buttonMode = true
	}

	public bindClick(handler: Function): void {
		this.on('pointerdown', handler)
    }

	public update(gravity: number): void {
		this.y += gravity * 0.5;
		this.angle += randomNumber(1, 4)
	}
}