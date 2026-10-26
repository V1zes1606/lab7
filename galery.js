
(function () {
    "use strict";

    var track = document.getElementById("sliderTrack");
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var pager = document.getElementById("pager");
    
    var currentIndex = 0;
    var totalSlides = 8;
    var visibleSlides = 3;

    function updateSlider() {
        var maxIndex;
        var totalPages;
        var currentPage;
        var slideWidth;

        if (window.innerWidth <= 600) {
            visibleSlides = 1;
        } else {
            visibleSlides = 3;
        }

        maxIndex = totalSlides - visibleSlides;
        

        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        totalPages = totalSlides - visibleSlides + 1;
        currentPage = currentIndex + 1;


        slideWidth = 100 / visibleSlides;
        track.style.transform = "translateX(-" + (currentIndex * slideWidth) + "%)";

        if (pager) {
            pager.textContent = "Страница: " + currentPage + " из " + totalPages;
        }


        if (prevBtn && nextBtn) {
            prevBtn.disabled = (currentIndex === 0);
            nextBtn.disabled = (currentIndex === maxIndex);
        }
    }

    if (prevBtn && nextBtn && track) {
        prevBtn.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex -= 1;
                updateSlider();
            }
        });

        nextBtn.addEventListener("click", function () {
            var maxIndex = totalSlides - visibleSlides;
            if (currentIndex < maxIndex) {
                currentIndex += 1;
                updateSlider();
            }
        });

        window.addEventListener("resize", updateSlider);
        updateSlider();
    }
}());
