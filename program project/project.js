
//  COUNTER PROJECT 


const increaseBtn = document.getElementById(`increaseBtn`);//increaseBtn
const resetBtn = document.getElementById(`resetBtn`);//resetbnt
const  decreseBtn = document.getElementById(`decreseBtn`);//decreseBtn
const countLabel = document.getElementById(`countLabel`);//label jar id name countLabel

//onclick function

//variable

let count = 0;

// increase 
   increaseBtn.onclick = function(){

    count++; //number increseing
    countLabel.textContent = count; // counter number dekabe countLabel box ye

   }


   //decrease

   decreseBtn.onclick = function(){

    count--;
    countLabel.textContent = count;

   }


   //reset

   resetBtn.onclick = function(){

    count = 0;

    countLabel.textContent = count;

   }





   //  RANDOM NUMBER GENERATE
    
   const label1 = document.getElementById(`label1`);
   const label2 = document.getElementById(`label2`);
   const label3 = document.getElementById(`label3`);
   const mybtn = document.getElementById(`mybtn`);

   const min = 1;
   const max = 6;
   let randomNum1;
   let randomNum2;
   let randomNum3;

    mybtn.onclick = function(){

      randomNum1 = Math.floor(Math.random() * max) + min;
      randomNum2 = Math.floor(Math.random() * max) + min;
      randomNum3 = Math.floor(Math.random() * max) + min;

      label1.textContent = randomNum1;
      label2.textContent = randomNum2;
      label3.textContent = randomNum3;
    

    }





    //TEXTBOX BUTTON

    const myText =document.getElementById(`myText`);
    const mySubmit = document.getElementById(`mySubmit`);
    const resultElement = document.getElementById(`resultElement`);


    let age;

   //jukon ami mySubmit ye click korbo tokon {} er bitore sorto onujayi kaj korbe
    mySubmit.onclick = function(){

      age = myText.value; //myText ye age er value dekhabe(this is a input)
      age = Number(age);// age er mathod ti number ye dekabe

      if(age >= 100){
      resultElement.textContent = `You are too old enough to enter this website `;
    }

     else if (age >= 18 ){
      resultElement.textContent =` You are old enough to enter this website `
    }

    else if(age == 0){
       resultElement.textContent = `Your age can't be below just born`
    }
    else if(age < 0){
      resultElement.textContent = `Your age can't be below just born`
    }

    else  {
      resultElement.textContent = `You must be 18+ to enter this website `
    }


    }


    


    // MY CHECKED PROPERTY  
    //.checked (☐ >✅)= property that determines the checked state of an HTML checkbox 
    //or radia button element. 


    // checkbox,visa,materprice,paypalcard button
     const myCheckbox = document.getElementById(`myCheckbox`);
     const visaBtn = document.getElementById(`visaBtn`);
     const masterCardBtn = document.getElementById(`masterCardBtn`);
     const paypelCard = document.getElementById(`paypelCard`);

    //  submit button
     const mySumitbtn = document.getElementById(`mySumitbtn`);
      
    //  result show button
     const subResult = document.getElementById(`subResult`);
     const paymentResult = document.getElementById(`paymentResult`);

   //jekuno function submit button er bitore nibo

    mySumitbtn.onclick = function(){
      if(myCheckbox.checked)//remembered idname.checked means= fillup___ ☐ >✅
        {
         subResult.textContent = `You are subscribed!😃`
        }
         //☐  jodi fillup na kor hoi
        else{
          subResult.textContent =`you are Not subscribed!😞`
        };


        if(visaBtn.checked){
          paymentResult.textContent = `You are paying visa`;
        }

        else if(masterCardBtn.checked){
          paymentResult.textContent = `You are paying visa with masterCard`
        } 
    
        else if(paypelCard.checked){
        paymentResult.textContent = `you are paying with paypal`
        }

        else{
          paymentResult.textContent = `you must select a payment card`
        }

      }


      

      //ternary operator = a shortcut to if{} and else{}  statement 
      //                   help to assign a variable based on a condition 
       //                  condition ? code if true : code if false;


 



    //  TEMPARTURE CONVERSION........😤..........>🤯

  
    const TextBox = document.getElementById(`TextBox`);
    const toFahrenheit = document.getElementById(`toFahrenheit`);
    const toCelsius = document.getElementById(`toCelsius`);
     
    // result 
    const result = document.getElementById(`result`);

    let temp;
    
    function convert (){
      
      if( toFahrenheit.checked){

           temp = Number(TextBox.value);
           temp = (temp * 9 / 5) + 32;//c to f math system
           result.textContent = temp.toFixed(1) + '°F' ; //.toFixed diye dosomik er pore 1gor hobe fixe kora hoyese

      }

      else if(toCelsius.checked){

        temp = Number(TextBox.value);
        temp = (temp - 32) * (5/9); //f to c math system
        result.textContent = temp.toFixed(1) + '°C';

      }

      else{
        result.textContent = 'Select a Unit'
      }

    }

