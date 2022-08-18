//slide-wrap
var slideWrapper_1 = document.getElementById('slider-wrap-1');
//current slideIndexition
var slideIndex_1 = 0;
//items
var slides_1 = document.querySelectorAll('#slider-wrap-1 ul li');
//number of slides
var totalSlides_1 = slides_1.length;
//get the slide width
var sliderWidth_1 = slideWrapper_1.clientWidth;
//set width of items
slides_1.forEach(function (element) {
    element.style.width = sliderWidth_1 + 'px';
})
//set width to be 'x' times the number of slides
var slider_1 = document.querySelector('#slider-wrap-1 ul#slider');
slider_1.style.width = sliderWidth_1 * totalSlides_1 + 'px';

// next, prev
var nextBtn_1 = document.getElementById('next-1');
var prevBtn_1 = document.getElementById('previous-1');
nextBtn_1.addEventListener('click', function () {
    plusSlides_1(1);
});
prevBtn_1.addEventListener('click', function () {
    plusSlides_1(-1);
});

// hover
slideWrapper_1.addEventListener('mouseover', function () {
    this.classList.add('active');
    clearInterval(autoSlider_1);
});
slideWrapper_1.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    autoSlider_1 = setInterval(function () {
        plusSlides_1(1);
    }, 5000);
});


function plusSlides_1(n) {
    showSlides_1(slideIndex_1 += n);
}

function currentSlides_1(n) {
    showSlides_1(slideIndex_1 = n);
}

function showSlides_1(n) {
    slideIndex_1 = n;
    if (slideIndex_1 == -1) {
        slideIndex_1 = totalSlides_1 - 1;
    } else if (slideIndex_1 === totalSlides_1) {
        slideIndex_1 = 0;
    }

    slider_1.style.left = -(sliderWidth_1 * slideIndex_1) + 'px';
    pagination_1();
}

//pagination
slides_1.forEach(function () {
    var li = document.createElement('li');
    document.querySelector('#slider-pagination-wrap-1 ul').appendChild(li);
})

function pagination_1() {
    var dots = document.querySelectorAll('#slider-pagination-wrap-1 ul li');
    dots.forEach(function (element) {
        element.classList.remove('active');
    });
    dots[slideIndex_1].classList.add('active');
}

pagination_1();
var autoSlider_1 = setInterval(function () {
    plusSlides_1(1);
}, 5000);