// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get all img elements
    var images = document.querySelectorAll('img');

    // Loop through each image and add the loading="lazy" attribute
    images.forEach(function (img) {
        img.setAttribute('loading', 'lazy');
    });
});
