const changeTheme = document.querySelector(".site-header__btn");

changeTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});