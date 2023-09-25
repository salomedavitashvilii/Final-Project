let burgerMenu = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-xmark");
let mobileMenu = document.querySelector(".burgermenu");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  xMark.style.display = "block";
  burgerMenu.style.display = "none";
});

xMark.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  xMark.style.display = "none";
  burgerMenu.style.display = "block";
});
