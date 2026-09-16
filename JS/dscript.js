let like = document.querySelectorAll(".count")
let buy = document.querySelectorAll(".hard")
let btn = document.querySelectorAll(".btn")
let card_id = document.getElementById("id")
const cart_badge = document.querySelector(".cart-badge")


let count = 0;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) =>{
        const id = e.target.getAttribute("data-id")
        count++;
        cart_badge.textContent = count
    })
    
}












