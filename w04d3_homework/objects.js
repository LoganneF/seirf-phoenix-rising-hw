class Hamster {
    constructor(owner, name, price) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
}
    let wheelRun = () => {
    console.log("squeak squeak");
}   
    let eatFood = () => {
        console.log("nibble nibble");
}
    let getPrice = () => {
        console.log(this.price)
    }