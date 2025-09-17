// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Function that returns a message based on element id and action
function getAnimationMessage(elementId, action) {
  return `Element ${elementId} will ${action} animation.`;
}

// Demonstrate local and global variables
let globalState = "stopped";

function toggleAnimation(elementId) {
  const element = document.getElementById(elementId);

  if (globalState === "stopped") {
    element.classList.add("animatePulse");
    globalState = "started";
    return getAnimationMessage(elementId, "start");
  } else {
    element.classList.remove("animatePulse");
    globalState = "stopped";
    return getAnimationMessage(elementId, "stop");
  }
}

// Part 3: Combine CSS Animations with JavaScript

const button = document.getElementById("animatedButton");
const boxId = "animatedBox";

// Add click event listener to button to toggle animation on box
button.addEventListener("click", () => {
  const message = toggleAnimation(boxId);
  console.log(message);  // Output current animation state message
});
