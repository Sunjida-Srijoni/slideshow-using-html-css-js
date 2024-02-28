const slideShowElements = document.querySelectorAll(".single-element");


console.log(slideShowElements);

setInterval(() => {
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    currentElement.nextElementSibling.classList.add("current");

}, 2000)