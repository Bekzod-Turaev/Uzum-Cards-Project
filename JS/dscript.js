let like = document.querySelectorAll(".count")
let buy = document.querySelectorAll(".hard")
let btn = document.querySelectorAll(".btn")
let card_id = document.getElementById("id")
const cart_badge = document.querySelector(".cart-badge")
let cards_data = document.getElementById(".flex")



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

const count2 =document.querySelector("thero_count")

count2.textContent = getCount;

function getClick(id){

    const getData  = JSON.parse( localStorage.getItem("cards_data")) || [];
    const foundData = getData.find(item => item.id === id)
    let totalCount = 0;

    if(getData){
        getData.count += 1;
        let foundCount = getData.filter(item => item.count)
        totalCount+=foundCount.count
    }else{
        let product = cards_data.find (item => item.id === id);
        getData.push(
            {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                count: 1,
            }
            
        )
        
        getData.filter(item=> totalCount+= item.count)
        count2.textContent = totalCount
        
    }

    localStorage.setItem("data", JSON.stringify(getData));
    localStorage.setItem("count", totalCount)


}



// cart_badge.textContent(getCount)



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

// let cards = document.querySelector(".card")

// data.map((item) =>{
//     cards.innerHTML += `
    

//     <div class="card">
//             <div class="card-elements">
//                 <div class="images">
//                     <a href=""><img src="${item.image}"></a>

//                     <div class="text">
//                         <h2>${item.title}</h2>
//                     </div>
//                     <button class="like">
//                         <svg class="hard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                             <path
//                                 d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z">
//                             </path>
//                         </svg>
//                     </button>
//                 </div>
//                 <div class="price">
//                     <div class="card-price">
//                         <h2>35 550</h2>
//                         <svg data-v-a7538dda="" width="16" height="16" viewBox="0 0 16 16" fill="none"
//                             xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
//                             <path
//                                 d="M0.75 5.52988C0.75 4.6898 0.75 4.26976 0.91349 3.9489C1.0573 3.66665 1.28677 3.43718 1.56901 3.29337C1.88988 3.12988 2.30992 3.12988 3.15 3.12988H12.85C13.6901 3.12988 14.1101 3.12988 14.431 3.29337C14.7132 3.43718 14.9427 3.66665 15.0865 3.9489C15.25 4.26976 15.25 4.6898 15.25 5.52988V10.5199C15.25 11.36 15.25 11.78 15.0865 12.1009C14.9427 12.3831 14.7132 12.6126 14.431 12.7564C14.1101 12.9199 13.6901 12.9199 12.85 12.9199H3.15C2.30992 12.9199 1.88988 12.9199 1.56901 12.7564C1.28677 12.6126 1.0573 12.3831 0.91349 12.1009C0.75 11.78 0.75 11.36 0.75 10.5199V5.52988Z"
//                                 fill="#7F4DFF"></path>
//                             <path
//                                 d="M13.5739 3.13633C13.2608 3.22084 13.0243 3.39895 12.8851 3.63488C12.7397 3.39419 12.4729 3.21275 12.1654 3.12988H11.3676C10.752 3.28479 10.4336 3.78455 10.4336 4.37859V6.09981H11.2699V4.50086C11.2699 4.15733 11.4464 3.85615 11.852 3.85615C11.9343 3.85138 12.0178 3.8639 12.0942 3.89432C12.1717 3.92473 12.2421 3.97066 12.3006 4.0303C12.359 4.08994 12.4038 4.1615 12.4336 4.24083C12.4622 4.32015 12.4753 4.40424 12.4694 4.48833V6.1016H13.3056V4.48714C13.3056 4.14361 13.5049 3.85317 13.9057 3.85317C14.3065 3.85317 14.4998 4.15554 14.4998 4.49787V6.09682H15.2494V5.52988C15.2494 4.6898 15.2494 4.26976 15.086 3.9489C14.9421 3.66665 14.7127 3.43718 14.4304 3.29337C14.2188 3.18553 13.964 3.14882 13.5739 3.13633Z"
//                                 fill="white" fill-opacity="0.9"></path>
//                             <path
//                                 d="M0.75 5.17903C0.958129 5.87268 1.63327 6.15472 2.16529 6.15472C2.80233 6.15472 3.64335 5.74976 3.64335 4.71918V3.13693H2.8071L2.80889 4.68876C2.80889 5.15932 2.54882 5.37641 2.1641 5.37641C1.77937 5.37641 1.52229 5.16231 1.52229 4.68876V3.31792C1.26119 3.46263 1.04882 3.68221 0.912938 3.9489C0.773978 4.22162 0.753128 4.56599 0.75 5.17903Z"
//                                 fill="white" fill-opacity="0.9"></path>
//                             <path
//                                 d="M6.72774 3.13693V3.85798L5.0582 5.3794H6.82794V6.10044H3.94697V5.3794L5.61948 3.85798H4.01258V3.13693H6.72774Z"
//                                 fill="white" fill-opacity="0.9"></path>
//                             <path
//                                 d="M8.57862 5.37641C8.96632 5.37641 9.22639 5.15932 9.22639 4.68876L9.22758 3.13693H10.0638V4.71918C10.0638 5.74976 9.21684 6.15472 8.58279 6.15472C7.94874 6.15472 7.10353 5.75036 7.10353 4.71918V3.13693H7.93979V4.68876C7.93979 5.16231 8.19091 5.37641 8.57862 5.37641Z"
//                                 fill="white" fill-opacity="0.9"></path>
//                             <path
//                                 d="M13.5739 3.13633C13.2608 3.22084 13.0243 3.39895 12.8851 3.63488C12.7397 3.39419 12.4729 3.21275 12.1654 3.12988H11.3676C10.752 3.28479 10.4336 3.78455 10.4336 4.37859V6.09981H11.2699V4.50086C11.2699 4.15733 11.4464 3.85615 11.852 3.85615C11.9343 3.85138 12.0178 3.8639 12.0942 3.89432C12.1717 3.92473 12.2421 3.97066 12.3006 4.0303C12.359 4.08994 12.4038 4.1615 12.4336 4.24083C12.4622 4.32015 12.4753 4.40424 12.4694 4.48833V6.10159H13.3056V4.48714C13.3056 4.14361 13.5049 3.85317 13.9057 3.85317C14.3065 3.85317 14.4998 4.15554 14.4998 4.49787V6.09682H15.2494V5.52988C15.2494 4.6898 15.2494 4.26976 15.086 3.9489C14.9421 3.66665 14.7127 3.43718 14.4304 3.29337C14.2188 3.18553 13.964 3.14882 13.5739 3.13633Z"
//                                 fill="url(#paint0_linear_14522_52105)" fill-opacity="0.6"></path>
//                             <path
//                                 d="M0.75 5.17903C0.958129 5.87268 1.63327 6.15472 2.16529 6.15472C2.80233 6.15472 3.64335 5.74976 3.64335 4.71918V3.13693H2.8071L2.80889 4.68876C2.80889 5.15932 2.54882 5.37641 2.1641 5.37641C1.77937 5.37641 1.52229 5.16231 1.52229 4.68876V3.31792C1.26119 3.46263 1.04882 3.68221 0.912938 3.9489C0.773978 4.22162 0.753128 4.56599 0.75 5.17903Z"
//                                 fill="url(#paint1_linear_14522_52105)" fill-opacity="0.6"></path>
//                             <path
//                                 d="M6.72774 3.13693V3.85798L5.0582 5.3794H6.82794V6.10044H3.94697V5.3794L5.61948 3.85798H4.01258V3.13693H6.72774Z"
//                                 fill="url(#paint2_linear_14522_52105)" fill-opacity="0.6"></path>
//                             <path
//                                 d="M8.57862 5.37641C8.96632 5.37641 9.22639 5.15932 9.22639 4.68876L9.22758 3.13693H10.0638V4.71918C10.0638 5.74976 9.21684 6.15472 8.58279 6.15472C7.94874 6.15472 7.10353 5.75036 7.10353 4.71918V3.13693H7.93979V4.68876C7.93979 5.16231 8.19091 5.37641 8.57862 5.37641Z"
//                                 fill="url(#paint3_linear_14522_52105)" fill-opacity="0.6"></path>
//                             <defs>
//                                 <linearGradient id="paint0_linear_14522_52105" x1="0.320316" y1="4.6423" x2="15.2494"
//                                     y2="4.64473" gradientUnits="userSpaceOnUse">
//                                     <stop stop-color="#7000FF"></stop>
//                                     <stop offset="0.42" stop-color="#6800EC" stop-opacity="0.6"></stop>
//                                     <stop offset="1" stop-color="#7000FF" stop-opacity="0"></stop>
//                                 </linearGradient>
//                                 <linearGradient id="paint1_linear_14522_52105" x1="0.320316" y1="4.6423" x2="15.2494"
//                                     y2="4.64473" gradientUnits="userSpaceOnUse">
//                                     <stop stop-color="#7000FF"></stop>
//                                     <stop offset="0.42" stop-color="#6800EC" stop-opacity="0.6"></stop>
//                                     <stop offset="1" stop-color="#7000FF" stop-opacity="0"></stop>
//                                 </linearGradient>
//                                 <linearGradient id="paint2_linear_14522_52105" x1="0.320316" y1="4.6423" x2="15.2494"
//                                     y2="4.64473" gradientUnits="userSpaceOnUse">
//                                     <stop stop-color="#7000FF"></stop>
//                                     <stop offset="0.42" stop-color="#6800EC" stop-opacity="0.6"></stop>
//                                     <stop offset="1" stop-color="#7000FF" stop-opacity="0"></stop>
//                                 </linearGradient>
//                                 <linearGradient id="paint3_linear_14522_52105" x1="0.320316" y1="4.6423" x2="15.2494"
//                                     y2="4.64473" gradientUnits="userSpaceOnUse">
//                                     <stop stop-color="#7000FF"></stop>
//                                     <stop offset="0.42" stop-color="#6800EC" stop-opacity="0.6"></stop>
//                                     <stop offset="1" stop-color="#7000FF" stop-opacity="0"></stop>
//                                 </linearGradient>
//                             </defs>
//                         </svg>
//                     </div>
//                     <h2 class="main-price">${item.price}</h2>
//                     <div class="mon-price">
//                         <span>${item.salePrice}</span>

//                     </div>
//                     <h2 class="title">${item.description}</h2>
//                     <div class="rating">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                             <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 
//                             7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 
//                             14.2799L19.054 22.2082L12.0006 18.26Z"></path>
//                         </svg>
//                         <p> <span>4.9</span> ${item.rating}</p>
//                     </div>
//                     <button id="like-btn-1" class="btn">
//                         <!-- The hand bag is here -->
//                         <span>Завтра</span>
//                         <svg data-v-48d863a4="" width="16" height="16" viewBox="0 0 17 17" fill="none"
//                             xmlns="http://www.w3.org/2000/svg" class="ui-icon  cart-button__icon">
//                             <path fill-rule="evenodd" clip-rule="evenodd"
//                                 d="M4.93384 4.90479V6.40055C4.93384 6.67669 5.1577 6.90055 5.43384 6.90055C5.70998 6.90055 5.93384 6.67669 5.93384 6.40055V4.90055H10.2672V6.40055C10.2672 6.6767 10.491 6.90055 10.7672 6.90055C11.0433 6.90055 11.2672 6.6767 11.2672 6.40055V4.90479C11.4272 4.90795 11.5656 4.91349 11.6891 4.92318C11.967 4.94496 12.1296 4.98556 12.2558 5.04548C12.5247 5.17311 12.7495 5.37785 12.9017 5.63364C12.9731 5.75371 13.0287 5.91178 13.0764 6.18643C13.125 6.46716 13.1593 6.82852 13.208 7.34854L13.311 8.44722C13.3368 8.72216 13.5806 8.92415 13.8555 8.89837C14.1305 8.8726 14.3324 8.62882 14.3067 8.35388L14.2018 7.23504C14.1554 6.73994 14.1178 6.33946 14.0616 6.01556C14.0037 5.68119 13.9201 5.38953 13.7611 5.12236C13.5075 4.69604 13.1328 4.35481 12.6846 4.14209C12.4038 4.00878 12.1056 3.95276 11.7673 3.92624C11.6064 3.91363 11.4276 3.90721 11.2285 3.90394C10.9902 2.39095 9.68046 1.23389 8.10051 1.23389C6.52056 1.23389 5.21086 2.39095 4.97256 3.90394C4.77338 3.90721 4.59458 3.91363 4.43373 3.92624C4.09541 3.95276 3.79722 4.00878 3.51637 4.14209C3.06825 4.35481 2.69353 4.69604 2.43991 5.12236C2.28096 5.38953 2.19736 5.68119 2.13937 6.01556C2.0832 6.33946 2.04566 6.73993 1.99925 7.23501L1.59526 11.5442C1.54017 12.1318 1.49588 12.6043 1.49241 12.9873C1.48886 13.3806 1.52662 13.7286 1.66648 14.0541C1.88752 14.5686 2.27487 14.9939 2.76646 15.262C3.0775 15.4317 3.42047 15.5018 3.81232 15.5349C4.19406 15.5672 4.66858 15.5672 5.25874 15.5672H8.10051C8.37665 15.5672 8.60051 15.3434 8.60051 15.0672C8.60051 14.7911 8.37665 14.5672 8.10051 14.5672H5.28121C4.66335 14.5672 4.23123 14.5668 3.89666 14.5385C3.56736 14.5106 3.38188 14.4586 3.24525 14.3841C2.9503 14.2233 2.71789 13.968 2.58527 13.6594C2.52383 13.5164 2.48938 13.3268 2.49237 12.9964C2.49541 12.6606 2.53532 12.2304 2.59299 11.6152L2.99299 7.34853C3.04175 6.82852 3.07598 6.46716 3.12467 6.18643C3.17229 5.91178 3.22789 5.75371 3.29932 5.63364C3.4515 5.37785 3.67633 5.17311 3.9452 5.04547C4.07142 4.98556 4.23399 4.94496 4.51188 4.92318C4.63541 4.91349 4.77386 4.90795 4.93384 4.90479ZM5.99182 3.90055H10.2092C9.98348 2.94499 9.12504 2.23389 8.10051 2.23389C7.07598 2.23389 6.21754 2.94499 5.99182 3.90055ZM12.1005 9.90055C12.3767 9.90055 12.6005 10.1244 12.6005 10.4006V11.9006H14.1005C14.3767 11.9006 14.6005 12.1244 14.6005 12.4006C14.6005 12.6767 14.3767 12.9006 14.1005 12.9006H12.6005V14.4006C12.6005 14.6767 12.3767 14.9006 12.1005 14.9006C11.8244 14.9006 11.6005 14.6767 11.6005 14.4006V12.9006H10.1005C9.82437 12.9006 9.60051 12.6767 9.60051 12.4006C9.60051 12.1244 9.82437 11.9006 10.1005 11.9006H11.6005V10.4006C11.6005 10.1244 11.8244 9.90055 12.1005 9.90055Z"
//                                 fill="white"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//         </div>
//     `

    
    
    
// }) 



























