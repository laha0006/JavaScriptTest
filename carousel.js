const slides = document.querySelectorAll('.carousel-item');
console.log(slides.length);
console.log("Hello, World!");
for (let i = 1; i < slides.length; i++) {
    console.log("slides");
    console.log(slides[i]);
    slides[i].style.display = "none"
}
let slideNum = 0;
setInterval(() => {
    slides[slideNum].style.display = "none"
    slideNum++;
    if (slideNum === slides.length) {
        slideNum = 0;
    }
    slides[slideNum].style.display = "block";
},4500)