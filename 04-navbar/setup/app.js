// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //    console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));

  //   se a classe links também tiver a classe show-links
  //   if (links.classList.contains("show-links")) {
  //     //   remove a classe show-links de links
  //     links.classList.remove("show-links");
  //   } else {
  //     //   adiciona a classe show-links
  //     links.classList.add("show-links");
  //   }

  //   faz a mesma coisa que o código acima
  links.classList.toggle("show-links");
});
