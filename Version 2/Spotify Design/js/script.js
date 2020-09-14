const ham = document.querySelector(".sidebar__toggle");
const sidebar = document.querySelector(".main__sidebar");

//adding event listener
ham.addEventListener("click", (e) => {
  ham.classList.toggle("close");
  sidebar.classList.toggle("active");
});
