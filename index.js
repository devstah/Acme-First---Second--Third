let backgroundColor = "red";
let div1 = document.getElementById("first");
let div2 = document.getElementById("second");
let div3 = document.getElementById("third");
let firstRight = document.getElementById("first-right");
let secondLeft = document.getElementById("second-left");
let secondRight = document.getElementById("second-right");
let thirdLeft = document.getElementById("third-left");

let isColored = false;

const slots = ["first", "second", "third"];
const users = [
  {id: 1, name: "moe", slot: "first"},
  {id: 2, name: "larry", slot: "second"},
  {id: 3, name: "curly", slot: "third"},
  {id: 4, name: "lucy", slot: "third", selected: true}
];

/*ADD USER function here */
function addUser(){
 /*loop over the users object and create an element for each one. check the slot, and append to that slot */
 for (let i = 0 ;i < users.length; i++){
   let currentObj = users[i];
   let ul = document.createElement("ul");
   let li = document.createElement("li");
   li.innerHTML = currentObj.name;
   li.id = currentObj.id;
   ul.appendChild(li);

   if (currentObj.slot === "first"){
     div1.appendChild(ul);
   }

   if (currentObj.slot === "second"){
    div2.appendChild(ul);
  }

  if (currentObj.slot === "third"){
    div3.appendChild(ul);
  }
 }
}

/*first addUser call here */

addUser();
/*add user clicks here  */
let MoeClick = document.getElementById("1");
let LarryClick = document.getElementById("2");
let CurlyClick = document.getElementById("3");
let LucyClick = document.getElementById("4");

function execute (event){
//updating selection flag and allowing a toggle
  let eventTag = event.target;//of the click event
  let eventTagID = Number(eventTag.id);

  console.log(eventTag);
  console.log(eventTagID);

  for (let i = 0; i < users.length; i++){
    let currentObj = users[i];
    let currentID = currentObj.id;
    if (currentID === eventTagID){
      //add a selected property!! check the users slot and update
      currentObj["selected"] = true;
    }else{
      currentObj["selected"] = false;
    }
  }

  if (isColored === true){
    eventTag.className = " ";
    isColored = false;
  } else{ /*if isColored is false - then change the color */
    eventTag.className = backgroundColor;
    isColored = true; /*update isColored */
  }
}


function moveRight(){
  for (let i = 0; i < users.length; i++){
    let currentObj = users[i];
    if (currentObj.selected === true){

      if (currentObj.slot === "first"){
        currentObj.slot = "second";
      }

      else if(currentObj.slot === "second"){
        currentObj.slot = "third";
      }

    }
  }
}

function moveLeft(){
    for (let i = 0; i < users.length; i++){
      let currentObj = users[i];
      if (currentObj.selected === true){
        if (currentObj.slot === "third"){
          currentObj.slot = "second";
        }

        else if (currentObj.slot === "second"){
          currentObj.slot = "first";
        }

      }
    }
  }


function clear(){
  //loop through users object and remove all children ...
 const array1 = Array.from(div1.childNodes);
 const array2 = Array.from(div2.childNodes);
 const array3 = Array.from(div3.childNodes);

 const ulElem1 = array1[7];
 const ulElem2 = array2[7];
 const ulElem3 = array3[7];
 const ulElem3_2 = array3[8];

 div1.removeChild(ulElem1);
 div2.removeChild(ulElem2);
 div3.removeChild(ulElem3);
 div3.removeChild(ulElem3_2);

}

MoeClick.addEventListener("click", execute);
LarryClick.addEventListener("click", execute);
CurlyClick.addEventListener("click", execute);
LucyClick.addEventListener("click", execute);


firstRight.addEventListener("click", moveRight);
firstRight.addEventListener("click", clear);
firstRight.addEventListener("click", addUser);

secondRight.addEventListener("click", moveRight);
secondRight.addEventListener("click", clear);
secondRight.addEventListener("click", addUser);

secondLeft.addEventListener("click", moveLeft);
secondLeft.addEventListener("click", clear);
secondLeft.addEventListener("click", addUser);

thirdLeft.addEventListener("click", moveLeft);
thirdLeft.addEventListener("click", clear);
thirdLeft.addEventListener("click", addUser);


