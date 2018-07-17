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
var menuText = document.querySelector('.menu-text');
var isActiveMenu = false;

var menuActive = function() {
    if (isActivePhone == false) {
        if (isActiveMenu) {
            menuAction.classList.add('none');
            menuText.innerHTML = 'Меню';
            menuBtn.classList.remove('menu-active');
            isActiveMenu = false;
        } else {
            menuAction.classList.remove('none');
            menuText.innerHTML = 'закрыть Меню';
            menuBtn.classList.add('menu-active');
            isActiveMenu = true;
        }    
    } else {
        phoneAction.classList.add('none');
        menuText.innerHTML = 'Меню';
        menuBtn.classList.remove('menu-active');
        phoneContainer.style.opacity = 1;
        isActivePhone = false;
    };
};

var phoneAction = document.querySelector('.phone-action');
var isActivePhone = false;
var phoneContainer = document.querySelector('.phone');

var phoneActive = function() {
    if (isActivePhone == false) {
        phoneAction.classList.remove('none');
        menuText.innerHTML = 'закрыть форму';
        menuBtn.classList.add('menu-active');
        phoneContainer.style.opacity = 0;
        isActivePhone = true;
    }
}