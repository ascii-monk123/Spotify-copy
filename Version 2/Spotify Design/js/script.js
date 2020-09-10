const ham = document.querySelector(".sidebar__toggle");

//adding event listener
ham.addEventListener("click", (e) => {
  ham.classList.toggle("close");
});
