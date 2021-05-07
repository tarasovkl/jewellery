"use strict";

(function () {
  var questionList = document.querySelector(".questions__list");
  var questionButtons = document.querySelectorAll(".questions__button");
  var questionItems = document.querySelectorAll(".questions__list-item");
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
  var body = document.querySelector("body")
  var mediaTablet = window.matchMedia('(max-width: 1023px');
  var mainSlider = document.querySelector(".new__menu-slider");
  var loginOverlay = document.querySelector(".overlay");
  var pageMask = document.querySelector(".mask");

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
    if (mediaTablet.matches) {
      addClass(filter, "filter--disable");
    }

    filterOpen.addEventListener("click", function () {
      toggleClass(filter, "filter--disable");
    });
  }

  var hideText = function () {
    for (var i = 1; i < questionTexts.length; i++) {
      addClass(questionTexts[i], "questions__list-text");
      removeClass(questionButtons[i], "questions__button--active");
    }
  }

  if (questionList) {
    hideText();
  }

  var hideOptions = function () {
    for (var i = 1; i < filterOptions.length - 1; i++) {
      removeClass(filterButtons[i], "filter__button--active");
      removeClass(filterOptions[i], "filter__options--active");
    }
  }

  if (filter) {
    hideOptions();
  }

  if (questionList) {
    questionItems.forEach(function (item, i) {
      item.addEventListener("click", function () {
        toggleClass(questionTexts[i], "questions__list-text");
        toggleClass(questionButtons[i], "questions__button--active");
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
    toggleClass(body, "body__overflow--menu");
  }

  hideMobileMenu();

  menuButton.addEventListener("click", function () {
    showMenu();
  })

  if (login) {
    login.addEventListener("click", function (evt) {
      evt.preventDefault();
      addClass(loginForm, "login--active");
      if (storage) {
        loginEmail.value = localStorage.getItem("email");
      }
      addClass(body, "body__overflow");
      addClass(pageMask, "mask-active");
      addClass(loginOverlay, "overlay-active");
      loginEmail.focus();
    });
  }

  var closeLogin = function () {
    removeClass(loginForm, "login--active");
    removeClass(body, "body__overflow");
    removeClass(pageMask, "mask-active");
    removeClass(loginOverlay, "overlay-active");
  }

  if (loginClose) {
    loginClose.addEventListener("click", function () {
      closeLogin();
    });

    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        evt.preventDefault();
        if (loginForm.classList.contains("login--active")) {
          closeLogin();
        }
      }
    });

    window.onclick = function (evt) {
      if (evt.target == loginOverlay) {
        closeLogin();
      }
    }
  };

  if (modalCart) {
    addButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      addClass(modalCart, "modal-cart--active");
      addClass(body, "body__overflow");
      addClass(pageMask, "mask-active");
      addClass(loginOverlay, "overlay-active");
    });
  }

  var closeCart = function () {
    removeClass(modalCart, "modal-cart--active");
    removeClass(body, "body__overflow");
    removeClass(pageMask, "mask-active");
    removeClass(loginOverlay, "overlay-active");
  }

  if (modalCartClose) {
    modalCartClose.addEventListener("click", function () {
      closeCart();
    });

    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        evt.preventDefault();
        if (modalCart.classList.contains("modal-cart--active")) {
          closeCart();
        }
      }
    });

    window.onclick = function (evt) {
      if (evt.target == loginOverlay) {
        closeCart();
        removeClass(loginForm, "login--active");
      }
    }
  }

  if (mainSlider) {
    $(document).ready(function () {
      $('.new__list').slick({
        dots: true,
        customPaging: function (slider, i) { return '<a>' + (i + 1) + '</a>' },
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        prevArrow: ".new__button-left",
        nextArrow: ".new__button-right",
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              customPaging: function (slider, i) { return '<p>' + (i + 1) + (" of 6") + '</p>' },
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          }
        ]
      });
    });
  }

})();

