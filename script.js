// MOBILE ONLY
const bgMusic = new Audio("music.mp3");
bgMusic.loop = true;

document.addEventListener("click", () => {
  bgMusic.play().catch(() => {});
}, { once: true });

if (window.innerWidth > 768) {
  document.querySelectorAll(".page").forEach(p => p.style.display="none");
  document.getElementById("desktopBlock").style.display = "flex";
}

// PAGE SWITCH
function go(from, to) {
  document.getElementById(from).classList.remove("active");
  document.getElementById(to).classList.add("active");
}

// OPTION SELECT
function choose(btn) {
  btn.classList.toggle("selected");
}

// LOCKED NEXT
function lockedNext(from, to) {
  const selected = document.querySelectorAll(`#${from} .selected`);
  if (selected.length === 0) {
    alert("Sir ji… pehle choose toh kijiye 🥺");
    return;
  }
  go(from, to);
}

// BELIEF
function belief(isYes) {
  const msg = document.getElementById("beliefMsg");

  if (isYes) {
    msg.innerHTML =
      "Me janti thi aap jarur Haan choose karenge 😭💕<br>" +
      "Aapne yeh choose kiya wahi mere liye bahut hai 🥺💖";
  } else {
    msg.innerHTML =
      "Aare koi baat nahi agar aapne No choose kiya 🫶<br>" +
      "Lekin mujhe abhi bhi bharosa hai… hum jarur milenge 💖";
  }

  setTimeout(() => go("p4","p5"), 3500);
}

// FINAL YES – ALL 3 TWISTS
function finalYes() {
  const final = document.getElementById("finalEffect");
  const secret = document.getElementById("secretMsg");
  const hint = document.getElementById("screenshotHint");

  final.innerHTML = "⏳ Processing your answer… 💕";
  secret.innerHTML = "";
  hint.innerHTML = "";

  setTimeout(() => {
    final.innerHTML = "<div class='heart'>💖💖💖</div>";
    typeText(
      "Sir ji… thank you for choosing me.<br>" +
      "Aapka ‘haan’ meri zindagi ka sabse pyara moment hai 🥺💕<br>" +
      "— Yours, always 💖",
      secret
    );
    hint.innerHTML =
      "Is moment ka screenshot le lo 📸💖<br>" +
      "Because yeh sirf hum dono ka hai 🥺";
  }, 2000);
}

// TYPING EFFECT
function typeText(text, element) {
  let i = 0;
  element.innerHTML = "";
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);

}
