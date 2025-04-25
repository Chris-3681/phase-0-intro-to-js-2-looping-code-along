// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
  //  console.log (`I'm ${age} years old. Happy birthday to me`);   
//}
//const gifts = ["teady bear", "drone", "doll"]

//for (let i = 0; i < gifts.length; i++) {
 //   console.log (`wrapped ${gifts[i]} and added a bow!`)
   // debugger;
    //return gifts;
    
//}
//wrappedGifts(gifts)
const names = ["Charlie", "Samip", "Ali"]
const event = "birthday"
const results = writeCards(namesArray, eventName)

function writeCards (names, event){
    const messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages
}

//function countDown(){
  //let countDown = 10
  //while(countDown > 0){
    //console.log(countDown--)
  //}
//}

function countDown(num) {
  while (num >= 0) { 
    console.log(num);
    num--; 
  }
}