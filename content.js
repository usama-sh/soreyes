document.addEventListener("mouseover", function (event) {
  // Check if the hovered element is a paragraph (or a child of a paragraph)
  var paragraphElement = findParentParagraph(event.target);
  
  if (paragraphElement) {
    // Apply a smooth transition to the background color on mouseover
    paragraphElement.style.transition = "background-color 0.15s ease";
    paragraphElement.style.backgroundColor = "lightgray";
  }
});

document.addEventListener("mouseout", function (event) {
  // Reset the background color with a smooth transition on mouseout
  var paragraphElement = findParentParagraph(event.target);
  
  if (paragraphElement) {
    paragraphElement.style.backgroundColor = "";
  }
});

// Helper function to find the closest parent paragraph
function findParentParagraph(element) {
  while (element && element.tagName !== "P") {
    element = element.parentNode;
  }
  return element;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'toggleExtension') {
    const extensionEnabled = request.enabled;

    // Toggle your highlighting functionality based on extensionEnabled value
    if (extensionEnabled) {
      // Enable your highlighting logic
      alert('Extension enabled!');
    } else {
      // Disable your highlighting logic
      alert('Extension disabled!');
    }
  }
});
