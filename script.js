
//login

//Variabler för användarnamn och lösenord
let namn = "test";
let lösenord = "1234";

let inloggad = localStorage.getItem("aktiv");






let myBtn = document.getElementById("login");
let div1 = document.getElementById("div1");
if (inloggad === "true") {
    loggedIn();
} else {
    console.log("not logged in");
}

myBtn.addEventListener("click", loggaIn)
function loggaIn() {
    let userId = document.getElementById("usrName").value;
    let userPass = document.getElementById("password").value;
    if (userId === namn && userPass === lösenord) {
        localStorage.setItem("aktiv", true);
        inloggad = localStorage.getItem("aktiv");
        loggedIn();
        console.log("funkar");
    } else if (userId !== namn && userPass !== lösenord)
        localStorage.setItem("aktiv", false);
        console.log("Wrong password");
        
}

function loggedIn() {
    div1.style.display = "none";

    //Addar den nya sidan
    let div2 = document.createElement("div2");
    div2.setAttribute("id", "div2");
    let myBtn2 = document.createElement("button");
    myBtn2.setAttribute("id", "myBtn2");
    document.body.appendChild(div2);
    div2.appendChild(myBtn2).innerText = "Logga Ut";
}

/*
function loggaIn() {
    
    if (aktiv === "true") {
        console.log("fungerar");
    } else if  {
       
    }  else {
        console.log("Fel lösenord");
    }
    console.log(userPass);
 } 
*/

