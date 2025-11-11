// console.log('Hello World')
// console.log(`i like pizza`)


// ekta bisoi holo ami just js practise korar jonno otirikto ai file ta bebohar kor
//techi tai dom er kaj kor somoi aikane sobgulo kaj comment kore rakte hobe
// dom and js dutu file ai js jar fole dublicate error asbe

// start------------------------------------<Hi>

//  type of number variable
//let age = 21;
//let price = 10.6 ;
//let gpa = 4.00 ;

// console.log(typeof age)
// console.log(`you are ${age} year old .`)
// console.log(`the product price is $${price}.`)//price er ketre $ sign 2 bar dite hbe
// console.log(`you get gpa ${gpa}`)
// console.log( `Total`, age + price + gpa)


// type of string variable

//let myFirstName = `Golam `
// let myLastName = `Mostofa`
// console.log( typeof myFirstName);

// console.log(`my first name ${myFirstName}`)
// console.log(`my last name ${myLastName}`)
// console.log( `my full name is `, myFirstName + myLastName)


// let Food = `Pizza`;
// console.log(`my favourite food is ${Food}!`)

// let email = `mohammadmostofa.dev@gmail.com`
// console.log(`my email is ${email}`)


// type of boolean variable

// let online = true;
// let forSale = true ;
// let isStudent = true;

// console.log(typeof online)
// console.log(`iam at online ${online}!`)
// console.log(`this car is forsale ${forSale}!`)
// console.log(`Enrolled:${isStudent}!`)



//Arithmetic Operators.
// +, _, *, ** thats mein 2 the power /, %modules.


// let students = 30;

// students = students + 1;
// students = students - 1 ;
// students = students * 2;
// students = students ** 2;
//  students = students / 2;
// students = students % 4;

// short and easy process 1
// students += 1 ; 
// students -= 1;
// students *= 2;
//  students **= 2;
// students /= 2;
// students %= 4;

//short cut and ease process 2 only for plus and mainus

// students++;
// students--;

// console.log(students)


// let result = 6 / 2 ** ( 2 + 5) ;
// console.log(result)


// how convert different type of variable of string, number, boolean
//jodi kuno words, number, take tader ke jekuno variable ye porinoto kora jai


// let x = 'pizza';
// let y = 'pizza'; 
// let z = 'pizza';

//    x = Number(x);
//    y = String(y);
//   z = Boolean(z);

// console.log(x, typeof x )
// console.log(y, typeof y )
// console.log(z, typeof z )


// radius circle system make with dianamic

//let

// let  pi = 3.1416;
// let radius;
// let circumference;

// radius = Number(radius);
// circumference = 2 * pi * radius;
// console.log(circumference);

// document.getElementById(`mySubmit`).onclick = function() {
//   radius = document.getElementById('myText').value;
//   radius = Number(radius);
//   circumference = 2 * pi * radius;
//   document.getElementById(`myh3`).textContent = circumference;//out put result for external
//   console.log(circumference)//output result for only internal
// }



//const 
// er somoi variable name uppercase hoi

// const PI = 3.1416;
// PI = 3.449; //this result cannot show ;because one's more use
// let radius;
// let circumberence;

// document.getElementById(`mySubmit`).onclick = function(){
//   radius = document.getElementById(`myText`).value;
//   radius = Number(radius);
//   circumberence = 2 * PI * radius;
//   console.log(circumberence + 'cm')//internal result
//   document.getElementById('myh3').textContent = circumberence + 'cm'//external result

//ami chaile cm er jaigai miter, km, gm ja likbo seaibabe dekabe
// }



//“built-in object that provides a collection of properties and methods”
//এমন একটি অবজেক্ট যা প্রোগ্রামিং ভাষার ভেতরেই তৈরি আছে, 
// এবং এতে বিভিন্ন গুণাবলি ও কাজ করার নিয়ম (method) একত্রে পাওয়া যায়।

// math.name();

// let x = 45;
// let a = -3.21;
// let y = 2;
// let z;

//z = Math.round(x); //round ye doshomik er porer ongsho utbe na 3
//z = Math.floor(x); // floor ye doshomik er porer ongsho utbe na 3
//z = Math.ceil(x);//ceil er ketre 3.something hole 3+1 = 4 hobe  4
//z = Math.trunc(x);//trunc ye doshomik er porer ongsho utbe na 3
// = Math.pow(x,y); //x er power y = 10.3041
//z = Math.sqrt(x);//squrt mane holo borgomul kotho ber kora
//z = Math.log(x);//log ber kora 

//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);

//convert negative to positive number

//z = Math.abs(a); //just for positive to  negative 
//z = Math.sign(a);//sign songka jodi positive hoi tahole 1 ar negative hole -1 hobe and 0 hole o deka be

//max and min 

//z = Math.max(a,x,y,z)//sogulor modde boro songka jeta oita ans = max ba boro
//z = Math.min(a,x,y)//sogulor modde chuto songka jeta oita ans = min ba chuto

//console.log(z);

// let max = Math.max(a,x,y)
// let min = Math.min(a,x,y)
// console.log(max)
// console.log(min)

// random mathod

//Math.random() হলো JavaScript-এর একটি অন্তর্নির্মিত মেথড,
// যা প্রতিবার চালানোর সময় ০ থেকে ১-এর মধ্যে এলোমেলো দশমিক সংখ্যা তৈরি করে।
// এটি সাধারণত লটারি, গেম, বা র‍্যান্ডম আইডি তৈরি করার মতো কাজে ব্যবহৃত হয়।

//ami ek teke 100 er modde random(elomelo) songka pete chhai doshomik chara 

// let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum);


// let min = 50;
// let max = 100;

// let randomNums = Math.floor(Math.random() * max - min ) + min;

// console.log(randomNums)



// age = 50;
//  if(age >= 100 ){
//   console.log('You are to old to enter this site')
// }

// else if(age == 0) {
//   console.log('you cant enter. you were just born')
// }

//  else if(age >= 18){
//   console.log('you are ready to enter this site')
// }



// else{
//   console.log('you must to be 18+ enter this site')
// }



//subject poin to transfer Grade point

// let mark;

// mark = window.prompt(`enter your sunject total number`)

// if(mark <= 32)
// {
//   console.log(`your subject Grade point is F`)
// }

// else if(mark <= 39){
//   console.log(`your Grade point is D`)
// }

// else if(mark <= 49){
//   console.log(`your Grade point is B`)
// }

// else if(mark <= 69){
//   console.log(`your Grade point is A-`)
// }

// else if(mark <= 79){
//   console.log(`your Grade point is A`)
// }

// else if(mark <= 100){
//   console.log(`your Grade point is A+`)
// }



//ternary operator = a shortcut to if{} and else{}  statement 
//                   help to assign a variable based on a condition 
//                  condition ? code if true : code if false;

//example-1
//  let age = 10;
//  let message = age >= 18 ? 'you are adult ': 'your are a minor'
//  console.log(message)


//example-2

// let time  = 16;
// let greeting = time < 12 ? 'Good Morning':'Good Afternoon';
// console.log(greeting)

//example-3
// let isStudent = true;
// let sent = isStudent? 'you are a student':'you are NOT a  student '
// console.log(sent);


//discount dile kibabe tar setup korbo ternery system diye

//  let purcheaseAmount = 10;
//  let discount = purcheaseAmount >= 100 ? 10 : 0;
//  console.log(`your total $${purcheaseAmount - purcheaseAmount * (discount / 100)}`)


// Switch = can be an efficient replecement to many if else statements

// let day = 10;

// switch (day) {

//   case 1:
//     console.log(`its Monday`);
//     break;

//   case 2:
//     console.log(`its Tuesday`);
//     break;

//   case 3:
//     console.log(`its Wednesday`);
//     break;

//   case 4:
//     console.log(`its Thursday`);
//     break;

//   case 5:
//     console.log(`its Friday`);
//     break;

//   case 6:
//     console.log(`its Satarday`);
//     break;

//   case 7:
//     console.log(`It is Sunday`);
//     break;

//   default:
//     console.log(`${day} is NOT a day`)

// }

//testscore

// let testScore = 80;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;

//   case testScore >= 80:
//     letterGrade = "B";
//     break;


//   case testScore >= 70:
//     letterGrade = "C";
//     break;

//   case testScore >= 60:
//     letterGrade = "D";
//     break;

//   case testScore >= 30:
//     letterGrade = "E"
//     break;

//   default:
//     letterGrade = " You have no score"
//     break;
// }

// console.log(letterGrade);



// string mathods = allow you to manipulate and work with text (strings)

// let userName = "Golam Mostofa";
//console.log(userName.charAt(0));//string er index ber kore 0 = G;
//console.log(userName.indexOf("o"))//string to number  'o' = 1;
//console.log(userName.lastIndexOf('o')) //last o = 10 number ye ase;
//console.log(userName.length); //total number of string with space = 13;
//let userNames = '      Golam Mostofa 😉(@)'
// console.log(userNames);
//console.log(userNames.trim())//left right gap er somadan kora

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
//console.log(userName.repeat(3));//sonpuno name ta 0-3 porjonto repeat hobe

//string mathod > showed by boolean = true of false; ang case sensetive mathod
// 1.String.startsWith(); //startwith()er bitore first word + index number hobe
// .startsWith () er bitore je word deoya hobe oita sentence ye ptm hole ture hobe na hole false hobe
// 2.String.endWith(); 
//.endsWith(); er bitore je word ta dibo oita jodi last word hoi tahole true na hole false hobe
// 3.String.includes();
//.includes() er bitore je word deoya hobe oita jodi take tahole true na hole false hobe


//let names = ' Golam mostofa';// first dike space deoya se tai condition 1 hobe
// let names = 'Golam mostofa';// space na deoyai names ner value boise
// let  result = names.startsWith( " ");
// if(result) {
//   console.log('you name cant begin with " " ')
// }

// else{
//   console.log(names)
// }


//endwith() mathod

//let names = 'Golam mostofa  ';// end dike space  deoya se tai condition 1 hobe
//let names = 'Golam mostofa';// space na deoyai names ner value boise
//let result = names.endsWith(" ");
// if (result) {
//   console.log('you name cant end with " " ')
// }

// else {
//   console.log(names)
// }


//.includes

//console.log(names.includes('G'))
//console.log(names.includes('Golam'))
// console.log(names.includes ('kkkk'))


//.replaceALL( ' - deiya ase' , ' + korte chia')

//let phoneNumber =  "123-456-789";

  // phoneNumber =  phoneNumber.replaceAll("-" , "") // replaceAll - > ''
   //phoneNumber =  phoneNumber.replaceAll("-" , "+") // replaceAll - > +

   // .padStar( "string soho protome koita jukto hobe", "ki jukto kora hobe" )
   

      // phoneNumber = phoneNumber.padStart("20" , "0")
      //  console.log(phoneNumber)

       // .padStar( "string soho sese koita jukto hobe", "ki jukto kora hobe" )

       // phoneNumber = phoneNumber.padEnd("22" , "0")
       //console.log(phoneNumber)

       // .slice() 
       // jodi kuno index number 0 teke 3 porjonto 
       // neoya hoi tahole er ser hobe index 0-2 porjonto

     //  let food = 'Ogrange';
        // let ans = food.slice(0 , 3)// 012 = 'ogr' ber hoise
         //let ans = food.slice('2' , '5' )// 234 = 'ran' ber hoise
         //console.log(ans);

        //  let firstC = food.slice(0,1); //01 = 'o'
        //  console.log(firstC)

        //  let lastC = food.slice(4, 5)
        //  console.log(lastC)

         //let replay = food.slice(-1)
         //console.log(replay)

        //index Of

        //let email = 'mohammadmostofa@gmail.com';

        //let userNamess = email.slice(0, email.indexOf('@'));// 0 hote suru korbe ses hobe @ er agge
        //let extension = email.slice( email.indexOf('@') );// @ teke suru hobe ses porjonto
        //console.log(userNamess)
        //console.log(extension)

         // Logical operator = used to combine or manipulate boolean value
         //                     ( true of false)
        //Logical operator
        //   =&& AND  ...jotogulo sortho takbe sotik hole 1st co na hole 2ndco
        //   =| OR   ....jekuno ekta holeai 1st condition hobe
        //   =! NOT  ....        
         
        // let tem =  10;
        // if(tem <= 0 && tem > 30)
        // {
        //   console.log('weather is Bad!')
        // }

        // else{
        //   console.log('weather is very bad')
        // }





        // =| OR............jekuno ekta sorto tik hoileai hobe..........
        // let tem =  30;
        // if(tem <= 0 || tem > 30)
        // {
        //   console.log('weather is Bad!')
        // }

        // else{
        //   console.log('weather is very bad')
        // }





        //=! NOT .............false to true and true t false use !..............
      //  const isStudent = true; 
      //  if(!isStudent) //se chatro na
      //  {
      //   console.log('you are a student')
      //  }

      //  else{
      //   console.log('you are NOt a student')
      //  }


      /*

           = assignment operator
           == comparison operator(compare if values & values are equal
           === strict equality operator(compare if values & datatype are equal)
        /  != inequality operator
        /  !== strict inequality operator


      */


    //  == comparison operator(compare if values & values are equal

    // const PI = 3.14;
    // if(PI == 3.14 )//== diye maan gulo tulona korse
    //   {
    //   console.log('its PI')
    // }
    // else{
    //   console.log('its Not PI')
    // }

    
    
    // const PI = 3.14;
    // if(PI !== 3.14) // exclamatory== pi ki point er soman na =soman tai else hoice
    // {
    //   console.log('Its NOT PI')
    // }

    // else{
    //   console.log('Its  PI')
    // }


    // while Loop = Repeat some code with some condition is true

    //let userName = "";

    // while (userName === "" || userName == null) //jotokkon porjonto sorto puron na hobe totokkon chobe
     // {
        //jotokkon porjonto name likbo na totokkon window close hobe na
     // userName = window.prompt('enter your name') //uporer sorto ses hobe name likar maddome
//}

   // console.log(`Hello ${userName}`) //$ use korle `` chinno ti dite hobe 
    //console ye hello + userName hobe je name window te promt kora hobe


    //do.......While loop math >

    // let userName = "";
    
    // do {
    //   userName = window.prompt('enter your name');
    // }

    // while(userName == "" || userName == null)

    //   console.log(`Hello ${userName}`);

      // convert sort 

      // let userName;

      // while(userName = "" || userName == null)
      // {
      //   userName = window.prompt('enter your name')
      // }

      // console.log(`Hello ${userName}`);


      //while loop math -02 

      // let loggedIn = false;
      // let userName;
      // let passWord;

      // while(!loggedIn ) // যতক্ষণ পর্যন্ত loggedIn false থাকবে, লুপটি চলবে
      // {
      //   userName = window.prompt('enter your userName');
      //   passWord = window.prompt('enter your password');

      //   if(userName === "myUserName" && passWord === "myPassword") 
           //ami name o password save korechi aigula diye login korte hobe
      //   {
      //     loggedIn = true; // aikane tambe 

      //     console.log('you are loggedIn!')
      //   }

      //   else{
      //     console.log('invalid cradentions!Please try again')
      //   }

      // }

      //while লুপ আগে condition দেখে তারপর চালায়।

      //do...while লুপ একবার হলেও চলে, condition true বা false যাই হোক না কেন।
      //👉 কারণ condition loop এর শেষে চেক হয়, শুরুতে না।
      //do...while loop math-02

      //let loggedIn = true; //false ai hobe kintu 
                           // do..while er ketre false true jeai
                           //  howk na keno ekbar loop cholbe
     // let userName;
      //let passWord;

     
    // do {
    //     userName = window.prompt('enter your userName');
    //     passWord = window.prompt('enter your password');

    //     if(userName === "myUserName" && passWord === "myPassword") 
           //ami name o password save korechi aigula diye login korte hobe
    //     {
    //       loggedIn = true; // aikane tambe 

    //       console.log('you are loggedIn!')
    //     }

    //     else{
    //       console.log('invalid cradentions!Please try again')
    //     }

    //    }  while(!loggedIn ) // যতক্ষণ পর্যন্ত loggedIn false থাকবে, লুপটি চলবে

      // দুটো লুপের কাজ প্রায় একই,
      //শুধু do...while একবার অতিরিক্ত execute হয়, 
      // তারপর condition দেখে আবার চালাবে কিনা ঠিক করে।

      //tai logged ye true(aikane false hbe) deoya sorteo ekbar loop choleche


      
      //for loop = repeat some code a limited amount of time
      //         =  কোনো কোড নির্দিষ্ট সংখ্যক বার চালানো

      //math-01

     // for(let i = 0  ; i <=30;  i+=1)//i+=aikane ja deoya hobe ta 
      //                               sorte deoaya numbe yer songge gun hobe
      // {
      //   console.log(i);
      // }

      //math-02

      // for(let i = 10 ; i > 0; i-- )
      // {
      //   console.log(i) //count number 10 to 1 and end
      // }

      // console.log('Happy new year') // end er pre bairer console kaj korbe
      
    
      //for loop..... math-03......continue = display none---(continue je number
      //                                        ta hobe ta ar dekha jabe na)

      // for(let i = 0; i <=20; i++){

      //   if( i == 13){
      //         continue; //13 vanish hoye jabe
      //   }

      //   console.log(i)
      // }

      

      //for loop......math-04....Break = stop loop
      
      // for(let i = 0 ; i <= 10; i ++) {

      //   if ( i == 5){
      //      break;//0---4 = 5 > stop
      //   }

      //   console.log(i);

      // }


      
      
// function =  A section is resuable code.
//             Declare code once,use it whenever you want,
//             Call the function to excute that code. 



//function er ketre jokon function er name dore daka hobe
//  tokon er bitorer console.log() er bitorer ongsho output hobe

  // function happyBirthday(){
  //   console.log('Happy Birthday to You!');// ; semicolon dite hobe
  //   console.log('Happy Birthday to You!');
  //   console.log('Happy Birthday to You!');
  //   console.log('Happy Birthday to You!');
  //   console.log('Happy Birthday to You!');
  //   console.log('Happy Birthday to You!');
  //   console.log('Happy Birthday to You!');
  //   console.log('Happy Birthday to You!');
  // }

  //function er name happyBirthday> {} er bahire rakbo tokon bitorer  console.log() out put kaj korbe
  // happyBirthday();  function name first breacket semiculon dite hoi 'mustly'.
  
  //happyBirthday();// (1) jotobar ami call dibo totobar bitorer ongsho output hobe
  //happyBirthday(); // (2)
  //happyBirthday(); // (3)
  //happyBirthday(); // (4)


  // function math-two


  // function myBirthDay ( userName, age)//username,age is parameter 
  
  // {

  //   console.log(`Happy birthday ${userName}!`);
  //   console.log(`you are ${age} year old!`);
  
  // }

  //call the function

//ekoi variable name e jotobar ami value nibo totho bar ta sho korbe

  // myBirthDay( 'Golam Mostofa', 24 );//parameter value
  
  // myBirthDay('sojib', 23);

  // myBirthDay('mustakim', 22);

  // myBirthDay('sopon', 24);



  // function math-03

//   function add(x, y){
//     let result = x + y ;
//     return result;
//   }

//  console.log(add(5,5)); //process one

//  let ans = add(3,6);//process two
//  console.log(ans);



// function substrict (x,y){
//   let result = x - y;
//   return result;
// }

//  console.log(substrict(10, 5));



//  function multiple (x , y){
//    let result = x * y;
//    return result;
//  }

// console.log(multiple (4,4));



// function division (x, y){
//   let result = x / y;
//   return result; 
// }

// console.log(division(10,5))


//function isEven number mathod

// function isEven (number){

// if (number % 2 === 0)//এটা modulus operator, মানে এটা ভাগশেষ (remainder) বের করে।
//   {
//   return true;
// }
// else{
//   return false
// }

// }

// console.log(isEven(10));


//to convert easy

// function isEven(number){

//   return number % 2 === 0 ? true : false;

// }
// console.log(isEven(10));



// email valid function


// function isValidEmail (email){

//   if( email.includes('@gmail.') ){
//     return true;
//   }

//   else{
//     return false;
//   }

// }

// console.log(isValidEmail('mohammadmostofa.com'))
// console.log(isValidEmail('mohammadmostofa@gmail.com'))



//sort email function

// function isValidEmail(email){

//   return email.includes('@gmail')  ? true : false;
// }

// console.log(isValidEmail('mostofa.com'))
// console.log(isValidEmail('mostofa@gmail.com'))



// variable scope = where a variable is recognized 

//                  and accessible (local or global)

//একটা ভেরিয়েবল কোথায় থেকে “চেনা যায়” (recognized)
//  এবং কোথায় থেকে “ব্যবহার করা যায়” (accessible) —
//এই ধারণাটাকেই বলে Scope (স্কোপ)

//global variable..jeta deha jai sohojeai
 let x = 1; //x global variable 


 // ekta function er bitor ki ase onno function ta jane na
 // tai binno function ye variable name ekoi takle kuno problem hobe na
 // function er sob kaj kore function name call er maddo me


 function localVariabe (){
  let x = 1; // x is a localvariable 
  console.log(x);
 }

 //localVariabe(x);

 function localVariabe1 (){
  let x = 10; // x is a localvariable 
  console.log(x);
 }

 //localVariabe1(x);

 // function guloke ekekta gor ba bari bola jai.
 //karon gorer bitore ki ase sudu gorer malik jane
 //  malik jokon call  ba bolbe tokon gor somporke jana jai
 //alada alada gore ekoi doroner jinis takteai pare tate kuno problem hobe na
 

 //external variable selelcted

//jodi function yer  bitorer ongshe varible na neoya hoi
//  bahirteke varible select korle pottekta function bahirer variable ke 
// tar bitorer varible hisebe nibe o kaj korbe
// a current er motho bableo hobe
//potekta gorer malik nirdisto ekta bahirer songjuger maddome current nij nij 
// gore suply kore


//let m = 3;

function function1(){
//console.log(m)
}
//call function 1
function1();

function function2(){
//console.log(m)
}
//call function 2
function2();



//Array = a variable like structure that can hold more than 1 value.
//মানে, এটা এমন একটা structure (গঠন) যেটা একটা variable-এর মতো কাজ করে,
//  কিন্তু একটার বেশি মান (value) ধরে রাখতে পারে।

//example

//let fruits = ['apple', 'mango', 'banana',]
//console.log(fruits);

//ami jodi potektar position jante chai tahole 
//console.log(fruits[0]); //index 0 = apple
//console.log(fruits[1]); //index 1 = mango
//console.log(fruits[2]); //index 0 = banana


 //math one of Array

 //kibabe ami element change korbo abr aitar poriborte arrekta add korbo

 //let names = ['korim', 'rohim', 'jobbar', 'oporupa']

 // names [0] = 'Jolil khan';// 0 er poriborte 1,2,3,4 bosale seai gor dokol korbe
 // console.log(names[0]);//see result

  //console.log(names);
  //console.log(names[0]);
  //console.log(names[1]);
  //console.log(names[2]);
  //console.log(names[3]);

  //Push() = notun element add kora pison dik diye

  //names.push('halim')
  //names.push('balim', 'salim')
  //names.push('halim', 'molim', 'kalim', 'talim', 'charim')
  //console.log(names);//see all element 

  //pop = add kora element ke remove kora 

  //names.pop(); //aibabe pop() likte hobe jotota picon teke romve korte chao totobar
  //names.pop();
  //names.pop();
  //names.pop();//total 4ta pop deoyar 4ta name remove hoice picon dik teke

  //console.log(names)


  //.unshift() =  mane holo samon tete element add kora
  
  //let students = ['mostofa', 'golam Mostofa', 'jubayed','mondol']//4
  
  //  students.unshift('korim','rohim', 'joinal');//4+3 = 7 names
 // console.log(students);

  //shift() = samner dik teke remove kora 

   //  students.shift();
   //  students.shift();//remove 2 names
   //  console.log(students);



   //Length(total element),indexOf(element position),

   let fruitNames = ['kola','jambura', 'komla','apel']
   console.log(fruitNames);
   console.log(fruitNames.length); //4
     
   //indexOf() 
      let myFavourite = fruitNames.indexOf( 'jambura' );// jodi indexOf er bitorer name ti
      //                                             arrey er bitore na take tahole -1 hobe
      console.log(myFavourite);

      

















   












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































