let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Snickers", price: 2.89},
    { product: "Jolly Ranchers", price: 2.57},
    { product: "Reeses", price: 2.89},
    { product: "Life Savers", price: 5.78},
    { product: "Butterscotch", price: 2.31},
    { product: "Sour Patch Kids", price:4.86},
];
//Quetion A. which candies cost less than $4
products.filter(p => p.price < 4).forEach(p => console.log("<4: ", p));

console.log(" ");

//Question B. which candies have "M&M" as part of the name
let mm= products.filter(p => p.product.includes("M&M"));
mm.forEach(p => console.log("M&Ms': ",p));

console.log(" ");

//Question C. Do we have a product called Swedish Fish?
let sw= products.filter(p => p.product.includes("Swedish Fish"));
sw.forEach(p=> console.log(p));
//if you use find it would be faster..
//console.log(products.find(p => p.product == "Swedish Fish") != undefined)