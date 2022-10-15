const imgContainer = document.querySelector(".image-container");
const text = document.querySelector("p");

document.addEventListener("scroll", function () {
  const y = window.scrollY;
  const frame = Math.min(Math.floor(y / 15) + 1, 63);
  // console.log(y, frame);

  imgContainer.style.backgroundImage = `url(./images/ezgif-frame-${frame
    .toString()
    .padStart(3, "0")}.png)`;

  text.style.zIndex = "10";
  text.style.color = `rgba(255, 255, 255, ${(frame / 62) * 1})`;
  console.log(frame);
});
