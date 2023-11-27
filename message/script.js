const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);


yesBtn.addEventListener("click", () => {
  // check if th or st (1st, 2nd, 3rd, 31st)
  switch (tomorrow.getDate()) {
    case 1:
    case 21:
    case 31:
      question.innerHTML = "Yay, see you on the" + " " + tomorrow.getDate() + "st!";
      break;
    case 2:
    case 22:
      question.innerHTML = "Yay, see you on the" + " " + tomorrow.getDate() + "nd!";
      break;
    case 3:
    case 23:
      question.innerHTML = "Yay, see you on the" + " " + tomorrow.getDate() + "rd!";
      break;
    default:
      question.innerHTML = "Yay, see you on the" + " " + tomorrow.getDate() + "th!";
  }
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});