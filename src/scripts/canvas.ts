import { Canvas } from "../core/canvas/Canvas";
import { CanvasElement } from "../core/canvas/CanvasElement";

// Canvas example
const canvas: Canvas = new Canvas(<HTMLCanvasElement>document.getElementById('canvas'));
const duck1: CanvasElement = new CanvasElement(200, 200, <HTMLImageElement>document.getElementById('madupng'), 50, 50);
const duck2: CanvasElement = new CanvasElement(550, 150, <HTMLImageElement>document.getElementById('madupng'), 50, 50);
canvas.addElement(duck1);
canvas.addElement(duck2);
canvas.addLineBetweenElements(duck1, duck2, 10, 'yellow');
canvas.render();

window.addEventListener('keydown', (ev: KeyboardEvent) => {
  if (ev.key === 'ArrowDown') {
    duck1.getCoords().setY(duck1.getCoords().getY() + 10);
  } 
  if (ev.key === 'ArrowUp') {
    duck1.getCoords().setY(duck1.getCoords().getY() - 10);
  } 
  if (ev.key === 'ArrowRight') {
    duck1.getCoords().setX(duck1.getCoords().getX() + 10);
  } 
  if (ev.key === 'ArrowLeft') {
    duck1.getCoords().setX(duck1.getCoords().getX() - 10);
  }
});