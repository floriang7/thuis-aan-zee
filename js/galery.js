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
const img17 = document.querySelector('#img-17');
const img18 = document.querySelector('#img-18');
const img19 = document.querySelector('#img-19');
const img20 = document.querySelector('#img-20');

const images = [img1, img2, img3, img4, img5, img6, img17, img7, img18, img8, img9, img19, img10, img11, img12, img13, img14, img15, img16, img20];


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
        src: '../img/badkamer.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/badkamer.JPG'
    }
    ,
    {
        src: '../img/lavabo.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/lavabo.JPG'
    }
    ,
    {
        src: '../img/living-beneden.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/living-beneden.JPG'
    }
    ,
    {
        src: '../img/slaapkamer-beneden.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/slaapkamer-beneden.JPG'
    },
    {
        src: '../img/slaapkamer-2-beneden.JPG',
        w: 1400,
        h: 900,
        msrc: '../img/slaapkamer-2-beneden.JPG'
    }
    ,
    {
        src: '../img/keuken.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/keuken.JPG'
    },
    {
        src: '../img/keuken2.JPG',
        w: 1400,
        h: 900,
        msrc: '../img/keuken2.JPG'
    }
    ,
    {
        src: '../img/badkamer-beneden.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/badkamer-beneden.JPG'
    }
    ,
    {
        src: '../img/tuin.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/tuin.JPG'
    }
    ,
    {
        src: '../img/tuinkamer.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/tuinkamer.JPG'
    }
    ,
    {
        src: '../img/ontbijt1.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/ontbijt1.JPG'
    }
    ,
    {
        src: '../img/ontbijt2.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/ontbijt2.JPG'
    },
    {
        src: '../img/ontbijt3.JPG',
        w: 1200,
        h: 900,
        msrc: '../img/ontbijt3.JPG'
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
    ,
    {
        src: '../img/zonsondergang.JPG',
        w: 1400,
        h: 900,
        msrc: '../img/zonsondergang.JPG'
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









