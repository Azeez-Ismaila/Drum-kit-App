const key1 = document.querySelector(".key1");
const key2 = document.querySelector(".key2");
const key3 = document.querySelector(".key3");
const key4 = document.querySelector(".key4");
const key5 = document.querySelector(".key5");
const key6 = document.querySelector(".key6");
const key7 = document.querySelector(".key7");
const key8 = document.querySelector(".key8");
const key9 = document.querySelector(".key9");

const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");
const audio9 = document.getElementById("audio9");

document.addEventListener("keypress", (event) => {
  var name = event.key1;
  var code = event.code;
  console.log(name, code);
});
document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    if (name === "a") {
    }
    switch (name) {
      case "a" || "A":
        audio1.play();
        break;
      case "s":
        audio2.play();
      case "d":
        audio3.play();
      case "f":
        audio4.play();
      case "g":
        audio5.play();
      case "h":
        audio6.play();
      case "j":
        audio7.play();
      case "k":
        audio8.play();
      case "l":
        audio9.play();

      default:
        break;
    }
  },
  false
);

key1.addEventListener("click", () => {
  audio1.play();
});
key2.addEventListener("click", () => {
  audio2.play();
});
key3.addEventListener("click", () => {
  audio3.play();
});
key4.addEventListener("click", () => {
  audio4.play();
});
key5.addEventListener("click", () => {
  audio5.play();
});
key6.addEventListener("click", () => {
  audio6.play();
});
key7.addEventListener("click", () => {
  audio7.play();
});
key8.addEventListener("click", () => {
  audio8.play();
});
key9.addEventListener("click", () => {
  audio9.play();
});
