

const MAX_NUM = 100;
const MIN_NUM = 0;

let myNumber = Math.floor(Math.random() *(MAX_NUM-MIN_NUM))+MIN_NUM;

console.log(`I have a number between ${MAX_NUM} and ${MIN_NUM}, guess my number`);

process.stdin.setEncoding("utf-8");
process.stdin.on('data', function (data) {
    let guess = Math.round(data) ;
    
   if(guess > myNumber){
       console.log("My number is smaller");
   } else if(guess < myNumber){
       console.log("My number is greater");
   } else {
       console.log("YES !!!! that is my number. How did you know?");
       process.exit(1);
   }

    
});

function clearScreen(){
    process.stdout.write('\033c');
}