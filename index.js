var arrowContainer = document.querySelector('.arrow-container');

var arrow = function(num) {
    num++;
    arrowContainer.htmlFor = 'card' + num;
}