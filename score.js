// Iteration 8: Making scoreboard functional

const playBtn = document.getElementById("play-again-button")
const scoreboard = document.getElementById("score-board")
scoreboard.innerText = localStorage.getItem("score")

playBtn.addEventListener("click", () => {
    location.href = "game.html"
})