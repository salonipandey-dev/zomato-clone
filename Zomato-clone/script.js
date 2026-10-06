// ===============================
// ZOMATO CLONE - script.js
// ===============================

// Get elements
const searchInput = document.querySelector(".search-box input");
const restaurantCards = document.querySelectorAll(".restaurant-card");
const categories = document.querySelectorAll(".category");
const appButton = document.querySelector(".email-box button");
const emailInput = document.querySelector(".email-box input");


// ===============================
// SEARCH RESTAURANTS
// ===============================

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    restaurantCards.forEach(function (card) {
        const restaurantName = card
            .querySelector(".restaurant-header h3")
            .textContent
            .toLowerCase();

        const restaurantInfo = card
            .querySelector(".restaurant-info")
            .textContent
            .toLowerCase();

        if (
            restaurantName.includes(searchValue) ||
            restaurantInfo.includes(searchValue)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// ===============================
// CATEGORY FILTER
// ===============================

categories.forEach(function (category) {

    category.addEventListener("click", function () {

        const selectedCategory =
            category.querySelector("h3").textContent.toLowerCase();

        restaurantCards.forEach(function (card) {

            const cardText =
                card.textContent.toLowerCase();

            // Show all cards first
            if (selectedCategory === "") {
                card.style.display = "block";
            }

            // Match category with restaurant information
            else if (cardText.includes(selectedCategory)) {
                card.style.display = "block";
            }

            else {
                card.style.display = "none";
            }

        });

    });

});


// ===============================
// RESTAURANT CARD CLICK
// ===============================

restaurantCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const restaurantName =
            card.querySelector(".restaurant-header h3").textContent;

        alert(`Opening ${restaurantName}`);

    });

});


// ===============================
// SHARE APP LINK
// ===============================

appButton.addEventListener("click", function () {

    const email = emailInput.value.trim();

    if (email === "") {

        alert("Please enter your email address.");

        return;
    }

    if (!validateEmail(email)) {

        alert("Please enter a valid email address.");

        return;
    }

    alert(`App link sent successfully to ${email}!`);

    emailInput.value = "";

});


// ===============================
// EMAIL VALIDATION
// ===============================

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


// ===============================
// LOCATION CLICK
// ===============================

const locationBox = document.querySelector(".location");

locationBox.addEventListener("click", function () {

    const location = prompt("Enter your location:");

    if (location) {
        locationBox.textContent = `📍 ${location}`;
    }

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {

        navbar.style.position = "fixed";
        navbar.style.background = "#e23744";
        navbar.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.2)";

    }

    else {

        navbar.style.position = "absolute";
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});


// ===============================
// PAGE LOAD
// ===============================

window.addEventListener("load", function () {

    console.log("Zomato Clone loaded successfully!");

});