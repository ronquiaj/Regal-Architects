let done = false;

const changePhoto = () => {
  document.querySelector(".partner--4").classList.remove("visible");
  document.querySelector(".partner--4").classList.add("transitioning");
  document.querySelector(".partner--1").classList.add("visible");
  setTimeout(() => {
    document.querySelector(".partner--4").classList.remove("transitioning");
    document.querySelector(".partner--1").classList.add("transitioning");
    document.querySelector(".partner--1").classList.remove("visible");
    document.querySelector(".partner--2").classList.add("visible");
  }, 7500);

  setTimeout(() => {
    document.querySelector(".partner--2").classList.add("transitioning");
    document.querySelector(".partner--1").classList.remove("transitioning");
    document.querySelector(".partner--2").classList.remove("visible");
    document.querySelector(".partner--3").classList.add("visible");
  }, 15000);

  setTimeout(() => {
    document.querySelector(".partner--3").classList.add("transitioning");
    document.querySelector(".partner--2").classList.remove("transitioning");
    document.querySelector(".partner--3").classList.remove("visible");
    document.querySelector(".partner--4").classList.add("visible");
  }, 22500);
};

changePhoto();
setInterval(() => {
  changePhoto();
}, 30000);

window.onscroll = function (ev) {
  if (!done && window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    done = true;
    setTimeout(() => {
      document.querySelector(".landing-end--text").classList.add("invisible");
      setTimeout(() => {
        document.querySelector(".landing-end--button").classList.add("visible");
      }, 1500);
    }, 2000);
  }
};
