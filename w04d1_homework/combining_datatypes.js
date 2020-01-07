//========================================
// Combine objects, arrays, and functions
//=========================================
let crayonBox = {
    crayons: ["Brick", "Scarlet", "Apricot"],
    count: 120,
    brand: "Crayola"
}
//console.log(crayonBox.crayons[0])
   
let bottle = {cap: {material: 'metal', color: 'blue'}, size: '160z'}
//console.log(bottle.cap.material)

let receipt = ["Walmart", "Target", costco = {guac: 4.99, cheese: 6.99}]
//console.log(receipt[2].guac)

let apartmentBuilding = [tenants= ["Loganne", "Morgan", "John"], "Quail Ridge", "Greenbridge"]
//console.log(apartmentBuilding[0][0])


//==================================================================
// Combine objects, arrays, and functions more than one level deep
//==================================================================
let project = {item: "scarf", size : "6ft"}

const knit = () => {
    console.log(project.item)
}
//knit();
const crayonSelector = () => {
    console.log(crayonBox.crayons[0])
}
//crayonSelector();
const options = (message) => {
    console.log(message)
}
const powerButton = (options) => {
    return options
}

options("select a song");