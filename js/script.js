// Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:74,
    nav:true,
    dots:false,
    navContainer: '.documents__arrows',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
})


// To top
$('.go-to').click(function(e) {
    e.preventDefault();
    const link = this;
    $([document.documentElement, document.body]).animate({
        scrollTop: $(link.hash).offset().top
    }, 1400);
});

const toTop = document.querySelector('#to-top');
const windowPosition = window.scrollY;

if (windowPosition > 700) {
    toTop.classList.add('up_active')
}

window.onload = () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 700) {
            toTop.classList.add('up_active')
        } else {
            toTop.classList.remove('up_active')
        }
    })
}


// Copy
const footerPhone1 = document.querySelector('#footerPhone1');
const footerPhone2 = document.querySelector('#footerPhone2');
const successMessage = document.querySelector('#successMessage');

footerPhone1.addEventListener('click', () => {
    navigator.clipboard.writeText(footerPhone1.innerHTML);
    successMessage.classList.add('copy_active');
    setTimeout(() => successMessage.classList.remove('copy_active'), 2000);
})
footerPhone2.addEventListener('click', () => {
    navigator.clipboard.writeText(footerPhone2.innerHTML);
    successMessage.classList.add('copy_active');
    setTimeout(() => successMessage.classList.remove('copy_active'), 2000);
})


// Popup
const popup = document.querySelector('#popup');
const popupLink = document.querySelector('#popupLink');
const popupClose = document.querySelector('#popupClose');
const body = document.querySelector('.body');
const popupContent = document.querySelector('#popupContent');

function popupOpenFunction() {
    popup.classList.add('open');
    popupContent.classList.add('open');
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.cssText += `padding-right: ${scrollWidth}px`;
    body.style.cssText += "overflow-y: hidden";
}
function popupCloseFunction() {
    popup.classList.remove('open');
    popupContent.classList.remove('open');
    body.style.cssText += "overflow-y: visible";
    body.style.cssText += `padding-right: 0`;
}

popupLink.addEventListener('click', () => {
    popupOpenFunction();
})
popupClose.addEventListener('click', () => {
    popupCloseFunction()
})
popup.addEventListener('click', function(e) {
    if (!e.target.closest('.popup__content')) {
        popupCloseFunction()
    }
})


// Popup validator
const popupButton = document.querySelector('#popupButton');
const popupCheckbox = document.querySelector('#popupCheckbox');
const popupInput = document.querySelectorAll('#popupInput');
const popupCheckboxLabel = document.querySelector('#popupCheckboxLabel');

popupCheckboxLabel.addEventListener('click', () => {
    if (popupCheckbox.checked) {
        popupCheckbox.checked = false;
    } else {
        popupCheckbox.checked = true;
    }
})

popupButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (popupCheckbox.checked === false) {
        formAddError(popupCheckboxLabel);
    } else {
        formRemoveError(popupCheckboxLabel);
    }
    for (let index = 0; index < popupInput.length; index++) {
        const input = popupInput[index];

        if (input.value === '') {
            formAddError(input);
        }
        if (input.value !== '') {
            formRemoveError(input);
        }
    }

    if (popupCheckbox.checked && popupInput[0].value !== '' && popupInput[1].value !== '' && popupInput[2].value !== '') {
        for (let index = 0; index < popupInput.length; index++) {
            const input = popupInput[index];
    
            input.value = '';
            popupCloseFunction();
        }
    }
})

function formAddError(input) {
    input.classList.add('_error');
}
function formRemoveError(input) {
    input.classList.remove('_error');
}


// Form validator
const formInput = document.querySelectorAll('#formInput');
const formButton = document.querySelector('#formButton');
const checkbox = document.querySelector('#checkbox');
const checkboxLabel = document.querySelector('#checkboxLabel');

formButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (checkbox.checked === false) {
        formAddError(checkboxLabel);
    } else {
        formRemoveError(checkboxLabel);
    }
    for (let index = 0; index < formInput.length; index++) {
        const input = formInput[index];

        if (input.value === '') {
            formAddError(input);
        }
        if (input.value !== '') {
            formRemoveError(input);
        }
    }

    if (checkbox.checked && formInput[0].value !== '' && formInput[1].value !== '' && formInput[2].value !== '') {
        for (let index = 0; index < formInput.length; index++) {
            const input = formInput[index];
    
            input.value = '';
        }
    }
})


// Carousel open
const carouselItem1 = document.querySelector('#carouselItem1');
const carouselItem2 = document.querySelector('#carouselItem2');
const carouselItem3 = document.querySelector('#carouselItem3');
const carouselItem4 = document.querySelector('#carouselItem4');
const carouselItem5 = document.querySelector('#carouselItem5');
const documentBlock = document.querySelector('#documentBlock');
const documentCross = document.querySelector('#documentClose');

function documentOpen() {
    console.log('sdasd');
    documentBlock.classList.add('document_open');
    const documentScrollWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.cssText += `padding-right: ${documentScrollWidth}px`;
    body.style.cssText += "overflow-y: hidden";
}
function documentClose() {
    document.getElementsByClassName('document-block__img')[0].style = "display: none";
    documentBlock.classList.remove('document_open');
    body.style.cssText += "overflow-y: visible";
    body.style.cssText += `padding-right: 0`;
}

carouselItem1.addEventListener('click', () => {
    document.getElementsByClassName('document-block__img1')[0].style = "display: block";
    documentOpen();
});
carouselItem2.addEventListener('click', () => {
    document.getElementsByClassName('document-block__img2')[0].style = "display: block";
    documentOpen();
});
carouselItem3.addEventListener('click', () => {
    document.getElementsByClassName('document-block__img3')[0].style = "display: block";
    documentOpen();
});
carouselItem4.addEventListener('click', () => {
    document.getElementsByClassName('document-block__img4')[0].style = "display: block";
    documentOpen();
});
carouselItem5.addEventListener('click', () => {
    document.getElementsByClassName('document-block__img5')[0].style = "display: block";
    documentOpen();
});

documentCross.addEventListener('click', (e) => {
    e.preventDefault();
    documentClose();
})
documentBlock.addEventListener('click', (e) => {
    if (!e.target.closest('.document-block__content')) {
        documentClose();
    }
})