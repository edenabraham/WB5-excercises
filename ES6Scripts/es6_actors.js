let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

console.log("Question A. who is the academy member whose id is 187?"); // Find!!
console.log("ID 187: ", academyMembers.find(m => m.memID == 187).name);

console.log(" ");

console.log("Question B. who has been in atleast 3 films?");
let fil = academyMembers.filter(m => m.films.length >= 3);
fil.forEach(m => console.log(">3 films: ", m.name));

console.log(" ");

console.log("Who has a name that starts with Bob");
let bobs = academyMembers.filter(m => m.name.startsWith("Bob"));
bobs.forEach(m => console.log("Bobs: ", m.name));

console.log(" ");
console.log("Harder: which academy winners have been in films that starts with an A");
function startsWithA(title) {
    return title.startsWith("A");
}
function hasFilmA(member) {
    return member.films.filter(startsWithA).length > 0;
}
function printMatch(member) {
    console.log(member.name, "Has > 0 films starting with A");
}
let matches = academyMembers.filter(hasFilmA);
matches.forEach(printMatch);
