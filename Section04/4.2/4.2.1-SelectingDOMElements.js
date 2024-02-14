// select all unordered list (ul) elements
const ulByTag = document.getElementsByTagName("ul");
const ulByQuery = document.querySelectorAll("ul");
console.log("element by tag, ulByTag");
console.log("query select all, ulByQuery");
// select all elements with the class "class-week"
const classWeek = document.getElementsByClassName("class-week");
console.log("class-week class, classWeek");

// select all elements with the class "nav-bar"
const navBar = document.querySelectorAll(".nav-bar");
console.log("this is navBar, navBar");

// select the element with the id "dog-picture" and save it to a variable
const dogPicId = document.querySelector("#dog-picture");
console.log(dogPicId);
