const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelector(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");
const homeBtn = document.getElementById("home");
const projectsBtn = document.getElementById("home");
const contactBtn = document.getElementById("home");
const navList = document.querySelector(".list");
const listItem = document.querySelectorAll(".list-item");
console.log(listItem);

//selecting parent btns --event deligation
sectBtns.addEventListener("click", function (e) {
  const currentBtn = e.target.closest(".control");
  console.log(currentBtn);
  if (!currentBtn) return;

  //   at first removing active-contents
  sectBtn.forEach(btn => btn.classList.remove("active-btn"));

  sections.forEach(sec => sec.classList.remove("active"));

  // Adding active-contents
  currentBtn.classList.add("active-btn");

  // console.log(currentBtn.dataset.id);
  document
    .querySelector(`.sec-${currentBtn.dataset.id}`)
    .classList.add("active");
});

navList.addEventListener("click", e => {
  const currentPage = e.target.closest(".list-item");
  console.log(currentPage.dataset.id);

  if (!currentPage) return;
  sections.forEach(sec => sec.classList.remove("active"));

  document
    .querySelector(`.sec-${currentPage.dataset.id}`)
    .classList.add("active");
});
