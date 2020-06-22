import View from './View'
import Model from './Model'
import { Application } from 'pixi.js'
import { Figure } from '../figures'
import { randomColor } from '../helpers'
 
class Scene {
    private model: Model
    private view: View

	constructor(app: Application) {  
        this.model = new Model()
        this.view = new View(app)

        // Bind buttons click with corresponding methods 
        this.view.bindIncreaseGravity(this.handleIncreaseGravity)
        this.view.bindDecreaseGravity(this.handleDecreaseGravity)
        this.view.bindDecreaseItemsPerSec(this.handleDecreaseItemsPerSec)
        this.view.bindIncreaseItemsPerSec(this.handleIncreaseItemsPerSec)
        this.view.bindSceneClick(this.handleSceneClick)

        // Start figures generation
        this.initFigureGenerationInterval()
    }
    
    private handleSceneClick = (e: PIXI.interaction.InteractionEvent): void => {
        //console.log(e.x);
        
        this.addRandomFigure(e.data.global.x, e.data.global.y)
    }

    public handleIncreaseGravity = (): void => {
        this.model.increaseGravity()
    }

    private handleDecreaseGravity = (): void => {
        this.model.decreaseGravity()
    }

    private handleIncreaseItemsPerSec = (): void => {
        this.model.increaseItemsPerSec()
    }

    private handleDecreaseItemsPerSec = (): void => {
        this.model.decreaseItemsPerSec()
    }
       
    private addRandomFigure(x?: number, y?: number): void {     
        const figureModel = this.model.getRandomFigureType()
        const figure = this.view.addFigure(figureModel, this.figureClickHandler, x, y)
        this.model.addFigure(figure)
    }

    private removeFigure = (figure: Figure): void => {
        this.model.removeFigure(figure)
        this.view.removeFigure(figure)
    }

    // Called from figure when it's clicked
    private figureClickHandler = (figure: Figure): void => {
        this.removeFigure(figure)
        
        // Find all figures with the same type and change their color
        this.model.items.forEach(item => {
            if (item.getType() === figure.getType()) item.update(null, randomColor())
        })  
    }

    // Generate new N figures each second
    private initFigureGenerationInterval(): void {
        setInterval(() => {
            for (let i = 0; i < this.model.itemsPerSec; i++) {
                this.addRandomFigure()
            }
        }, this.model.step * 1000);
    }   

    public update(): void {
        this.view.setGravity(this.model.gravity)
        this.view.setNumberOfFigures(this.model.items.length)
        this.view.setItemsPerSec(this.model.itemsPerSec)
        this.view.setFiguresOccupiedArea(this.model.figuresOccupiedArea)

        this.model.items.forEach(item => {
            item.update(this.model.gravity)
            if (this.view.isFigureOutsideTheScreen(item)) this.removeFigure(item)
        })         
    }    
}

export default Scene