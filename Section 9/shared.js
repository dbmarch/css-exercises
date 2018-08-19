var backdrop = document.querySelector('.backdrop');
var buttons = document.querySelectorAll('.plan .button');
var modal = document.querySelector('.modal');
// console.dir(backdrop);

console.dir(buttons);

buttons.forEach(element => {
    element.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    })
});


var yesButton = document.querySelector('.modal__action');
var noButton = document.querySelector('.modal__action--negative');

yesButton.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
})

noButton.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
})

