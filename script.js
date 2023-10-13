$(document).ready(function () {
    // Close the navbar when a link is clicked
    $("#navbar a").on("click", function () {
        $("#navbar").collapse("hide");
    });
});


$(document).ready(function () {
    // Initialize the carousel
    const $carousel = $('#carouselExampleCaptions');

    $carousel.on('slide.bs.carousel', function (e) {
        // Get the index of the active slide
        const activeSlideIndex = e.to;

        // Array of title content for each slide
        const slideTitle = [
            "Linear Regression",
            "Single/Batch Perceptron",
            "Parzen Windows",

        ];

        // Array of title content for each slide
        const slideText = [
            "Implementation of a basic linear regression model used for predicting the price of a house based on its size and age. The model is trained using the gradient descent algorithm. Matplotlib is used for visualizing the data and the model's predictions in 3D space.",
            "Created a Single and Batch Perceptron model to explore the classifier boundaries of an input 2D dataset. Both fixed and variable learning rates were used to train the models. Matplotlib was used to visualize the updates the model made, as well as to display the most accurate surface boundary.",
            "Implement Parzen window classifiers using both hypercube and Gaussian window functions. Categorize independent 1D samples and determine the \"best\" window width through detailed analysis, including animated plots.",
        ];

        const slideLink = [
            "https://github.com/nikbarb810/Pattern-Recognition/tree/main/LinearRegression",
            "https://github.com/nikbarb810/Pattern-Recognition/tree/main/Perceptron",
            "https://github.com/nikbarb810/Pattern-Recognition/tree/main/MLE-Parzen-KNN",
         ];



        // Update the text content in the empty column
        const $titleColumn = $('#carousel_Title');
        $titleColumn.text(slideTitle[activeSlideIndex]);

        const $textColumn = $('#carousel_descr');
        $textColumn.text(slideText[activeSlideIndex]);

        const $linkColumn = $('#carousel_btn');
        //change href attribute
        $linkColumn.attr("href", slideLink[activeSlideIndex]);

    });
});


window.addEventListener('load', (event) => {

    hidden_fade_elems = document.querySelectorAll('.hidden');
    console.log(hidden_fade_elems);

    createObserver();
}, false,
);

function createObserver() {

    let observer;

    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '85px 0px 0px 0px',
        threshold: 0.6,
    };

    observer = new IntersectionObserver(callback, options);

    hidden_fade_elems.forEach(elem => {
        observer.observe(elem);
    });
}



let callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}






