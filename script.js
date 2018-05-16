
function openTargetPopOver (e) {
  // Get target popover
  var target = e.target.getAttribute("data-target");
  if(!target){
    target = e.target.parentNode.getAttribute("data-target");
  }
  // open target popoever
  var popover = document.getElementById(target);
  // if target exist
  if (popover){
    popover.classList.remove("hide");
  }
}

function closeTargetPopOver (e) {
  // Get target popover
  var targetClass = Array.from(e.target.classList);
  // if target is popover root hide it
  if(targetClass.includes("my-popover")){
    e.target.classList.add("hide");
  }
}

// Add listener buttons
// Listener for popover toggle open
var quicklooks = Array.from(document.getElementsByClassName("my-popover-toggle"));
quicklooks.forEach(function(item, index){
  item.addEventListener("click", openTargetPopOver);
});
// Listener for close popover
var popovers = Array.from(document.getElementsByClassName("my-popover"));
popovers.forEach(function(item, index){
  item.addEventListener("click", closeTargetPopOver);
});
