const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const playerroll = document.querySelector(".playerside");
const oppenentroll = document.querySelector(".oppenentside");
const playscore = document.querySelector(".pscore");
const oppscore = document.querySelector(".oscore");
const arr = ["stone", "paper", "scissor"];

let pscore = 0;
let oscore = 0;
function getrandnum(val) {
  let crt = Math.ceil(Math.random() * 3);
  console.log("cos" + arr[crt - 1]);
  console.log("pal" + val);
  if (arr[crt - 1] == "stone") {
    setstoneimage1();
  } else if (arr[crt - 1] == "paper") {
    setpaperimage1();
  } else {
    setscissorimage1();
  }
  if (val == "stone" && arr[crt - 1] == "scissor") {
    pscore++;
  } else if (val == "paper" && arr[crt - 1] == "stone") {
    pscore++;
  } else if (val == "scissor" && arr[crt - 1] == "paper") {
    pscore++;
  } else if (val == arr[crt - 1]) {
    console.log("draw");
  } else {
    oscore++;
  }
  console.log(oscore);
  playscore.innerHTML = pscore;
  oppscore.innerHTML = oscore;
}

stone.addEventListener("click", () => {
  playerroll.style.setProperty("--degree", "-300%");
  oppenentroll.style.setProperty("--degree", "-300%");
  setTimeout(() => {
    setstoneimage();
    getrandnum(arr[0]);
  }, 3000);
});

paper.addEventListener("click", () => {
  playerroll.style.setProperty("--degree", "-300%");
  oppenentroll.style.setProperty("--degree", "-300%");
  setTimeout(() => {
    setpaperimage();
    getrandnum(arr[1]);
  }, 4000);
});
scissor.addEventListener("click", () => {
  playerroll.style.setProperty("--degree", "-300%");
  oppenentroll.style.setProperty("--degree", "-300%");
  setTimeout(() => {
    setscissorimage();
    getrandnum(arr[2]);
  }, 6000);
});

function setstoneimage() {
  playerroll.style.setProperty("--degree", "0%");
  playerroll.style.setProperty("--degree1", "0%");
}
function setstoneimage1() {
  oppenentroll.style.setProperty("--degree", "0%");
  oppenentroll.style.setProperty("--degree1", "0%");
}

function setpaperimage() {
  playerroll.style.setProperty("--degree", "-100%");
  playerroll.style.setProperty("--degree1", "-100%");
}

function setpaperimage1() {
  oppenentroll.style.setProperty("--degree", "-100%");
  oppenentroll.style.setProperty("--degree1", "-100%");
}
function setscissorimage() {
  playerroll.style.setProperty("--degree", "-200%");
  playerroll.style.setProperty("--degree1", "-200%");
}
function setscissorimage1() {
  oppenentroll.style.setProperty("--degree", "-200%");
  oppenentroll.style.setProperty("--degree1", "-200%");
}
