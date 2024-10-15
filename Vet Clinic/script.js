// Script for review carousel
document.addEventListener('DOMContentLoaded', () => {
    const reviewCarousel = document.querySelector('.review-carousel');
    let scrollAmount = 0;
    const scrollStep = 300; 
    const scrollInterval = 2000;

    function autoScroll() {
        if (scrollAmount <= reviewCarousel.scrollWidth - reviewCarousel.clientWidth) {
            reviewCarousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
            scrollAmount += scrollStep;
        } else {
            reviewCarousel.scrollTo({ left: 0, behavior: 'smooth' });
            scrollAmount = 0;
        }
    }

    setInterval(autoScroll, scrollInterval);
});
