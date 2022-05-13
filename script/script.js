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





/*
mores.forEach((more) => {
    more.addEventListener('click', () => {
        more.classList.add('expand');
    })
})*/

function openMore1() {
    let more = document.getElementById("more1");
    let readMore = document.getElementById('readMore1')
    if (more.className === "more1") {
    more.className += " expand";
    readMore.innerHTML = "Click to hide";
    } else {
    more.className = "more1";
    readMore.innerHTML = "Click to read more";
    }
}

function openMore2() {
    let more = document.getElementById("more2");
    let readMore = document.getElementById('readMore2')
    if (more.className === "more2") {
    more.className += " expand";
    readMore.innerHTML = "Click to hide";
    } else {
    more.className = "more2";
    readMore.innerHTML = "Click to read more";
    }
}

function openMore3() {
    let more = document.getElementById("more3");
    let readMore = document.getElementById('readMore3')
    if (more.className === "more3") {
    more.className += " expand";
    readMore.innerHTML = "Click to hide";
    } else {
    more.className = "more3";
    readMore.innerHTML = "Click to read more";
    }
}