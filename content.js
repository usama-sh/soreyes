document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mouseover", function (event) {
      var target = event.target;
  
      // Check if the cursor is over a Wikipedia article section
      if (target.tagName.toLowerCase() === "a" && target.href.includes("/wiki/")) {
        target.style.backgroundColor = "yellow"; // You can change the color as per your preference
      }
    });
  
    document.addEventListener("mouseout", function (event) {
      var target = event.target;
  
      // Reset the background color when the cursor leaves the article section
      if (target.tagName.toLowerCase() === "a" && target.href.includes("/wiki/")) {
        target.style.backgroundColor = "";
      }
    });
  });
  