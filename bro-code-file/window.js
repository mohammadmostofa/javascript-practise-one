// kaj gulo node diye asbe na
//aigula anchor ye pop dibe
// pop



// accept pop pup

// window.alert(`Hi! how are you?`)

//accept input user name by window promt
// this process isnot professional 

//let username;//variable name er maddome input box toiri hoiche
// username = window.prompt(`What's your username ?`)
// console.log(username)
//ata refresh dile pitibar username dite hoi!


// let age = window.prompt(`how are you ?`) //window.promt dile input box asbe
//    age = Number(age) // convert text to number by use number ()
//    age += 1 ;
//    console.log(age, typeof age)

//const abong onno variable er modde partokko

// let pi = 3.1416;
//   pi = 6.222; //let takar karone pi er man change korte parchi 
// let radius;
// let circumference;

//    radius  = window.prompt(`enter your circle`)
//    radius = Number(radius);

//    circumference = 2 * pi * radius;

//    console.log(circumference)



// const pi = 3.1416; //const takar karone pi er man change korte parboo na second time
    //pi = 10;//ubcaught error to change value
// let radius;
// let circumference;

//    radius  = window.prompt(`enter your circle`)
//    radius = Number(radius);

//    circumference = 2 * pi * radius;

//    console.log(circumference)


//Mathed chaining =  Calling one mathod after another in one 
        //                     continues line of code

        //No mathod chaining

         //let username = window.prompt('enter your user name');
        //    username  = username.trim();
        //  let letter = username.charAt(0);
        //       letter = letter.toUpperCase();

        // let extrachars = username.slice(1);
        //  extrachars = extrachars.toLowerCase();
        //    username = letter + extrachars;

        //    console.log(username)

        //Mathod chaining

        //  username = username.trim().charAt().toUpperCase() +
        //  username.trim().slice(1).toLowerCase();
        //   console.log(username);




        //CASING RANDE GAME


const minNum = 50;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

console.log(`(🤫 Secret Answer: ${answer})`);

let attempts = 0; //kothobar songka neo hoice ta 
let guess; //anumanik maan neoya
let running = true ;

// while loop start

while(running)   {

  guess = window.prompt(`Guess a number  ${minNum} and ${maxNum}`);
  guess = Number(guess);
  console.log(typeof guess,guess);

  if( isNaN (guess) ){
      
    window.alert(`Please enter a valid number!`)
  }

  else if(guess < minNum  || guess > maxNum ) 
    //if min greater than guess  of guess greater than max
    {
      window.alert(`Please enter a valid number!`)
    }

    else{

    attempts++;//প্রতি বার ইউজার ইনপুট দিলে attempts এর মান 
    //           ১ বাড়বে (মানে একবার চেষ্টা হয়েছে)।

    if(guess < answer){
      window.alert(`TO LOW, TRY AGAIN!`)
    }

   else if(guess > answer){
      window.alert(`TO HIGH, TRY AGAIN!`)
    }

    else if (guess === answer) {

        window.alert(`🎉 CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
       
    }

    running = false; 
    }


}



