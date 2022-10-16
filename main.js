const prompt = require('prompt-sync')({sigint: true});

/*Global Variable*/
let myFish = [];
let emptyFish = [];
//let fish1 = generateFish()
//let fish2 = generateFish()
//myFish.push(fish1,fish2)

//console.log(getTotalWeight(myFish))
//console.log(getTotalFish(myFish))


 


//Gameflow
console.log(`You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`)
console.log(`\n====================================================`);
//let ask = prompt(`\nAre you ready to cast your line?[Y/N]  `).toUpperCase()


 for(let i=6; i<12; i++){
    console.log(`The time is ${i}:00am. So far you've caught:`);
    console.log(`${getTotalFish(myFish)} fish, ${getTotalWeight(myFish)} lbs, $${getTotalValue(myFish)}`);
    
    newFish = generateFish();
    

    console.log(`You caught a ${newFish.name} weighing ${newFish.weight} lbs and valued at $${newFish.value}`)
    
    let action = prompt('Your action: [c]atch or [r]elease:  ').toLowerCase()

      if( action === 'r'){
        console.log('You chose to release the fish');
        
        }else if (action === 'c'){
            console.log('You chose to keep the fish')
            myFish.push(newFish)
        }
        
 }

//     
//     
    //current fish list - keep track of fish list and print list
    //# of fish = .length of myFish
    //weight&value- function to calculate totals in myFish array

//log random fish on line - generate random fish







//console.log(randomWeight())
//console.log(randomPrice())
//console.group(randomName())
//console.log(generateFish())


function randomWeight(){
    let weight = Number((Math.random() * 5).toPrecision(3));
    
    while(weight < 1){
        weight = Number((Math.random() * 5).toPrecision(3));
    }
    return weight;

}

function randomPrice(){
    let price = Number((Math.random() * 5).toPrecision(3));
   
    while(price<.1){
        price = Number((Math.random() * 5).toPrecision(3));
    }
    if(price < 1){
        price = Number(price.toPrecision(2));
    }
    return price;

}

function randomName(){
    let names = ['Shiny', 'Red','Dull', 'Blue', 'Slimy', 'Green', 'Dry', 'Yellow', 'Vibrant', 'Purple', 'Floppy', 'Orange', 'Silly', 'Silver'];

    let types = ['Salmon', 'Bass', 'Trout', 'Flounder', 'Perch', 'Snapper', 'Cod', 'Catfish', 'Grouper', 'Tuna', 'Blobfish', 'Blowfish'];

    let name1 = names[Math.floor(Math.random() * names.length)];
    let name2 = names[Math.floor(Math.random() * names.length)];
    let type = types[Math.floor(Math.random() * types.length)];

    while (name1 === name2){
        name2 = names[Math.floor(Math.random() * names.length)];
    }

    return (`${name1} ${name2} ${type}`)

}

function generateFish(){
    let fish ={};
    fish.name = randomName()
    fish.weight = randomWeight()
    fish.value = randomPrice()

    return fish

}

function getTotalWeight(array){
    let totalWeight = 0
    for(i=0;  i<array.length; i++){
        totalWeight += array[i].weight
    } return Number(totalWeight.toPrecision(3));
}

function getTotalValue(array){
    let totalValue = 0
    for(i=0; i<array.length; i++){
        totalValue += array[i].value
    } return Number(totalValue.toPrecision(3));
}
function getTotalFish(array){
    let totalFish = 0;
    for(i=0; i < array.length; i++){
        totalFish += 1
    }return totalFish 
}

function action(){
    console.log()
}

/*fish
-weight: number
-name: (2 descriptors and a type): string
-value: number


fish = {
    name: string
    weight: number
    value: number
}
calculate weight??

Math.random
weight 0-5 (feel free to adjust)
Math.ceil(Math.random() * 5) - whole number

Math.floor(Math.random() * 5) - whole number * 10) - decimal 2
// let rand = Math.random() * 5;
// console.log(rand);
// console.log(Number(rand.toPrecision(3)));

calculate value
value 0-5
(Math.random() * 5).toPrecision(3)

name - 2 descriptors + 1 type
adjective array['enormous', 'red', 'scaly', 'snapper']

type array ['salmon', 'bass', 'trout', ]

Math.floor(Math.random() * type.length)

ad1 + ad2 + type

//check to make sure adj1 !== adj2
//if so re- randomize





*/

