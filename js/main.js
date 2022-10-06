const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".main-nav");
const herosec = document.querySelector(".hero-sec");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
  toggler.classList.toggle("toggler__active");
  herosec.classList.toggle("filtered")
});

const trigger = document.querySelectorAll(".trigger");
const accdescp = document.querySelector(".acc-descp");
trigger.forEach((item) => {
  item.addEventListener("click", (e) =>{
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("acc-expanded");
  });
});
