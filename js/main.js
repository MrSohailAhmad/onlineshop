/*price range*/

if ($.fn.slider) {
  $("#sl2").slider();
}

var RGBChange = function () {
  $("#RGB").css(
    "background",
    "rgb(" + r.getValue() + "," + g.getValue() + "," + b.getValue() + ")"
  );
};

/*scroll to top*/

$(document).ready(function () {
  $(function () {
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      scrollDistance: 300, // Distance from top/bottom before showing element (px)
      scrollFrom: "top", // 'top' or 'bottom'
      scrollSpeed: 300, // Speed back to top (ms)
      easingType: "linear", // Scroll to top easing (see http://easings.net/)
      animation: "fade", // Fade, slide, none
      animationSpeed: 200, // Animation in speed (ms)
      scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
      //scrollTarget: false, // Set a custom target element for scrolling to the top
      scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
      scrollTitle: false, // Set a custom <a> title if required.
      scrollImg: false, // Set true to use image
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      zIndex: 2147483647, // Z-Index for the overlay
    });
  });
});

let firstslide = document.getElementById("first-slide");
let secondslide = document.getElementById("second-slide");
let footerText = document.getElementById("footer-text");
let back = document.getElementById("back");
let next = document.getElementById("next");

next.onclick = () => {
  firstslide.classList.add("sec-modal");
  secondslide.classList.remove("sec-modal");
  footerText.classList.add("sec-modal");
};
back.onclick = () => {
  secondslide.classList.add("sec-modal");
  firstslide.classList.remove("sec-modal");
  footerText.classList.remove("sec-modal");
};

// alternext.onclick = () => {
//   firstslide.classList.add("sec-modal");
//   secondslide.classList.add("sec-modal");
//   thirdslide.classList.remove("alter");
// };
