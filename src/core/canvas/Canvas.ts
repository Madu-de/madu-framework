import { CanvasCoords } from "./CanvasCoords";
import { CanvasElement } from "./CanvasElement";
import { CanvasLine } from "./CanvasLine";

export class Canvas {
  private context: CanvasRenderingContext2D;
  private height: number;
  private width: number;
  private elements: CanvasElement[] = [];
  private lines: CanvasLine[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
  }

  addElement(element: CanvasElement): void {
    this.elements.push(element);
  }

  removeElement(element: CanvasElement): void;
  removeElement(id: number);

  removeElement(elementOrId: CanvasElement | number): void {
    this.elements = this.elements.filter((e: CanvasElement) => e.id !== (typeof elementOrId === "number" ? elementOrId : elementOrId.id));
  }
  
  addLine(line: CanvasLine): void {
    this.lines.push(line);
  }

  addLineBetweenElements(element1: CanvasElement, element2: CanvasElement, width?: number, style?: string): void {
    const element1Coords: CanvasCoords = element1.getMiddleCoords();
    const element2Coords: CanvasCoords = element2.getMiddleCoords();
    this.addLine(new CanvasLine([element1Coords, element2Coords], width, style));
  }

  removeLine(line: CanvasLine): void {
    this.lines = this.lines.filter((l: CanvasLine) => l.id !== line.id);
  }

  render(): void {
    requestAnimationFrame(() => this.render());
    this.context.clearRect(0, 0, this.width, this.height);
    if (this.elements.some((e: CanvasElement) => !e.isImageLoaded())) {
      this.context.font = '48px serif';
      this.context.fillText('Loading...', 0, 48);
      return;
    }
    this.lines.forEach((line: CanvasLine) => {
      this.context.beginPath();
      line.getCoords().forEach((coords: CanvasCoords, i: number) => {
        i == 0 ? this.context.moveTo(coords.getX(), coords.getY()) : this.context.lineTo(coords.getX(), coords.getY());
      });
      this.context.lineWidth = line.getWidth() || this.context.lineWidth;
      this.context.strokeStyle = line.getStyle() || this.context.strokeStyle;
      this.context.stroke();
    });
    this.elements.forEach((element: CanvasElement) => {
      this.context.drawImage(element.image, element.getCoords().getX(), element.getCoords().getY(), element.getWidth(), element.getWidth());
    });
  }
}