//your JS code here. If required.
function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sizeInfo = document.getElementById("windowSize");
  sizeInfo.textContent = `Width: ${width}px, Height: ${height}px`;
}

// Call the updateSize function initially to set the initial size
updateSize();

// Add an event listener to the resize event of the window
window.addEventListener("resize", updateSize);