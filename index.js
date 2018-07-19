// кнопка next-page

var arrowContainer = document.querySelector('.arrow-container');

var arrow = function(num) { // num - номер инпута который ее вызвал
    if (num == 4) {
        arrowContainer.classList.add('opacity'); // на 4-ой карточке кнопка исчезает
    }
    else {
        if (num == 3) {
            arrowContainer.classList.add('last-arrow'); // на 3-ой карточке кнопке дается новый класс
        } else {
            arrowContainer.classList.remove('last-arrow');
        }
        arrowContainer.classList.remove('opacity');
        num++;
        arrowContainer.htmlFor = 'card' + num;    // при выборе инпута кнопка становится лэйблом к следующему инпуту 
    }
}

//



// слайдер на первом экране


var treatmentSlide = document.querySelectorAll('.treatment-slide'); // находим все слайды
var treatmentContainer = document.querySelector('.treatment-container'); // находим экран Treatment in Spain
var position = 0; // изначальная позиция по X у экрана Treatment in Spain

treatmentContainer.style.width = treatmentSlide.length * 100 + '%'; // в зависимости от количества слайдов изменяеться ширина экрана
for (var i=0; i < treatmentSlide.length; i++) {
    treatmentSlide[i].style.width = 100 / treatmentSlide.length + '%'; // определяем какой процент экрана занимает один слайд
    treatmentSlide[i].style.paddingTop = 4/treatmentSlide.length + '%'; // определяем padding-top в зависимости от ширины слайда
}

var next = function(direction) {    
    if (direction == 'f' && position > (100/treatmentSlide.length - 100)) {  // если направление f - forward и экран не сдвинут до максимума, то выполняеться условие
        position = position - 100/treatmentSlide.length; // позиция равна прошлая позиция минус ширина слайда
        //console.log(position);
        treatmentContainer.style.transform = 'translateX(' + position + '%)' ; // двигаем на новую позицию
    };
    if (direction == 'b' && position < 0){
        position = position + 100/treatmentSlide.length;
        //console.log(position);
        treatmentContainer.style.transform = 'translateX(' + position + '%)';
    };
}

//



// Global menu-action и call-action

var menuBtn = document.getElementById('menuBtn'); 
var menuAction = document.querySelector('.menu-action'); // раздел menu-action (до нажатия - скрытый)
var menuText = document.querySelector('.menu-text'); // текст у кнопки меню (меню/закрыть меню/закрыть форму)
var isActiveMenu = false;   // активность кнопки меню

var phoneAction = document.querySelector('.phone-action');  // раздел phone-action (до нажатия - скрытый)
var isActivePhone = false;
var phoneContainer = document.querySelector('.phone'); // номер телефона и кнопка (при активном phone-action исчезают)

var menuActive = function() { // вызываеться при нажатии кнопки меню
    if (isActivePhone == false) {   // если phone-action не активен
        if (isActiveMenu) {                     // а меню активно
            menuAction.classList.add('none');       // меню исчезает (display: none)
            menuText.innerHTML = 'Меню';        
            menuBtn.classList.remove('menu-active');
            isActiveMenu = false;
        } else {                                // меню не активно
            menuAction.classList.remove('none');
            menuText.innerHTML = 'закрыть Меню';
            menuBtn.classList.add('menu-active');
            isActiveMenu = true;
        }    
    } else {                     // если phone-action активен   
        phoneAction.classList.add('none');
        menuText.innerHTML = 'Меню';
        menuBtn.classList.remove('menu-active');
        phoneContainer.style.opacity = 1;   
        isActivePhone = false;
    };
};

var phoneActive = function() {     // при нажатии на заказать звонок
    if (isActivePhone == false) {   // если phone-action не активен
        phoneAction.classList.remove('none');
        menuText.innerHTML = 'закрыть форму';
        menuBtn.classList.add('menu-active');
        phoneContainer.style.opacity = 0;
        isActivePhone = true;
    }
}