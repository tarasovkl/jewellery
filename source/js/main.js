"use strict";

(function () {
  var questionList = document.querySelector(".questions__list");
  var questionButtons = questionList.querySelectorAll(".questions__button");
  var questionTitles = questionList.querySelectorAll(".questions__list-item h4");
  var questionTexts = questionList.querySelectorAll(".questions__list-item p");

  var toggleClass = function (element, selector) {
    element.classList.toggle(selector);
  };


  if (questionList) {
    questionTitles.forEach(function (title, i) {
      title.addEventListener("click", function () {
        toggleClass(questionTexts[i], "questions__list-text");
        toggleClass(questionButtons[i], "questions__button--active");
      });
    });

    questionButtons.forEach(function (button, i) {
      button.addEventListener("click", function () {
        toggleClass(button, "questions__button--active");
        toggleClass(questionTexts[i], "questions__list-text");
      });
    });
  }

})();

