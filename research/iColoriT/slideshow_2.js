//slide-wrap
var slideWrapper_2 = document.getElementById('slider-wrap-2');
//current slideIndexition
var slideIndex_2 = 0;
//items
var slides_2 = document.querySelectorAll('#slider-wrap-2 ul li');
//number of slides
var totalSlides_2 = slides_2.length;
//get the slide width
var sliderWidth_2 = slideWrapper_2.clientWidth;
//set width of items
slides_2.forEach(function (element) {
    element.style.width = sliderWidth_2 + 'px';
})
//set width to be 'x' times the number of slides
var slider_2 = document.querySelector('#slider-wrap-2 ul#slider');
slider_2.style.width = sliderWidth_2 * totalSlides_2 + 'px';

// next, prev
var nextBtn_2 = document.getElementById('next-2');
var prevBtn_2 = document.getElementById('previous-2');
nextBtn_2.addEventListener('click', function () {
    plusSlides_2(1);
});
prevBtn_2.addEventListener('click', function () {
    plusSlides_2(-1);
});

// hover
slideWrapper_2.addEventListener('mouseover', function () {
    this.classList.add('active');
    clearInterval(autoSlider_2);
});
slideWrapper_2.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    autoSlider_2 = setInterval(function () {
        plusSlides_2(1);
    }, 5000);
});


function plusSlides_2(n) {
    showSlides_2(slideIndex_2 += n);
}

function currentSlides_2(n) {
    showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
    slideIndex_2 = n;
    if (slideIndex_2 == -1) {
        slideIndex_2 = totalSlides_2 - 1;
    } else if (slideIndex_2 === totalSlides_2) {
        slideIndex_2 = 0;
    }

    slider_2.style.left = -(sliderWidth_2 * slideIndex_2) + 'px';
    pagination_2();
}

//pagination
slides_2.forEach(function () {
    var li = document.createElement('li');
    document.querySelector('#slider-pagination-wrap-2 ul').appendChild(li);
})

function pagination_2() {
    var dots = document.querySelectorAll('#slider-pagination-wrap-2 ul li');
    dots.forEach(function (element) {
        element.classList.remove('active');
    });
    dots[slideIndex_2].classList.add('active');
}

pagination_2();
var autoSlider_2 = setInterval(function () {
    plusSlides_2(1);
}, 5000);