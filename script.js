
//login

//Variabler för användarnamn och lösenord
let namn = "test";
let lösenord = "1234";
let wrapper = document.getElementById("wrapper");       //Hämtar id för div wrapper
//Hämtar localstorage om användaren är inloggad eller ej
let inloggad = localStorage.getItem("aktiv");


//Hämtar button och div

let myBtn = document.getElementById("login");
let div1 = document.getElementById("div1");

//kollar om användaren är inloggad, genom att kolla om inloggad är true eller inte. 
//Om inte true så kommer loggedIn() funktionen inte att kallas, och man kommer till huvudsidan.
if (inloggad === "true") {
    loggedIn();
} else {
    console.log("not logged in"); //Skriver ut till konsolen om man är inloggad
}


//Eventlistener för logga in knapp 
myBtn.addEventListener("click", loggaIn)

//funktion för att logga in
//hämtar value från input-element.
function loggaIn() {
    let userId = document.getElementById("usrName").value;
    let userPass = document.getElementById("password").value;
    if (userId === namn && userPass === lösenord) {     //Kollar om value från input matchar de hårdkodade variablerna
        localStorage.setItem("aktiv", true);            //Om de matchar, sätt true till localstorage
        inloggad = localStorage.getItem("aktiv");       //Lägger in localstorage i variabel
        loggedIn();                                     //Kallar på fukntionen loggedIn()
        console.log("funkar");                          //Skriver ut till konsol att det fungerar.
    } else  { //Om de inte matchar
        console.log("Fel");                             //Skriver ut fel till konsolen
        loggedIn();                                     //kallar på loggedIn() funktoionen
        localStorage.setItem("aktiv", false);           //Sätter localstorage till false
    }
        
}

//LoggedIn funktionen
function loggedIn() {
    div1.style.display = "none";            //tar bort nuvarande sida
    inloggad = localStorage.getItem("aktiv"); //hämtar localstorage till inloggad
 

    if (inloggad === "true") {                      //om inloggad = true - så skapas inlogg-sidan.

        let div2 = document.createElement("div2");  //Skapar element för div
        div2.setAttribute("id", "div2");            //Sätter id och id-namn
        let myBtn2 = document.createElement("button");  //Skapar knapp
        myBtn2.setAttribute("id", "myBtn2");        //skapar id för knapp
        wrapper.appendChild(div2);        //lägger till div till listan
        let para = document.createElement("h1");  //Skapar h1 element
        div2.appendChild(para).innerText = "Välkommen!";    //lägger till h1 till div tag, lägger till text också
        div2.appendChild(myBtn2).innerText = "Logga Ut";    //Lägger till logga ut knapp till div element
        let logBtn = document.getElementById("myBtn2");     //Hämtar den nya knapp id
        logBtn.addEventListener("click", logOut);           //Lägger till en eventlistener för nya knappen och kallar på en funktion
        } 
        
        else {//om inlogg = false så kommer en annan sida skapas
        let div3 = document.createElement("div3");  //skapar div element
        div3.setAttribute("id", "div3");            //Sätter id
        let myBtn2 = document.createElement("button"); //Skapar knapp
        myBtn2.setAttribute("id", "myBtn3");        //sätter id för knapp
        wrapper.appendChild(div3);            //lägger till div2 till sidan

        let para = document.createElement("h1");    //Skapar h1 element
        div3.appendChild(para).innerText = "Fel lösen!";    //lägger till h1 med text
        div3.appendChild(myBtn2).innerText = "Testa igen";  //lägger till knapp med text
        let logBtn = document.getElementById("myBtn3");     //hämtar id för knapp
        logBtn.addEventListener("click", logOut);           //lägger till eventlistener för knapp och kallar på funktion.
        }

}

//Funktion för att logga ut och rensa användare
function logOut() {
    wrapper = document.getElementById("wrapper");       //kollar om wrapper har innehåll , och medans den har det så raderar den allt inom wrapper
        while (wrapper.hasChildNodes()) {
            wrapper.removeChild(wrapper.firstChild)
        }
    div1.style.display = "inline-block";            //ställer tillbaka förstasidan
    localStorage.clear();                           //Rensar localstorage
}       
