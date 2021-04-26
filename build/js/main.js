"use strict";

(function () {
  var questionList = document.querySelector(".questions__list");
  var questionButtons = document.querySelectorAll(".questions__button");
  var questionTitles = document.querySelectorAll(".questions__list-item h4");
  var questionTexts = document.querySelectorAll(".questions__list-item p");
  var filter = document.querySelector(".filter");
  var filterOptions = document.querySelectorAll(".filter__options");
  var filterButtons = document.querySelectorAll(".filter__button");
  var filterTitles = document.querySelectorAll(".filter__title p");
  console.log(filterTitles);
  console.log(filter);
  console.log(filterButtons);
  console.log(filterOptions);

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

  if (filter) {
    filterTitles.forEach(function (title, i) {
      title.addEventListener("click", function () {
        toggleClass(filterOptions[i], "filter__options--active");
        toggleClass(filterButtons[i], "filter__button--active");
      });
    });

    filterButtons.forEach(function (button, i) {
      button.addEventListener("click", function () {
        toggleClass(button, "filter__button--active");
        toggleClass(filterOptions[i], "filter__options--active");
      });
    });
  }

})();

