// Select buttons
const greenBtn = document.getElementById("green");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const randomBtn = document.getElementById("random");

// Green
greenBtn.addEventListener("click", function () {
  document.body.style.background = "green";
});

// Red
redBtn.addEventListener("click", function () {
  document.body.style.background = "red";
});

// Blue
blueBtn.addEventListener("click", function () {
  document.body.style.background = "blue";
});

// Random (solid or gradient)
randomBtn.addEventListener("click", function () {
  const isGradient = Math.random() > 0.5;

  if (isGradient) {
    // Random gradient
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
  } else {
    // Random solid color
    document.body.style.background = getRandomColor();
  }
});

// Function to generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}