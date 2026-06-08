const email = document.getElementById("email");
const password = document.getElementById("password");
const buttonLogin = document.getElementById("button-login")

const haloAdmin = document.querySelector(".halo-admin");
const loginDulu = document.querySelector(".login-dulu");
const cardLogin = document.querySelector(".muncul-card");

console.log(email);

buttonLogin.addEventListener("click", function(){
    if(
        email.value == "admin@gmail.com"
        &&
        password.value == "12345"
    ){
        window.location.href = "../Page3/page-3.html";
    }
    else{
        alert("Email atau password salah")
    }
});


setTimeout(function(){
    haloAdmin.classList.add("muncul1")
}, 300);

setTimeout(function(){
    loginDulu.classList.add("muncul1")
}, 700);


setTimeout(function(){
    cardLogin.classList.add("muncul1");
}, 1100);