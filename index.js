const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let liste = document.querySelector(".liste");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  liste.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  liste.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".anasayfa-text", { delay: 350, origin: "left" });
sr.reveal(".anasayfa-img", { delay: 350, origin: "right" });

sr.reveal(".diger,.portföy,.iletisim", { delay: 200, origin: "bottom" });
