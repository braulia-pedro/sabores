document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.banner .images img');
    const dots = document.querySelectorAll('.banner .dots .dot');

    let slideIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = images.length - 1;
        } else if (index >= images.length) {
            slideIndex = 0;
        }

        images.forEach(image => image.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        images[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }

    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        showSlide(slideIndex);
    }

    function setSlide(index) {
        slideIndex = index;
        showSlide(slideIndex);
    }

    let slideInterval = setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            setSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });

    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});