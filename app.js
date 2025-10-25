// Question 01
const headingone = document.querySelector("#h-one");
headingone.innerHTML = "How to select an html element in javascript"
const paraone = document.querySelector("#p-one");
paraone.innerHTML = "Definition Calling (or selecting) a heading or paragraph in JavaScript means accessing an HTML element like &quoth1, h2, or p&quot; from your web page so you can read, change, or manipulate it using JavaScript."

// Question 02
const headingswitch = document.querySelector("#switch");
const btnswitch = document.querySelector("#btn-swtich");

function ChangeState() {
    if (headingswitch.innerHTML === "On") {
        headingswitch.innerHTML = "Off"
        btnswitch.innerHTML = "Turn On"
    } else {
        headingswitch.innerHTML = "On"
        btnswitch.innerHTML = "Turn Off"
    }
}

// Question 03


const body = document.querySelector("body")
function ChangeColor(color) {
    console.log(color);
    body.style.backgroundColor = color
}

// Question 04
const welcomeHeading = document.querySelector("#welcome");
function welcome() {
    welcomeHeading.style.color = "red"
}


function showNumber() {
      const num = document.getElementById("num1").value;
      document.getElementById("output").textContent = num;
    }
// Question 06
const button = document.querySelector(".submit-btn");
        button.addEventListener("click", function() {
        console.log("Button Clicked");
    });
// Question 07
function addNumbers() {
      const num1 = Number(document.getElementById("first").value);
      const num2 = Number(document.getElementById("second").value);
      const result = num1 + num2;
      document.getElementById("sum").textContent = result;
    }

// Question 08
function updateText() {
     
      const para = document.querySelector(".description");

      para.textContent = "Updated successfully";
    }
    // Question 09
    function styleBox() {
      const box = document.getElementById("box");
      box.style.width = "200px";
      box.style.backgroundColor = "green";
    }
// Question 10
    function showEmail() {
      const emailValue = document.getElementById("email").value;
      console.log(emailValue);
    }
// Question 11
 function changeFontSize() {
      const parag = document.querySelector("#p-changesize");
      parag.style.fontSize = "32px";
    }
// Question 12
function showGreeting() {
      const name = document.getElementById("fullName").value;
      document.getElementById("greeting").textContent = "Salam Mr/Ms, " + name;
    }
// Question 13
function changeImage() {
      const image = document.getElementById("profilePic");
      image.src = "src/image/smit02.jfif";
    }
// Question 14
    function changeColor() {
    const elements = document.querySelectorAll(".highlight");
    elements.forEach(el => {
    el.style.color = "red";
         });
    }
    // Question 15
    function checkAgreement() {
      
      const checkbox = document.getElementById("agree");
      const status = document.getElementById("status");

      if (checkbox.checked) {
        status.textContent = "Agreed";
      } else {
        status.textContent = "Not Agreed";
      }
    }