// Assigning name to element gotten by id from HTML
const containerEL = document.getElementById("container");
const designerDiv = document.getElementById("designer");
const programmerDiv = document.getElementById("programmer");
const designerBtn = document.getElementById("designer-btn");
const programmerBtn = document.getElementById("programmer-btn");




// Variables to keep track of whether the divs have been clicked
let designerClicked = false;
let programmerClicked = false;

// Function to reset grid template columns
function resetGridColumns() {
  containerEL.style.gridTemplateColumns = "1fr 1fr";
  designerClicked = false;
  programmerClicked = false;
}

// Event listeners for clicks on designerDiv and programmerDiv
designerBtn.addEventListener('click', () => {
  if (!designerClicked) {
    containerEL.style.gridTemplateColumns = "1fr 0.5fr";
    designerClicked = true;
    // transition effect
    containerEL.style.transition = "grid-template-columns 0.5s ease-in-out";
    // Reset after 2 seconds
    setTimeout(resetGridColumns, 1000);
  }
});


programmerBtn.addEventListener('click', () => {
  if (!programmerClicked) {
    containerEL.style.gridTemplateColumns = "0.5fr 1fr";
    programmerClicked = true;
    // transition effect
    containerEL.style.transition = "grid-template-columns 0.5s ease-in-out";
    // Reset after 2 seconds
    setTimeout(resetGridColumns, 1000);
  }
});