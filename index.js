// Code your solutions in this file
const people = ["Ada", "Brendan", "Ali"]

function writeCards(people) {
    let messages = [];
    for  (let i = 0; i < people.length; i++) {
        messages.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}
console.log(writeCards(people));
function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
console.log(countDown(10));