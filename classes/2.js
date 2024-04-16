class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(7, 13);

const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log('Площадь прямоугольника:', area);
console.log('Периметр прямоугольника:', perimeter);
