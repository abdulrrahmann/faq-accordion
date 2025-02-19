let accordions = document.getElementsByClassName("accordion");
let wrappers = document.querySelectorAll(".accordion .wrapper");
let titles = document.querySelectorAll(".accordion .title");

// Handle Click Events On titles
titles.forEach((title) => {
  title.addEventListener("click", () => {
    if (title.nextElementSibling.classList.contains("show")) {
      // Hide the Text
      title.nextElementSibling.classList.remove("show");
      // Change the icon
      title.getElementsByTagName("img")[0].src = "assets/images/icon-plus.svg";

      title.classList.remove("m-0");
    } else {
      // Hide All Wrappers
      wrappers.forEach((wrapper) => wrapper.classList.remove("show"));

      // Change img src for all to plus Icon

      titles.forEach(
        (title) =>
          (title.getElementsByTagName("img")[0].src =
            "assets/images/icon-plus.svg")
      );

      // Add Show to wrapper that next to the clicked title
      title.nextElementSibling.classList.add("show");

      // Change img src to minus icon
      title.getElementsByTagName("img")[0].src = "assets/images/icon-minus.svg";

      //   Add margin bottom
      title.classList.add("m-0");
    }
  });
});
