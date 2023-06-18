var currentSlide = 0; //משתנה שמגדיר ערך 0 ועוקב אחר השקופית המוצגת במצגת כעת

function nextSlide() { //פונקציה זו נקראת כאשר המשתמש רוצה לעבור לשקופית הבאה .
    currentSlide++; //הגדלת המשתנה ב1
    changeSlide(currentSlide); //קריאה לפונקציה והעברת הקורקט סלייד המעודכן 
}
function prevSlide() { //פונקציה זו נקראת כאשר המשתמש רוצה לעבור לשקופית הקודמת
    currentSlide--; //מקטין את המשתנה ב1
    changeSlide(currentSlide); //קריאה לפונקציה והעברת הקורקט סלייד המעודכן 
}

function changeSlide(slideNum) { // נקראת כאשר המשתמש לוחץ על תמונה ממוזערת או כאשר קוראים לפונקציות האחרות
    currentSlide = slideNum; 
    var caption = document.getElementById('altspace');
    if (slideNum > 4) {
        currentSlide = 0;
    }
    if (slideNum < 0) {
        currentSlide = 4;
    }
    var thumbnails = document.getElementsByClassName('thumbnail'); // יוצר מערך
    var slides = document.getElementsByClassName('slidephoto');
    for (var slide of slides) {
        slide.style.display = 'none';
    }
    for (var thumbnail of thumbnails) {
        thumbnail.style.opacity = 0.4;
        thumbnail.style.transition = 0.3;
    }

    thumbnails[currentSlide].style.opacity = 1;
    slides[currentSlide].style.display = 'block';
    caption.innerHTML = thumbnails[currentSlide].alt;

}
