class Shape{
    calculateArea(){
        
    }
    calculatePerimeter (){
        
    }
}
class Rectangle  extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }
    calculateArea(){
        let area = this.width * this.height
        console.log(`Area : ${area}`)
    }
    calculatePerimeter(){
        let perimeter = 2 * (this.width + this.height)
        console.log(`Perimeter : ${perimeter}`)
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side, side)
        this.side = side
    }
    calculatePerimeter(){
        let perimeter = 4 * this.side
        console.log(`Perimeter : ${perimeter}`)
    }
}

class Triangle extends Shape{
    constructor(base, side1, side2, height){
        super()
        this.base = base
        this.side1 = side1
        this.side2 = side2
        this.height = height
    }
    calculateArea(){
        let area = (this.base * this.height)/2
        console.log(`Area : ${area}`)
    }
    calculatePerimeter(){
        let perimeter = this.base + this.side1 + this.side2
        console.log(`Perimeter : ${perimeter}`)
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }
    calculateArea(){
        let area = Math.PI * this.radius * this.radius
        console.log(`Area : ${area}`)
    }
    calculatePerimeter(){
        let perimeter = 2 * Math.PI * this.radius
        console.log(`Perimeter : ${perimeter}`)
    }
}

const rec = new Rectangle(5,4)
rec.calculateArea()
rec.calculatePerimeter()

const sqa = new Square(5)
sqa.calculateArea()
sqa.calculatePerimeter()

const tri = new Triangle(10,5,7,8)
tri.calculateArea()
tri.calculatePerimeter()

const circle = new Circle(7)
circle.calculateArea()
circle.calculatePerimeter()