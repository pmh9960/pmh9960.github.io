//slide-wrap
var slideWrapper_NNN = document.getElementById('slider-wrap-NNN');
//current slideIndexition
var slideIndex_NNN = 0;
//items
var slides_NNN = document.querySelectorAll('#slider-wrap-NNN ul li');
//number of slides
var totalSlides_NNN = slides_NNN.length;
//get the slide width
var sliderWidth_NNN = slideWrapper_NNN.clientWidth;
//set width of items
slides_NNN.forEach(function (element) {
    element.style.width = sliderWidth_NNN + 'px';
})
//set width to be 'x' times the number of slides
var slider_NNN = document.querySelector('#slider-wrap-NNN ul#slider');
slider_NNN.style.width = sliderWidth_NNN * totalSlides_NNN + 'px';

// next, prev
var nextBtn_NNN = document.getElementById('next-NNN');
var prevBtn_NNN = document.getElementById('previous-NNN');
nextBtn_NNN.addEventListener('click', function () {
    plusSlides_NNN(1);
});
prevBtn_NNN.addEventListener('click', function () {
    plusSlides_NNN(-1);
});

// hover
slideWrapper_NNN.addEventListener('mouseover', function () {
    this.classList.add('active');
    clearInterval(autoSlider_NNN);
});
slideWrapper_NNN.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    autoSlider_NNN = setInterval(function () {
        plusSlides_NNN(1);
    }, 5000);
});


function plusSlides_NNN(n) {
    showSlides_NNN(slideIndex_NNN += n);
}

function currentSlides_NNN(n) {
    showSlides_NNN(slideIndex_NNN = n);
}

function showSlides_NNN(n) {
    slideIndex_NNN = n;
    if (slideIndex_NNN == -1) {
        slideIndex_NNN = totalSlides_NNN - 1;
    } else if (slideIndex_NNN === totalSlides_NNN) {
        slideIndex_NNN = 0;
    }

    slider_NNN.style.left = -(sliderWidth_NNN * slideIndex_NNN) + 'px';
    pagination_NNN();
}

//pagination
slides_NNN.forEach(function () {
    var li = document.createElement('li');
    document.querySelector('#slider-pagination-wrap-NNN ul').appendChild(li);
})

function pagination_NNN() {
    var dots = document.querySelectorAll('#slider-pagination-wrap-NNN ul li');
    dots.forEach(function (element) {
        element.classList.remove('active');
    });
    dots[slideIndex_NNN].classList.add('active');
}

pagination_NNN();
var autoSlider_NNN = setInterval(function () {
    plusSlides_NNN(1);
}, 5000);