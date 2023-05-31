// var car1 = {
//     name: "mehran",
//     tyre: 4,
//     color: 'red'
// }
// var car2 = {
//     name: "mira",
//     tyre: 4,
//     color: 'white'
// }
// var car3 = {
//     name: "alto",
//     tyre: 4,
//     color: 'yellow'
// }
// var car4 = {
//     name: "civic",
//     tyre: 4,
//     color: 'purple'
// }

function Car(name, tyre, color, vibration) {
    this.name = name
    this.tyre = tyre
    this.color = color
    this.vibration = vibration
    this.start = function(speed) {
        console.log( this.name + " chali " + speed + " ki speed sey" + " chaltay samay yeh gaari vibrate " + this.vibration + " hoti hai")
    }
    
}

var car1 = new Car("mehran", 4, "red")

car1.start()

var car2 = new Car("mira", 4, "white")
var car3 = new Car("alto", 4, "yellow")
var car4 = new Car("civic", 4, "pruple", true)

console.log(car1, car2, car3, car4)

// Car.prototype.start = function(speed) {
//     console.log( this.name + " chali " + speed + " ki speed sey")
// }
