import { Canvas } from "../core/canvas/Canvas";
import { CanvasElement } from "../core/canvas/CanvasElement";

// Canvas example
const canvas: Canvas = new Canvas(<HTMLCanvasElement>document.getElementById('canvas'));
const duck1: CanvasElement = new CanvasElement(200, 200, <HTMLImageElement>document.getElementById('madupng'), 50, 50);
const duck2: CanvasElement = new CanvasElement(550, 150, <HTMLImageElement>document.getElementById('madupng'), 50, 50);
canvas.addElement(duck1);
canvas.addElement(duck2);
canvas.addLineBetweenElements(duck1, duck2, 20, 'yellow');
canvas.render();