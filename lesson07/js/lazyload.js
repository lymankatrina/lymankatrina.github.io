//preload placeholder image
function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if(!src) {
        return;
    }
    img.src = src;
}
// get images to load
const imagesToLoad = document.querySelectorAll('[data-src]');

//set parameters for intersectional observer
const imgOptions = {
    threshold: 0,
    rootMargin: "50px"
};

//check to see if image is intersecting view window
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}   else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

//load images and change data-src attribute
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
}