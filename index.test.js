const { Rectangle, Square, Triangle, Circle } = require('./index.js'); // Import only Rectangle class

test('calculate rectangle area correctly', () => {
  const rectangle = new Rectangle(5, 4)
  const area = rectangle.calculateArea()
  expect(area).toBe(20)
});

test('calculate perimeter area correctly', () =>{
    const rectangle = new Rectangle(6,4)
    const perimeter = rectangle.calculatePerimeter()
    expect(perimeter).toBe(20)
})

test('calculate square area correctly', () => {
    const square = new Square(5)
    const area = square.calculateArea()
    expect(area).toBe(25)
  });
  
test('calculate square perimeter correctly', () =>{
    const square = new Square(5)
    const perimeter = square.calculatePerimeter()
    expect(perimeter).toBe(20)
})

test('calculate triangle area correctly', () => {
    const triangle = new Triangle(10,5,7,8)
    const area = triangle.calculateArea()
    expect(area).toBe(40)
})

test('calculate triangle perimeter correctly', ()=>{
    const triangle = new Triangle(10,5,7,8)
    const perimeter = triangle.calculatePerimeter()
    expect(perimeter).toBe(22)
})

test('calculate circle area correctly ', ()=> {
    const circle = new Circle(7)
    const area = circle.calculateArea()
    expect(area).toBeCloseTo(153.94);
})

test('calculate circle perimeter correctly', ()=>{
    const circle = new Circle(7)
    const perimeter = circle.calculatePerimeter()
    expect(perimeter).toBeCloseTo(43.98)
})