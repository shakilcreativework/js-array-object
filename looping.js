/**
 * Looping technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 */

const friends = ['Elen', 'Bill', 'Mark', 'Waren'];

for(const friend of friends){
    // console.log(friend);
}

for(let i = 0; i < friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}


const numbers = [4, 64, 749, 38, 399, 494, 939];

for(let i = 0; i < numbers.length; i++){
    // console.log(i);
    // console.log(numbers[i]);
}


let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}


let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}