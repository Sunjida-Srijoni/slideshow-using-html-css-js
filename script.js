const slideShowElements = document.querySelectorAll(".single-element");


console.log(slideShowElements);
let countElements = 1;

setInterval(() => {

    countElements++;

    if(countElements == 5)
    {
        countElements = 2;

    }
 
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if(countElements > slideShowElements.length)
    {
        slideShowElements[0].classList.add("current");
    }
    else{
        currentElement.nextElementSibling.classList.add("current");
    }
    

}, 2000)


// if(countElements > slideShowElements.length+1 || countElements <= slideShowElements.length)