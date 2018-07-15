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