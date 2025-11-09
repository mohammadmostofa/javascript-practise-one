document.getElementById('dom1');

let dom1 = document.getElementById("dom1");
dom1.innerHTML = "H! iam golam mostofa";

document.getElementsByClassName("class1")

let class1 =  document.getElementsByClassName("class1")[0];
class1.innerHTML = " yes! iam very well"

document.getElementsByName("heading5");

let heading5 = document.getElementsByName("heading5")[0];//include of variable 
heading5.innerHTML = "golam mostofa"

//document.getElementsByTagName

let h1 = document.getElementsByTagName("h1")[0];
  h1.innerHTML = "TagName"




//document.querySelector



//document.querySelectorAll


//onclick event

// function clickMe (){
//   document.write("hi, how are you ?")
// }


function clickMe (){
document.getElementById("demo").innerHTML = Date();

}



//entry childdiv

// document.querySelector(".parentDiv") 

let parentDiv = document.querySelector(".parentDiv") 
  // console.log(parentDiv.firstChild)//first child dile bisoita onek jotil hoye jai
  //seaijonno firstelementChild likte hobe

//to see first child
console.log(parentDiv.firstElementChild)
//to see last child
console.log(parentDiv.lastElementChild)

//to see all child with text

console.log(parentDiv.childNodes)

// to see just child

console.log(parentDiv.children)

