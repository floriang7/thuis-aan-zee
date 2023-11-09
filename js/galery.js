// Images
const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");
const img4 = document.querySelector("#img-4");
const img5 = document.querySelector("#img-5");
const img6 = document.querySelector("#img-6");
const img7 = document.querySelector("#img-7");
const img8 = document.querySelector("#img-8");
const img9 = document.querySelector("#img-9");
const img10 = document.querySelector("#img-10");
const img11 = document.querySelector("#img-11");
const img12 = document.querySelector("#img-12");
const img13 = document.querySelector("#img-13");
const img14 = document.querySelector("#img-14");
const img15 = document.querySelector("#img-15");
const img16 = document.querySelector("#img-16");
const img17 = document.querySelector("#img-17");
const img18 = document.querySelector("#img-18");
const img19 = document.querySelector("#img-19");
const img20 = document.querySelector("#img-20");
const img21 = document.querySelector("#img-21");
const img22 = document.querySelector("#img-22");
const img23 = document.querySelector("#img-23");
const img24 = document.querySelector("#img-24");
const img25 = document.querySelector("#img-25");
const img26 = document.querySelector("#img-26");
const img27 = document.querySelector("#img-27");

const images = [
  img21,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img17,
  img7,
  img18,
  img8,
  img9,
  img22,
  img23,
  img24,
  img25,
  img26,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img20,
  img27
];

// Photoswipe
var pswpElement = document.querySelectorAll(".pswp")[0];

// Items array
var items = [
  {
    src: "../img/vakantieverblijf.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/vakantieverblijf.JPG",
  },
  {
    src: "../img/slaapkamer.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/slaapkamer.JPG",
  },
  {
    src: "../img/living-boven.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/living-boven.JPG",
  },
  {
    src: "../img/badkamer.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/badkamer.JPG",
  },
  {
    src: "../img/lavabo.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/lavabo.JPG",
  },
  {
    src: "../img/living-beneden.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/living-beneden.JPG",
  },
  {
    src: "../img/slaapkamer-beneden.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/slaapkamer-beneden.JPG",
  },
  {
    src: "../img/slaapkamer-2-beneden.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/slaapkamer-2-beneden.JPG",
  },
  {
    src: "../img/keuken.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/keuken.JPG",
  },
  {
    src: "../img/keuken2.JPG",
    w: 1400,
    h: 900,
    msrc: "../img/keuken2.JPG",
  },
  {
    src: "../img/badkamer-beneden.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/badkamer-beneden.JPG",
  },
  {
    src: "../img/tuin-vakantiehuis.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/tuin-vakantiehuis.JPG",
  },
  {
    src: "../img/logies-slaapkamer.jpg",
    w: 1400,
    h: 900,
    msrc: "../img/logies-slaapkamer.jpg",
  },
  {
    src: "../img/logies-badkamer.jpg",
    w: 800,
    h: 1200,
    msrc: "../img/logies-badkamer.jpg",
  },
  {
    src: "../img/logies-living.jpg",
    w: 1400,
    h: 900,
    msrc: "../img/logies-living.jpg",
  },
  {
    src: "../img/logies-koffiehoek.jpg",
    w: 1200,
    h: 900,
    msrc: "../img/logies-koffiehoek.jpg",
  },
  {
    src: "../img/verzorgingsproducten.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/verzorgingsproducten.JPG",
  },
  {
    src: "../img/ontbijt1.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/ontbijt1.JPG",
  },
  {
    src: "../img/ontbijt2.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/ontbijt2.JPG",
  },
  {
    src: "../img/ontbijt3.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/ontbijt3.JPG",
  },
  {
    src: "../img/toren.jpg",
    w: 1200,
    h: 900,
    msrc: "../img/toren.jpg",
  },
  {
    src: "../img/strand.jpg",
    w: 1200,
    h: 900,
    msrc: "../img/strand.jpg",
  },
  {
    src: "../img/sloot.jpg",
    w: 1200,
    h: 900,
    msrc: "../img/sloot.jpg",
  },
  {
    src: "../img/2cv.jpg",
    w: 1200,
    h: 900,
    msrc: "../img/2cv.jpg",
  },
  {
    src: "../img/zonsondergang.jpg",
    w: 1200,
    h: 900,
    msrc: "../img/zonsondergang.jpg",
  },
  {
    src: "../img/zeedijk.JPG",
    w: 1200,
    h: 900,
    msrc: "../img/zeedijk.jpg",
  },
];

let galleryIndex = 0;

// Functions
const showPhotoswipe = (img) => {
  galleryIndex = images.indexOf(img);

  // define options (if needed)
  var options = {
    // optionName: 'option value'
    // for example:
    index: galleryIndex, // 0 start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe(
    pswpElement,
    PhotoSwipeUI_Default,
    items,
    options
  );
  gallery.init();
};

//Event handler for the images
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    showPhotoswipe(img);
  });
});
