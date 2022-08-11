// 1. Array Destructuring

let a, b,c; 
[a,b,c] = ["banana", "cucumber", ["bread", "cakes", "pizza"]]; 

console.log("Q1", a,c, ...c);

// 2.Object Destructuring

const halloween = {
    alina: "witch",
    bruno: "hobbit",
    moby: "princess"
}

console.log("Q2", Object.values(halloween));

//3. Parameters: Object Destructuring 

const singer = {
    musician: "Rosalia", 
    greatestHit: "Chicken Teriyaki",
    nationality: "Spanish",
    genre: "pop / flamenco / reggaeton"
}

function singerData() {
    return Object.entries(singer)
}

console.log(`${singer.musician} is a ${singer.nationality} singer and songwriter playing ${singer.genre}. Her greatest hit is ${singer.greatestHit}.`)

singerData()