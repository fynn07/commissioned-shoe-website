
function redirectLogin(){
    window.location.href = "../pages/login.html"
}

function redirectMartens(){
    window.open("https://www.drmartens.com/", "_blank");
}

function redirectGucci(){
    window.open("https://www.gucci.com/", "_blank");
}

function redirectVersace(){
    window.open("https://www.versace.com/", "_blank");
}

function login(){
    let try_user = document.getElementById("user").value;
    let try_pass = document.getElementById("pass").value;

    if("correct" === try_user && "correct" === try_pass){
        window.location.href ="profile.html";
    }
    else{
        document.getElementById("login-failed").innerHTML = "Login Failed";
    }
}