import { CanvasCoords } from "./CanvasCoords";

export class CanvasElement {
  public static idCount: number = 0;
  private set id(value: number) {
    this._id = value;
  }
  public get id(): number {
    return this._id;
  }
  private _id: number;
  private coords: CanvasCoords;
  private width: number;
  private height: number;
  public image: HTMLImageElement;
  private imageLoaded: boolean = false;

  constructor(x: number, y: number, image: HTMLImageElement, width?: number, height?: number) {
    this.id = CanvasElement.idCount++;
    this.coords = new CanvasCoords(x, y);
    this.width = width || image.width;
    this.height = height || image.height;
    this.image = image;
    if (this.image.complete) {
      this.imageLoaded = true;
    }
    this.image.addEventListener('load', () => {
      this.imageLoaded = true;
    }, false);
  }

  public getCoords(): CanvasCoords {
    return this.coords;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public getMiddleCoords(): CanvasCoords {
    const elementCoords: CanvasCoords = new CanvasCoords(this.getCoords().getX(), this.getCoords().getY());
    elementCoords.setX(elementCoords.getX() + this.getWidth() / 2);
    elementCoords.setY(elementCoords.getY() + this.getHeight() / 2);
    return elementCoords;
  }

  public isImageLoaded(): boolean {
    return this.imageLoaded;
  }
}