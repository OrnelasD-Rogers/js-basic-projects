const btns = document.querySelectorAll(".question-btn");

//using selectors inside the element
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.parentElement);
  });
});

// traversing the dom
