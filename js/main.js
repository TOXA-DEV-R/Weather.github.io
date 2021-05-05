// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".carousel");
//   var instances = M.Carousel.init(elems, options);
// });

// Or with jQuery

$(document).ready(function () {
  $(".carousel").carousel();

  $(".next").click(function () {
    $(".carousel").carousel("next");
  });

  $(".prev").click(function () {
    $(".carousel").carousel("prev");
  });

  // scrollButton start
  $("button.up").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  // scrollButton end
});

window.addEventListener("load", function () {
  // body scroll start
  const scrollMenuLink = () => {
    const scrollMenu = document.querySelectorAll("#navbar-link");

    for (let i in scrollMenu) {
      if (scrollMenu.hasOwnProperty(i)) {
        scrollMenu[i].addEventListener("click", function (e) {
          clickshow(2);
          e.preventDefault();
          document.querySelector(scrollMenu[i].hash).scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    }
  };
  scrollMenuLink();
  // body scroll end

  const btnTimes = document.querySelector(".navbar-modal #btn-times");
  const btn = document.querySelector(".navbar .btn");
  const navbarModal = document.querySelector(".navbar-modal");

  btn.addEventListener("click", () => clickshow(1));
  btnTimes.addEventListener("click", () => clickshow(2));

  function clickshow(num) {
    if (num === 1) {
      navbarModal.classList.add("active");
    }
    if (num === 2) {
      navbarModal.classList.remove("active");
    }
  }

  // noscrollingto start
  window.addEventListener("scroll", noscrollingto);
  function noscrollingto() {
    if (navbarModal.classList.contains("active")) {
      window.scrollTo(0, 0);
    }
  }
  // noscrollingto end

  // scrollButton start
  window.addEventListener("scroll", scrollButton);
  function scrollButton() {
    let buttonUp = document.querySelector("button.up");
    if (window.pageYOffset > 200) {
      buttonUp.classList.add("active");
    } else {
      buttonUp.classList.remove("active");
    }
  }
  // scrollButton end
});
