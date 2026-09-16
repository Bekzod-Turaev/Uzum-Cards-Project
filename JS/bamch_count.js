const cart_badge = document.querySelector(".cart-badge");

let getCount = Number(localStorage.getItem("count"));

cart_badge.textContent = getCount;










