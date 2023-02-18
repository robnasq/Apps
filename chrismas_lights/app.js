const circle = document.getElementsByClassName("circle")
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const btn = document.getElementById('submit')
const title = document.getElementById("submit")
const len = circle.length

const on = function() {
  for (let i = 0; i < len; i++) {
    circle[i].removeAttribute("style")
    circle[i].getElementsByClassName.animationPlayState = "running"
    circle[i].getElementsByClassName.webkitAnimationPlayState = "running"
  }
}

const off = function() {
  title.style.animation ="none"

  for(let i = 0; i < len; i++) {
    circle[i].style.animation = "none"
    circle[i].style.background = "#563260"
  }
}

function convert() {
  let speed = document.getElementById("quantity").value
  for (let i = 0; i < len; i++) {
    circle[i].style.animationDuration = speed + "s"
  }
}

play.addEventListener('click', on);
stop.addEventListener('click', off);
