//slide-wrap
var slideWrapper_3 = document.getElementById('slider-wrap-3');
//current slideIndexition
var slideIndex_3 = 0;
//items
var slides_3 = document.querySelectorAll('#slider-wrap-3 ul li');
//number of slides
var totalSlides_3 = slides_3.length;
//get the slide width
var sliderWidth_3 = slideWrapper_3.clientWidth;
//set width of items
slides_3.forEach(function (element) {
    element.style.width = sliderWidth_3 + 'px';
})
//set width to be 'x' times the number of slides
var slider_3 = document.querySelector('#slider-wrap-3 ul#slider');
slider_3.style.width = sliderWidth_3 * totalSlides_3 + 'px';

// next, prev
var nextBtn_3 = document.getElementById('next-3');
var prevBtn_3 = document.getElementById('previous-3');
nextBtn_3.addEventListener('click', function () {
    plusSlides_3(1);
});
prevBtn_3.addEventListener('click', function () {
    plusSlides_3(-1);
});

// hover
slideWrapper_3.addEventListener('mouseover', function () {
    this.classList.add('active');
    // clearInterval(autoSlider_3);
});
slideWrapper_3.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    // autoSlider_3 = setInterval(function () {
    //     plusSlides_3(1);
    // }, 5000);
});


function plusSlides_3(n) {
    showSlides_3(slideIndex_3 += n);
}

function currentSlides_3(n) {
    showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
    slideIndex_3 = n;
    if (slideIndex_3 == -1) {
        slideIndex_3 = totalSlides_3 - 1;
    } else if (slideIndex_3 === totalSlides_3) {
        slideIndex_3 = 0;
    }

    slider_3.style.left = -(sliderWidth_3 * slideIndex_3) + 'px';
    pagination_3();
}

//pagination
slides_3.forEach(function () {
    var li = document.createElement('li');
    document.querySelector('#slider-pagination-wrap-3 ul').appendChild(li);
})

function pagination_3() {
    var dots = document.querySelectorAll('#slider-pagination-wrap-3 ul li');
    dots.forEach(function (element) {
        element.classList.remove('active');
    });
    dots[slideIndex_3].classList.add('active');
}

pagination_3();
// var autoSlider_3 = setInterval(function () {
//     plusSlides_3(1);
// }, 5000);