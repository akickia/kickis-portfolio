function dropNav() {
    let drop = document.getElementById("drop-nav");
    if (drop.className === "dropdown-list") {
    drop.className += " open";
    } else {
    drop.className = "dropdown-list";
    }
}
function burgerMenu() {
      let burger = document.getElementById("nav-bar");
      if (burger.className === "nav-list") {
      burger.className += " responsive";
      } else {
      burger.className = "nav-list";
      }
}

document.querySelector(".section__me__content-img").addEventListener("click", function(){
    alert("HI THERE!")
})