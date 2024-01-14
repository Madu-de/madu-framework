import { CanvasCoords } from "./CanvasCoords";

export class CanvasLine {
  public static idCount: number = 0;
  private set id(value: number) {
    this._id = value;
  }
  public get id(): number {
    return this._id;
  }
  private _id: number;
  private coords: CanvasCoords[] = [];
  private width: number;
  private style: string;

  constructor(coords: CanvasCoords[], width?: number, style?: string) {
    this.id = CanvasLine.idCount++;
    this.coords = coords;
    this.width = width;
    this.style = style;
  }

  getCoords(): CanvasCoords[] {
    return this.coords.filter(() => true);
  }

  getWidth(): number {
    return this.width;
  }

  getStyle(): string {
    return this.style;
  }
}