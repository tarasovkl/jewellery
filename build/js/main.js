"use strict";

(function () {
  var questionList = document.querySelector(".questions__list");
  var questionButtons = document.querySelectorAll(".questions__button");
  var questionTitles = document.querySelectorAll(".questions__list-item h4");
  var questionTexts = document.querySelectorAll(".questions__list-item p");
  var filter = document.querySelector(".filter");
  var filterOpen = document.querySelector(".filter__open");
  var filterOptions = document.querySelectorAll(".filter__options");
  var filterButtons = document.querySelectorAll(".filter__button");
  var filterTitles = document.querySelectorAll(".filter__title p");
  var header = document.querySelector(".header");
  var login = document.querySelector(".header__login");
  var headerMenu = document.querySelector(".header__menu");
  var headerSearchForm = document.querySelector(".header__top form");
  var menuButton = document.querySelector(".header__top-toggle");
  var menuIcon = document.querySelector(".header__top-burger");
  var menuLogo = document.querySelector(".header__logo");
  var menuCart = document.querySelector(".header__cart-image");
  var menuSearch = document.querySelector(".header__form-wrapper");
  var loginForm = document.querySelector(".login");
  var loginClose = document.querySelector(".login__close");
  var modalCart = document.querySelector(".modal-cart");
  var modalCartClose = document.querySelector(".modal-cart__close");
  var addButton = document.querySelector(".card__add")
  var loginEmail = loginForm.querySelector("[name=mail]");
  var isStorageSupport = true;
  var storage = "";
  var loginOverlay = loginForm.querySelector(".overlay-login");
  var body = document.querySelector("body")


  try {
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  var toggleClass = function (element, selector) {
    element.classList.toggle(selector);
  };

  var removeClass = function (element, selector) {
    element.classList.remove(selector);
  };

  var addClass = function (element, selector) {
    element.classList.add(selector);
  };


  if (filter) {
    filterOpen.addEventListener("click", function () {
      removeClass(filter, "filter--disable");
    });
  }

  if (filter) {
    filterOpen.addEventListener("click", function () {
      if (filter.classList.contains("filter--disable")) {
        toggleClass(filter, "filter--disable");
      }
    });
  }

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

    var hideMobileMenu = function () {
      removeClass(headerSearchForm, "header__form-wrapper--active");
      removeClass(login, "header__login--active");
      removeClass(headerMenu, "header__menu--active");
      removeClass(header, "header-bg");
      removeClass(menuLogo, "header__logo--active");
      removeClass(menuIcon, "header__top-burger--active");
      removeClass(menuCart, "header__cart-image--active");
    }

    var showMenu = function () {
      toggleClass(headerSearchForm, "header__form-wrapper--active");
      toggleClass(login, "header__login--active");
      toggleClass(headerMenu, "header__menu--active");
      toggleClass(header, "header-bg");
      toggleClass(menuLogo, "header__logo--active");
      toggleClass(menuIcon, "header__top-burger--active");
      toggleClass(menuCart, "header__cart-image--active");
      toggleClass(menuSearch, "header__form-wrapper--active");
    }

    hideMobileMenu();

    menuButton.addEventListener("click", function () {
      showMenu();
    })

    if (login) {
      login.addEventListener("click", function () {
        addClass(loginForm, "login--active");
        if (storage) {
          loginEmail.value = localStorage.getItem("email");
        }
        loginEmail.focus();
        addClass(body, "body__overflow");
      });
    }

    if (loginClose) {
      loginClose.addEventListener("click", function () {
        removeClass(loginForm, "login--active");
        removeClass(body, "body__overflow");
      });

      document.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape") {
          evt.preventDefault();
          if (login.classList.contains("login--active")) {
            removeClass(loginForm, "login--active");
            removeClass(body, "body__overflow");
          }
        }
      });
    };

    if (modalCart) {
      addButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        addClass(modalCart, "modal-cart--active");
        addClass(body, "body__overflow");
      });
    }

    if (modalCartClose) {
      modalCartClose.addEventListener("click", function () {
        removeClass(modalCart, "modal-cart--active");
        removeClass(body, "body__overflow");
      });

      document.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape") {
          evt.preventDefault();
          if (modalCart.classList.contains("modal-cart--active")) {
            removeClass(modalCart, "modal-cart--active");
            removeClass(body, "body__overflow");
          }
        }
      });
    }

  }) ();

