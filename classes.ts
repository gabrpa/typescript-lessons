// class Greeter{
//    greeting: string
//    constructor(message: string){
//        this.greeting = message  
//    }
//    greet(){
//        return "Hello " + this.greeting
//    }
//}

// let greeter = new Greeter("how are you?")
//console.log(greeter.greet());

// super

class Animal {
    name: string
    constructor(theName: string){
        this.name = theName
    }
    move(distanceInMeters: number = 0){
        console.log("moved " + distanceInMeters + "meters")
    }
}

class Snake extends Animal{
    constructor(name: string){
        super(name)
    }
    move(distanceInMeters = 5){
        super.move(distanceInMeters)
    }
}

let snake = new Snake("Slithy")
console.log(snake.move);