// Images
const img1 = document.querySelector('#img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');
const img4 = document.querySelector('#img-4');
const img5 = document.querySelector('#img-5');
const img6 = document.querySelector('#img-6');
const img7 = document.querySelector('#img-7');
const img8 = document.querySelector('#img-8');
const img9 = document.querySelector('#img-9');
const img10 = document.querySelector('#img-10');
const img11 = document.querySelector('#img-11');
const img12 = document.querySelector('#img-12');
const img13 = document.querySelector('#img-13');
const img14 = document.querySelector('#img-14');
const img15 = document.querySelector('#img-15');
const img16 = document.querySelector('#img-16');

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];


// Photoswipe
var pswpElement = document.querySelectorAll('.pswp')[0];

// Items array
var items = [
    {
        src: '../img/slaapkamer.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/slaapkamer.JPG'
    },
    {
        src: '../img/living-boven.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/living-boven.JPG'
    }
    ,
    {
        src: '../img/badkamer.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/badkamer.jpg'
    }
    ,
    {
        src: '../img/lavabo.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/lavabo.jpg'
    }
    ,
    {
        src: '../img/living-beneden.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/living-beneden.jpg'
    }
    ,
    {
        src: '../img/slaapkamer-beneden.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/slaapkamer-beneden.jpg'
    }
    ,
    {
        src: '../img/keuken.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/keuken.jpg'
    }
    ,
    {
        src: '../img/badkamer-beneden.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/badkamer-beneden.jpg'
    }
    ,
    {
        src: '../img/tuin.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/tuin.jpg'
    }
    ,
    {
        src: '../img/ontbijt1.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/ontbijt1.jpg'
    }
    ,
    {
        src: '../img/ontbijt2.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/ontbijt2.jpg'
    },
    {
        src: '../img/ontbijt3.jpg',
        w: 1200,
        h: 900,
        msrc: '../img/ontbijt3.jpg'
    },
    {
        src: '../img/toren.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/toren.JPG'
    },
    {
        src: '../img/strand.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/strand.JPG'
    },
    {
        src: '../img/sloot.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/sloot.JPG'
    },
    {
        src: '../img/2cv.JPG',
        w: 1400,
        h: 900,
        msrc: '../img/2cv.JPG'
    }
];



let galleryIndex = 0;

// Functions
const showPhotoswipe = (img) => {
    galleryIndex = images.indexOf(img);

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: galleryIndex  // 0 start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};


//Event handler for the images
images.forEach(img => {
    img.addEventListener('click', (e) => {
        showPhotoswipe(img);
    });
});









