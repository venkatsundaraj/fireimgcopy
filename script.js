const imgContainer = document.querySelector(".image-container");
const text = document.querySelector(".text-container");

document.addEventListener("scroll", function () {
  const y = window.scrollY;
  const frame = Math.min(Math.floor(y / 15) + 2, 63);
  console.log(y, frame);

  imgContainer.style.backgroundImage = `url(./images/ezgif-frame-${frame
    .toString()
    .padStart(3, "0")}.png)`;

  text.style.opacity = `${frame + 20}`;
});
