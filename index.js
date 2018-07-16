var arrowContainer = document.querySelector('.arrow-container');

var arrow = function(num) {
    if (num == 4) {
        arrowContainer.classList.add('opacity');
    } else {
        arrowContainer.classList.remove('opacity');
        num++;
        arrowContainer.htmlFor = 'card' + num;    
    }
}


var treatmentSlide = document.querySelectorAll('.treatment-slide');
var treatmentContainer = document.querySelector('.treatment-container');

var next = function(direction) {
    console.log('next function');
    if (direction) {
        treatmentContainer.style.transform = 'translateX(50%)';
    }
}