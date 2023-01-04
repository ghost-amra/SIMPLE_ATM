const prompt = require('prompt-sync')({sigint: true});

const allowedCardId = 123456789;
const allowedPinCode = 8888;

let insertCardId = prompt('Welcome to our ATM. Please insert your VISA card: ');

insertCardId = Number(insertCardId);

if (insertCardId === allowedCardId) {

    console.log('Loading......');

    let pincode = prompt('Please insert your pin code: ');
    pincode = Number(pincode);

    if (pincode === allowedPinCode ) {

        console.log('----- Welcome Mr Amarjargal ---------');

        let myBalance = 10;

        console.log('Current balance : '+ myBalance + '$');

        console.log('Opition : 1 - Deposit, 2 - Withdraw, 3 - Show balance , 4 - Exit');
        
        let exit = false;

        while (!exit ){

        let myTransaction = prompt('Opition input: ');


        if (myTransaction == 1){

            let myTransactionAdd = prompt('Amount of desposit: ');

            myTransactionAdd = Number(myTransactionAdd);

            myBalance = myBalance + myTransactionAdd;

            console.log('Success Current balance '+ myBalance + '$');

        }else if (myTransaction == 2){

            let myTransactionWithdraw = prompt('Amount of Withdraw: ');
            
            myTransactionWithdraw = Number(myTransactionWithdraw);

            if ( myBalance >= myTransactionWithdraw){

            myBalance = myBalance - myTransactionWithdraw;

            console.log('Success Withdraw Current balance '+ myBalance + '$');

            } else{
                console.log('Insufficed fund');
            }

        }else if (myTransaction == 3){

            console.log('---- Your current balance '+ myBalance + '$');

        }
        if (myTransaction == 4){

            console.log('Bye!');
            exit = true;

        }
        else{

            console.log('please insert 1, 2 , 3 , 4 option');
            console.log('Opition : 1 - Deposit, 2 - Withdraw, 3 - Show balance , 4 - Exit');
        }

    }
    
    } else {
        console.log('Sorry, Wrong pin code');
    }
    
  } else {
    console.log('Sorry, VISA card not found please try again!');
}

/* // Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt('Guess a number from 1 to 10: ');
  // Convert the string input to a number
  guess = Number(guess);

  // Compare the guess to the secret answer and let the user know.
  if (guess === numberToGuess) {
    console.log('Congrats, you got it!');
    foundCorrectNumber = true;
  } else {
    console.log('Sorry, guess again!');
  }
} */