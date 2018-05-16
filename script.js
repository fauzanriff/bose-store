
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
  // activate target label
  e.target.classList.add("active");
}

function openCarouselImage (e){
  var childClass = Array.from(e.target.classList);
  var targetClass;
  if (childClass.includes("my-carousel-toggle")){
    targetClass = e.target;
  }else{
    targetClass =  e.target.parentNode;
  }
  diactivateClass(targetClass.parentNode.parentNode.parentNode, "my-popover__carousel__image"); // hide all image
  diactivateClass(targetClass.parentNode, "my-carousel-toggle");           // hide all nav
  // get target image
  var target = targetClass.getAttribute("data-target");
  var targetImage = document.getElementById(target);
  // show target image
  targetImage.classList.add("active");
  // activate nav carousel
  targetClass.classList.add("active");
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
// Listener for carousel
var carouselNav = Array.from(document.getElementsByClassName("my-carousel-toggle"));
carouselNav.forEach(function(item, index){
  item.addEventListener("click", openCarouselImage);
});
