console.log("Content script is running!");

document.addEventListener("mouseover", function (event) {
  // Rest of your code
});

document.addEventListener("mouseover", function (event) {
  console.log("Mouseover event captured!");
  // Rest of your code
});

document.addEventListener("mouseover", function (event) {
  console.log("Mouseover event captured!");
  console.log(event.target); // Log the hovered element
  // Rest of your code
});


document.addEventListener("mouseover", function (event) {
  // Apply highlighting directly to the hovered element
  event.target.style.backgroundColor = "yellow";
});

document.addEventListener("mouseout", function (event) {
  // Remove highlighting on mouseout
  event.target.style.backgroundColor = "";
});
