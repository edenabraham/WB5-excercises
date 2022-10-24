
// let menu = [
//     [ /* breakfast items */],
//     [ /* lunch items */],
//     [ /* dinner items */],
// ];

let menu = [
    [
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
        { item: "burger", price: 5.36 },
        { item: "fries", price: 3.00 },
        { item: "shake", price: 8.37 },
    ],
    [
        { item: "steak", price: 27.23 },
        { item: "pork chop", price: 12.27 },
        { item: "mashed potatoes", price: 2.00 },
    ]
];
//add objects for lunch and dinner menu

const BREAKFAST = 0;
const LUNCH = 1;
const DINNER = 2;

const TITLES = ["breakfast items", "lunch items", "dinner items"];

function showItem(item) {
    //USE TABS (\t) TO LINE THEM UP
    console.log("\t", item.price, "\t", item.item)
}

function showItemsForMealTime(meal) {
    // show a meal title based on the meal index
    console.log(TITLES[meal]);

    // show the items for the selected meal
    menu[meal].forEach(showItem); 
}

let meal = BREAKFAST;  //  0==BREAKFAST
showItemsForMealTime(meal)

//Test with the other possible meal index values 1 and 2.
showItemsForMealTime(LUNCH)
showItemsForMealTime(DINNER)

console.log("AGAIN:")
const periods = [BREAKFAST, LUNCH, DINNER];
periods.forEach(showItemsForMealTime);