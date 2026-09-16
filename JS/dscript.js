let like = document.querySelectorAll(".count")
let buy = document.querySelectorAll(".hard")
let btn = document.querySelectorAll(".btn")
let card_id = document.getElementById("id")
const cart_badge = document.querySelector(".cart-badge")


let count = 0;

let getCount = Number(localStorage.getItem("count"));

cart_badge.textContent = getCount;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) =>{
        const id = e.target.getAttribute("data-id")
        getCount++;
        localStorage.setItem("count", getCount);
        cart_badge.textContent = getCount;
    })
}

cart_badge.textContent(getCount)











// const data = [
//     {
//         id: 1,
//         title: "Atomic Habits",
//         description: "A guide to building good habits and breaking bad ones.",
//         price: 120000,
//         salePrice: 95000,
//         rating: 5,
//         image: "https://covers.openlibrary.org/b/id/10594765-L.jpg"
//     },
//     {
//         id: 2,
//         title: "Rich Dad Poor Dad",
//         description: "Learn how money works and how to grow wealth.",
//         price: 100000,
//         salePrice: 80000,
//         rating: 4,
//         image: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
//     },
//     {
//         id: 3,
//         title: "The Psychology of Money",
//         description: "Timeless lessons on wealth, greed, and happiness.",
//         price: 110000,
//         salePrice: 87000,
//         rating: 5,
//         image: "https://covers.openlibrary.org/b/id/10414631-L.jpg"
//     },
//     {
//         id: 4,
//         title: "Deep Work",
//         description: "Focus deeply and achieve success in a distracted world.",
//         price: 90000,
//         salePrice: 75000,
//         rating: 4,
//         image: "https://covers.openlibrary.org/b/id/8370226-L.jpg"
//     },
//     {
//         id: 5,
//         title: "Clean Code",
//         description: "A handbook of agile software craftsmanship.",
//         price: 150000,
//         salePrice: 120000,
//         rating: 5,
//         image: "https://covers.openlibrary.org/b/id/9611990-L.jpg"
//     },
//     {
//         id: 6,
//         title: "Think and Grow Rich",
//         description: "Classic book on success and personal development.",
//         price: 95000,
//         salePrice: 70000,
//         rating: 4,
//         image: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
//     },
//     {
//         id: 7,
//         title: "Zero to One",
//         description: "Build the future by creating something new.",
//         price: 130000,
//         salePrice: 99000,
//         rating: 5,
//         image: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
//     },
//     {
//         id: 8,
//         title: "Start with Why",
//         description: "Inspire people and lead with purpose.",
//         price: 105000,
//         salePrice: 85000,
//         rating: 4,
//         image: "https://covers.openlibrary.org/b/id/7269256-L.jpg"
//     },
//     {
//         id: 9,
//         title: "The Lean Startup",
//         description: "How to build a successful startup step by step.",
//         price: 115000,
//         salePrice: 90000,
//         rating: 5,
//         image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
//     },
//     {
//         id: 10,
//         title: "Hooked",
//         description: "How to build habit-forming products.",
//         price: 98000,
//         salePrice: 76000,
//         rating: 4,
//         image: "https://covers.openlibrary.org/b/id/8375041-L.jpg"
//     },
//     {
//         id: 11,
//         title: "Rework",
//         description: "A new approach to business and productivity.",
//         price: 87000,
//         salePrice: 69000,
//         rating: 4,
//         image: "https://covers.openlibrary.org/b/id/8235116-L.jpg"
//     },
//     {
//         id: 12,
//         title: "The 4-Hour Workweek",
//         description: "Escape the 9-5 and live anywhere.",
//         price: 125000,
//         salePrice: 95000,
//         rating: 5,
//         image: "https://covers.openlibrary.org/b/id/8168696-L.jpg"
//     },
//     {
//         id: 13,
//         title: "Crushing It!",
//         description: "How to build a personal brand online.",
//         price: 110000,
//         salePrice: 88000,
//         rating: 4,
//         image: "https://covers.openlibrary.org/b/id/8775116-L.jpg"
//     },
//     {
//         id: 14,
//         title: "Make Time",
//         description: "Focus on what matters every day.",
//         price: 95000,
//         salePrice: 72000,
//         rating: 4,
//         image: "https://covers.openlibrary.org/b/id/8231991-L.jpg"
//     },
//     {
//         id: 15,
//         title: "Essentialism",
//         description: "Do less, but better.",
//         price: 99000,
//         salePrice: 78000,
//         rating: 5,
//         image: "https://covers.openlibrary.org/b/id/8235112-L.jpg"
//     }
// ];


// function showBooks() {

//     cards.innerHTML = "";

//     data.forEach((item) => {

//         cards.innerHTML += `
//             <div class="card">

//                 <img src="${item.image}" alt="${item.title}">

//                 <div class="card-content">

//                     <h3>${item.title}</h3>

//                     <p class="description">
//                         ${item.description}
//                     </p>

//                     <div class="rating">
//                         <span>${"★".repeat(item.rating)}</span>
//                         <p>${item.rating}</p>
//                     </div>

//                     <div class="price">
//                         <strong>
//                             ${item.salePrice.toLocaleString()} so'm
//                         </strong>

//                         <del>
//                             ${item.price.toLocaleString()} so'm
//                         </del>
//                     </div>

//                     <button
//                         data-id="${item.id}"
//                         class="buy-btn"
//                     >
//                         Savatga qo'shish
//                     </button>

//                 </div>

//             </div>
//         `;

//     });

// }


// showBooks();


// function getCart() {

//     const cart = localStorage.getItem("cart");

//     if (cart) {
//         return JSON.parse(cart);
//     }

//     return [];
// }


// function updateCartCount() {

//     const cart = getCart();

//     let totalCount = 0;

//     cart.forEach((item) => {
//         totalCount += item.quantity;
//     });

//     cartCount.textContent = totalCount;
// }


// function addToCart(id) {

//     let cart = getCart();

//     const book = data.find((item) => item.id === id);

//     const existingBook = cart.find((item) => item.id === id);


//     if (existingBook) {

//         existingBook.quantity++;

//     } else {

//         cart.push({
//             ...book,
//             quantity: 1
//         });

//     }


//     localStorage.setItem("cart", JSON.stringify(cart));

//     updateCartCount();
// }


// const buyButtons = document.querySelectorAll(".buy-btn");


// buyButtons.forEach((button) => {

//     button.addEventListener("click", () => {

//         const id = Number(button.getAttribute("data-id"));

//         addToCart(id);

//         const oldText = button.textContent;

//         button.textContent = "✓ Savatga qo'shildi";

//         setTimeout(() => {
//             button.textContent = oldText;
//         }, 1000);

//     });

// });


// updateCartCount();












