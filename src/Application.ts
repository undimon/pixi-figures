import { Application } from "pixi.js"
import { Canvas } from './config'
import Scene from "./scene"

function init(): void {
	const app = new Application({
			antialias: true,
			resolution: window.devicePixelRatio || 1,
			width: Canvas.Width,
			height: Canvas.Height,			
			view: document.getElementById("renderer") as HTMLCanvasElement
		});

		const scene = new Scene(app);

		app.ticker.add(() => {
			scene.update()
		});	
}

if (window.addEventListener) {
	window.addEventListener("load", init, false);
} else {
	window.onload = init;
}