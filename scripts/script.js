
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

function redirectAbout(){
    window.location.href = "../pages/about.html";
}

function redirectProducts(){
    window.location.href = "../pages/products.html";
}

function redirectBilling(){
    window.location.href = "../pages/billing.html";
}

function purchase(){
    alert("Purchase has Been Completed");
    window.location.href = "../index.html";
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

function addToCart(idName, price){
    let main = document.getElementById(idName);
    let image = main.querySelector('img');
    let paragraphs = main.querySelectorAll('p');

    let cart = document.getElementById("cart-containers");

    let new_product_div = document.createElement("div");
    new_product_div.className = "product-item";

    let new_image = document.createElement("img");
    new_image.src = image.src;
    new_image.className = "image-item"

    let text_1 = paragraphs[0];
    let text_2 = paragraphs[1];

    let firstParagraph = document.createElement('p');
    let secondParagraph = document.createElement('p');

    firstParagraph.textContent = text_1.textContent;
    secondParagraph.textContent = text_2.textContent;

    new_product_div.appendChild(new_image);
    new_product_div.appendChild(firstParagraph);
    new_product_div.appendChild(secondParagraph);
    cart.appendChild(new_product_div);   
    
    let initial_value = document.getElementById("total-price");
    initial_value.innerHTML = parseInt(initial_value.innerHTML, 10) + price;
}