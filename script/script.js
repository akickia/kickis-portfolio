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



//menu
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


//quote-generator
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', generateQuote)

generateQuote()


function generateQuote() {
    let n = Math.floor(Math.random() * 160)
    fetch('https://type.fit/api/quotes')
    .then((res)=> res.json())
    .then((data) => {
      quoteEl.innerHTML = data[n].text

      if (data[n].author === null) {
        authorEl.innerHTML = '// Unknown'
      } 
      else {
        authorEl.innerHTML = '// '+data[n].author
      }
    })
}


    
/*
mores.forEach((more) => {
    more.addEventListener('click', () => {
        more.classList.add('expand');
    })
})*/
//handling show more in aboutpage
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