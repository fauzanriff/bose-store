
function openTargetPopOver (e) {
  // Get target popover
  var target = e.target.getAttribute("data-target");
  if(!target){
    target = e.target.parentNode.getAttribute("data-target");
  }
  // target popover
  var popover = document.getElementById(target);
  // open if target exist
  if (popover){
    popover.classList.remove("hide");
  }
}

function closeTargetPopOver (e) {
  // Get target popover
  var targetClass = Array.from(e.target.classList);
  // close popover if it is a the container
  if(targetClass.includes("my-popover")){
    e.target.classList.add("hide");
  }
}

function diactivateClass(target, className){
  // get all items
  var items = Array.from(target.getElementsByClassName(className));
  // diactivate all items
  items.forEach(function(item, index){
    var itemClass = Array.from(item.classList);
    if(itemClass.includes("active")){
      item.classList.remove("active");
    }
  });
}

function openTargetTab (e){
  var target = e.target.parentNode.parentNode;
  diactivateClass(target, "my-tab");          // close all tab
  diactivateClass(target, "my-tab-toggle");   // diactiavete all label
  // get target tab
  var target = e.target.getAttribute("data-target");
  var targetTab = document.getElementById(target);
  // open target tab
  targetTab.classList.add("active");
  // activate target __label
  e.target.classList.add("active");
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
// Listener for tab
var tabToggles = Array.from(document.getElementsByClassName("my-tab-toggle"));
tabToggles.forEach(function(item, index){
  item.addEventListener("click", openTargetTab);
});
