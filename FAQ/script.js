let buttonImg = document.querySelectorAll('#buttonImg');


buttonImg.forEach((button) => {
    button.addEventListener('click', (renderButton) )
}); 



function renderButton(event) {
    const parent = event.target.closest('.accordian-item');
    const content = parent.querySelector('.accordian-item-content');
    const img = parent.querySelector('img');
    img.src = img.src.includes('plus') ? 'images/icon-minus.svg' : 'images/icon-plus.svg';
    content.classList.toggle('show');

    
}


// todo 1: obtain the class to "show" and remove "show"
// todo 2: obtain the image so it can be changed