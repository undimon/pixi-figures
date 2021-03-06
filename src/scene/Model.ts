import { FigureType, Figure, Polygon, Circle, Ellipse, Bezier } from '../figures'
import { randomNumber } from '../helpers'
import { Constructor } from '../interfaces'

class Model {
    public items: Figure[] = []
    public gravity: number = 2
    public step: number = 1
    public itemsPerSec: number = 5
    public figureTypes: Array<FigureType> = [Circle, Ellipse, Polygon, Bezier]
    public figuresOccupiedArea: number = 0
    
    public getRandomFigureType(): Constructor<Figure> {
        return this.figureTypes[randomNumber(0, this.figureTypes.length)]
    }

    public addFigure(item: Figure): void {
        this.items.push(item)
        this.figuresOccupiedArea = this.figuresOccupiedArea + item.area
    }
    
    public removeFigure(item: Figure): void {
        this.items = this.items.filter(i => i !== item)
        this.figuresOccupiedArea = this.figuresOccupiedArea - item.area
    }

    public increaseGravity(): void {
        this.gravity += this.step
    }

    public decreaseGravity(): void {
        this.gravity -= this.step
        if (this.gravity < 0) this.gravity = 0
    }

    public increaseItemsPerSec(): void {
        this.itemsPerSec += this.step
    }

    public decreaseItemsPerSec(): void {
        this.itemsPerSec -= this.step
        if (this.itemsPerSec < 0) this.itemsPerSec = 0
    }
}

export default Model