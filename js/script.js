// Бургер меню

let burgerBtn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger__block'),
    burgerClose = document.querySelectorAll('.burger__btn'),
    burgerLink = document.querySelectorAll('.burger__block-list');

// меняем крестик

    function showMenu() {
        burgerMenu.style.left = burgerMenu.style.left == '0px' ? '-75%' : '0px';
        burgerClose[0].style.transform = burgerClose[0].style.transform == 'translateY(2px) rotate(-45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(2px) rotate(-45deg)';
        burgerClose[0].style.width = burgerClose[0].style.width == '25px' ? '20px' : '25px';
        burgerClose[1].style.display = burgerClose[1].style.display == 'none' ? 'block' : 'none'; 
        burgerClose[2].style.transform = burgerClose[2].style.transform == 'translateY(0px) rotate(45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(0px) rotate(45deg)';
        burgerClose[2].style.width = burgerClose[2].style.width == '25px' ? '20px' : '25px';
    }


    burgerBtn.addEventListener('click', showMenu);

    burgerLink.forEach(i => {
        i.addEventListener ('click', showMenu);
    });

//  Слайдер

let imgSlider = document.querySelectorAll('.slider__slide_img'),
    imgParent = document.querySelector('.slider__slide'),
    imgLink = document.querySelectorAll('.slider__slide_link'),
    next = document.querySelector('#next'),
    prev = document.querySelector('#prev');


let step = 0,
    offset = 1;

console.log(imgLink);
function hide() {
    imgSlider.forEach(i => {
        i.classList.remove('slider__slide_img-active');
    });
};
function show(active) {
    imgSlider[active].classList.add('slider__slide_img-active');
};

    next.addEventListener('click', () => {

        if(step + 1 < imgLink.length) {
            imgParent.appendChild(imgLink[step]);
            step++;
        } else {
            imgParent.appendChild(imgLink[step]);
            step = 0;
        };
    });

    next.addEventListener('click', () => {
        hide();
        if(offset + 1 < imgSlider.length) {
            show(offset + 1);
            offset++;
        } else {
            offset = 0
            show(offset);
        };
    });

    prev.addEventListener('click', () => {

        if(step - 1 >= 0) {
            step--;
            imgParent.prepend(imgLink[step]);
        } else {
            step = imgLink.length - 1;
            imgParent.prepend(imgLink[step]);
        };
    });

    prev.addEventListener('click', () => {
        hide();
        if(offset - 1 >= 0) {
            offset--;
            show(offset);
        } else {
            offset = imgSlider.length - 1;
            show(offset);
        };
    });
