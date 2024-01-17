import { CanvasCoords } from "./CanvasCoords";
import { CanvasElement } from "./CanvasElement";

export class CanvasLine {
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

  constructor(coords: (CanvasCoords | CanvasElement)[], width?: number, style?: string) {
    this.id = CanvasLine.idCount++;
    this.coords = coords;
    this.width = width;
    this.style = style;
  }

  getCoords(): (CanvasCoords | CanvasElement)[] {
    return [...this.coords];
  }

  getWidth(): number {
    return this.width;
  }

  getStyle(): string {
    return this.style;
  }
}