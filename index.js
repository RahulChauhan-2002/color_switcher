const body = document.querySelector('body'); 
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(item) {
    item.addEventListener('click', function(event) {
        const color = event.target.id;
        body.style.backgroundColor = color;
    });
});
