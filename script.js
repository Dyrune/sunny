document.addEventListener("DOMContentLoaded", function () {
  var menuDrop = document.querySelector("#myLinks");
  var hb = document.querySelector(".hb");
  var cluz = document.querySelector(".cluz")

  hb.addEventListener("click", function () {
    menuDrop.style.display = "flex";
    hb.style.display = "none";
    cluz.style.display = "flex";
  });

  cluz.addEventListener("click", function () {
    menuDrop.style.display = "none";
    hb.style.display = "flex";
    cluz.style.display = "none";
  });

});