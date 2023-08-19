console.log("hello beautiful world")

document.addEventListener('DOMContentLoaded', function () {
const nextBtn = document.querySelectorAll("#nextBtn");
const goBack = document.querySelectorAll("#goback");
const rightDesign = document.querySelector(".right-design");



nextBtn.forEach(btn => {
    btn.addEventListener("click", function(event){

event.preventDefault();


let isValid = validateForm();
if(isValid){
    incrementQuiz();
}

});


});

//FORM VAIDATION CODE 

const nameFl = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const errMsg1 = document.getElementById("msg1");
const errMsg2 = document.getElementById("msg2");
const errMsg3 = document.getElementById("msg3");

function validateForm(){
    console.log('hello world222');
let checkValid = true;

    if (nameFl.value.trim() == ""  ) {
        errMsg1.classList.add("msg-show");
        errMsg1.innerHTML = "This field Can't be Empty";
        checkValid = false;
    }else{
        errMsg1.classList.remove("msg-show")
    }
    if(email.value.trim() === ""){
        errMsg2.classList.add("msg-show");
        errMsg2.innerHTML = "Not a Valid Email ";
        checkValid = false;
    }else{
        errMsg2.classList.remove("msg-show")
    }
    if(phone.value.length <= 10){
        errMsg3.classList.add("msg-show");
        errMsg3.innerHTML ="Not a proper Number";
        checkValid = false;
    }else{
        errMsg3.classList.remove("msg-show");
    }

    if(checkValid){
        incrementQuiz();
        increasingSteps(1);

    }
}


let rightContainer = document.querySelectorAll(".right-container");
let incrementCounter = 0;

function incrementQuiz(){
    incrementCounter++;
   
   nextForm();
}


function nextForm(){
    rightContainer.forEach(container => {
        container.style.transform = `translateX(-${incrementCounter * 100}%)`;
        

    }) ;
    
}

goBack.forEach(backBtn => {
    backBtn.addEventListener("click", () => {
     incrementCounter--;

     nextForm(); 
    increasingSteps(-1);
    });
})

//INCREASING NUMBERS ON FORM STEPS 

let numbers = document.querySelectorAll(".num");
let counterSteps = 0;

function increasingSteps(stepChange){
   let steps = counterSteps + stepChange;
   if(steps >= 0 && steps < numbers.length){
         numbers[counterSteps].style.backgroundColor = "";
         numbers[steps].style.backgroundColor = "black";
        

         counterSteps = steps;

        }
}


const toggleContainer = document.querySelector(".toggle-container");
const arcade = document.getElementById("arcade");
const advanced = document.getElementById("advanced");
const pro = document.getElementById("pro");

 
let  innerToggle = document.querySelector(".inner-toggle");

function changePrice(){
   console.log('hello');
  

     if(innerToggle.style.left === "0px"){
       innerToggle.style.left = '30px';
      arcade.innerHTML = "$19/year";
      advanced.innerHTML = "$20/year";
      pro.innerHTML = "$30/year";
   }else{
      console.log('hell fuck');
      innerToggle.style.left = '0px';
      arcade.innerHTML = "$9/mo";
      advanced.innerHTML = "$12/mo";
      pro.innerHTML = "$15/mo";
   }

}

innerToggle.addEventListener("click", changePrice);


document.addEventListener('click', function (event) {
    const toggleContainer = document.querySelector(".toggle-container");
    if (event.target.closest('.toggle-container')) {
      // The click event occurred inside the toggle container
      changePrice();
    }
  });

const billingBoxes = document.querySelectorAll(".billing-price");
let billingName = document.getElementById("billing-name");
let mainPrice = document.querySelector("#main-price");
let dataPrice = document.querySelectorAll(".data-price");

function accessData(price) {
    dataPrice.forEach(datas => {
        let additionOfData = datas.dataset.price;
        mainPrice.innerHTML = `$ ${additionOfData}\mo`;
    });
}



billingBoxes.forEach(box => {
box.addEventListener("click",gettingPrice);

function gettingPrice(){
    
   let getId = box.getAttribute("id");
   let headingElem = box.querySelector("h5");
   const headingText = headingElem.innerHTML;
  
        let headingId = box.querySelector("h3");
        billingName.innerHTML = headingId.innerHTML;
        mainPrice.innerHTML = headingText;
        console.log(parseFloat(headingText.innerHTML));
        //addingPrices()
}

})


let services = document.querySelectorAll('.services-box');
let retrivePlan = document.querySelectorAll(".retrive-plan");
let offers = document.querySelectorAll('label[for="checkbox"]');
let checkboxInput = document.querySelectorAll("input[type=checkbox]").value;

let finishing = document.querySelector(".finishing-up");

retrivePlan.forEach((plans,index) => {
    plans.addEventListener("click",() => {
      
        let arrays = plans.value;
        console.log(arrays);
        let labelValue = offers[index].textContent;
        console.log(labelValue);

         let billBox = document.querySelector(".bill-box");
         let createDiv =document.createElement("div");
         createDiv.classList.add("bill-box");
         let create = document.createElement("h4");
         let createHeadtwo = document.createElement("h5");
         createHeadtwo.classList.add("price-num");
         createHeadtwo.innerText = arrays;
         
         create.innerText = labelValue;
      createDiv.append(create);
      createDiv.append(createHeadtwo);
        finishing.append(createDiv);
          
        addingPrices();
    })

});





function addingPrices(){
    let totalPrice = document.querySelector("#total");
    let pricesValue = document.querySelectorAll(".price-num");
    let sumofPlan = 0; 

    pricesValue.forEach((values,data) => {
        let parseValue = parseFloat(values.innerHTML);
         
        if(!isNaN(parseValue)){
            sumofPlan +=parseValue ;
        }
    });

   
    totalPrice.innerHTML = `$ ${sumofPlan}`;

}


});
