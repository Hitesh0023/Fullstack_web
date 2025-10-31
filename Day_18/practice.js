let dice = Math.ceil(Math.random()*6);
console.log(dice)

const car = {
    name : "Fortuner",
    model : 2025,
    color : "White"
};
console.log(car.name)
console.log(car["name"]);

const person = {
    name : "Hitesh",
    age : 20,
    city : "Chalisgaon"
}
person.city = "New York"
person.country = "India"
console.log(person)