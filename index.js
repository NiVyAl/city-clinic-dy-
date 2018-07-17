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

var menuBtn = document.getElementById('menuBtn');
var menuAction = document.querySelector('.menu-action');
var isActive = false;

var menuActive = function() {
    if (isActive) {
        menuAction.classList.add('none');
        menuBtn.classList.remove('menu-active');
        isActive = false;
    } else {
        menuAction.classList.remove('none');
        menuBtn.classList.add('menu-active');
        isActive = true;
    }
};