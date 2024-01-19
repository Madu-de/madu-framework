import { CanvasCoords } from "./CanvasCoords";
import { CanvasElement } from "./CanvasElement";
import { IRenderableCanvasElement } from "./IRenderableCanvasElement";

export class CanvasLine implements IRenderableCanvasElement {
  priority: number = 1;
  public static idCount: number = 0;
  private set id(value: number) {
    this._id = value;
  }
  public get id(): number {
    return this._id;
  }
  private _id: number;
  private coords: (CanvasCoords | CanvasElement)[] = [];
  private width: number;
  private style: string;

  constructor(coords: (CanvasCoords | CanvasElement)[], width?: number, style?: string, priority?: number) {
    this.id = CanvasLine.idCount++;
    this.coords = coords;
    this.width = width;
    this.style = style;
    this.priority = priority || 0;
  }

  getCoords(): (CanvasCoords | CanvasElement)[] {
    return [...this.coords];
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(value: number): void {
    this.width = value;
  }

  getStyle(): string {
    return this.style;
  }

  setStyle(value: string): void {
    this.style = value;
  }

  render(context: CanvasRenderingContext2D): void {
    context.beginPath();
      this.getCoords().forEach((coords: CanvasCoords | CanvasElement, i: number) => {
        coords = coords instanceof CanvasCoords ? coords : new CanvasCoords(coords.getMiddleCoords().getX(), coords.getMiddleCoords().getY());
        i == 0 ? context.moveTo(coords.getX(), coords.getY()) : context.lineTo(coords.getX(), coords.getY());
      });
      context.lineWidth = this.getWidth() || context.lineWidth;
      context.strokeStyle = this.getStyle() || context.strokeStyle;
      context.stroke();
  }
}