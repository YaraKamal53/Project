// Start Navbar
let myIcon = document.querySelector(".toggle");
let myList = document.querySelector(".list");

myIcon.addEventListener("click", () => {
  myList.classList.toggle("active");

  if (myList.classList.contains("active")) {
    myIcon.classList.add("fa-xmark");
  } else {
    myIcon.classList.remove("fa-xmark");
  }
});

myList.addEventListener("click", (e) => {
  e.stopPropagation();
});
