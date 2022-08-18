//slide-wrap
var slideWrapper_4 = document.getElementById('slider-wrap-4');
//current slideIndexition
var slideIndex_4 = 0;
//items
var slides_4 = document.querySelectorAll('#slider-wrap-4 ul li');
//number of slides
var totalSlides_4 = slides_4.length;
//get the slide width
var sliderWidth_4 = slideWrapper_4.clientWidth;
//set width of items
slides_4.forEach(function (element) {
    element.style.width = sliderWidth_4 + 'px';
})
//set width to be 'x' times the number of slides
var slider_4 = document.querySelector('#slider-wrap-4 ul#slider');
slider_4.style.width = sliderWidth_4 * totalSlides_4 + 'px';

// next, prev
var nextBtn_4 = document.getElementById('next-4');
var prevBtn_4 = document.getElementById('previous-4');
nextBtn_4.addEventListener('click', function () {
    plusSlides_4(1);
});
prevBtn_4.addEventListener('click', function () {
    plusSlides_4(-1);
});

// hover
slideWrapper_4.addEventListener('mouseover', function () {
    this.classList.add('active');
    clearInterval(autoSlider_4);
});
slideWrapper_4.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    autoSlider_4 = setInterval(function () {
        plusSlides_4(1);
    }, 5000);
});


function plusSlides_4(n) {
    showSlides_4(slideIndex_4 += n);
}

function currentSlides_4(n) {
    showSlides_4(slideIndex_4 = n);
}

function showSlides_4(n) {
    slideIndex_4 = n;
    if (slideIndex_4 == -1) {
        slideIndex_4 = totalSlides_4 - 1;
    } else if (slideIndex_4 === totalSlides_4) {
        slideIndex_4 = 0;
    }

    slider_4.style.left = -(sliderWidth_4 * slideIndex_4) + 'px';
    pagination_4();
}

//pagination
slides_4.forEach(function () {
    var li = document.createElement('li');
    document.querySelector('#slider-pagination-wrap-4 ul').appendChild(li);
})

function pagination_4() {
    var dots = document.querySelectorAll('#slider-pagination-wrap-4 ul li');
    dots.forEach(function (element) {
        element.classList.remove('active');
    });
    dots[slideIndex_4].classList.add('active');
}

pagination_4();
var autoSlider_4 = setInterval(function () {
    plusSlides_4(1);
}, 5000);