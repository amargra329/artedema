document.querySelector("#menuCheckbox").addEventListener("change", function () {
 var bar1 = document.querySelector("#bar1");
 var bar2 = document.querySelector("#bar2");
 var bar3 = document.querySelector("#bar3");
 if (this.checked) {
  bar1.style.transform = "rotate(45deg)";
  bar1.style.top = "50%";

  bar2.style.transform = "rotate(45deg)";

  bar3.style.transform = "rotate(-45deg)";
  bar3.style.top = "50%";
 } else {
  bar1.style.transform = "rotate(0deg)";
  bar1.style.top = "15%";
  bar2.style.transform = "rotate(0deg)";
  bar3.style.transform = "rotate(0deg)";
  bar3.style.top = "85%";
 }
});
