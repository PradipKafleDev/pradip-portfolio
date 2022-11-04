const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelector(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

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
