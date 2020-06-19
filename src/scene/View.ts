import { Application, Graphics, Container } from "pixi.js"
import { addEventListenerToElement, setHtmlElementValue } from '../helpers'
import { Figure } from '../figures'
import { randomColor, randomNumber } from '../helpers'

class View {
    private container: Container
    private numberOfFigures: HTMLElement | null
    private gravity: HTMLElement | null
    private itemsPerSec: HTMLElement | null
    private areaOccupied: HTMLElement | null
    public width: number
    public height: number

	constructor(app: Application) {
        this.width = app.screen.width
        this.height = app.screen.height
        
        // Create main container for all elements
        this.container = new Container()
        this.container.interactive = true
        app.stage.addChild(this.container)
        
        this.container.addChild(this.background())
    
        // Get references for ui elements
        this.numberOfFigures = document.getElementById('numberOfShapesText')
        this.gravity = document.getElementById('gravityText')
        this.itemsPerSec = document.getElementById('numberOfShapesPerSecText')
        this.areaOccupied = document.getElementById('areaOccupiedText')
	}

    private background(): Graphics {
        const graphics = new Graphics()
        graphics.beginFill(0x9b9b9b);
        graphics.drawRect(0, 0, this.width, this.height)
        graphics.endFill()
        return graphics
    }

    public isFigureOutsideTheScreen(figure: Figure): boolean {
        return figure.y > this.height + 50
    }

    public addFigure(figureModel: new(...args: any) => Figure, removeHandler: Function, x?:number, y?:number): Figure {
        if (!x) x = randomNumber(0, this.width)
        if (!y) y = randomNumber(-40, -200)
        
        const figure = new figureModel(x, y, randomColor())
        figure.bindClick(() => removeHandler(figure))
        
        this.container.addChild(figure)
        return figure
    }

    public removeFigure(figure: Figure): void {
        this.container.removeChild(figure)
    }
        
    public bindSceneClick(handler: Function): void {
        this.container.on('pointerdown', (e: any) => handler(e))
    }

    public bindIncreaseGravity(handler: Function): void {
        addEventListenerToElement('increaseGravityBtn', 'click', handler)
    }
     
    public bindDecreaseGravity(handler: Function): void {
        addEventListenerToElement('decreaseGravityBtn', 'click', handler)
    }

    public bindIncreaseItemsPerSec(handler: Function): void {
        addEventListenerToElement('increaseNumberOfShapesBtn', 'click', handler)
    }
     
    public bindDecreaseItemsPerSec(handler: Function): void {
        addEventListenerToElement('decreaseNumberOfShapesBtn', 'click', handler)
    }

    public setNumberOfFigures(count: number): void {
        setHtmlElementValue(this.numberOfFigures, count.toString())
    }

    public setGravity(value: number): void  {
        setHtmlElementValue(this.gravity, value.toString())
    }

    public setItemsPerSec(value: number): void  {
        setHtmlElementValue(this.itemsPerSec, value.toString())
    }

    public setFiguresOccupiedArea(value: number): void  {
        setHtmlElementValue(this.areaOccupied, value.toString())
    }
}

export default View