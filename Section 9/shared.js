var backdrop = document.querySelector('.backdrop');
var buttons = document.querySelectorAll('.plan .button');
var modal = document.querySelector('.modal');
// console.dir(backdrop);

console.dir(buttons);

buttons.forEach(element => {
    element.addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.classList.add('open');
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
    })
});


var yesButton = document.querySelector('.modal__action');
var noButton = document.querySelector('.modal__action--negative');
if (yesButton) {
    yesButton.addEventListener('click', closeModal);
}

if (noButton) {
    noButton.addEventListener('click', closeModal);
}

var hamburger = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', () => {
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = "none";
    mobileNav.classList.remove('open');
    closeModal();
})


function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}