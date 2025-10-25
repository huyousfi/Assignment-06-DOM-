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




const body = document.querySelector("body")
function ChangeColor(color) {
    console.log(color);
    body.style.backgroundColor = color
}

const welcomeHeading = document.querySelector("#welcome");
function welcome() {
    welcomeHeading.style.color = "red"
}