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


// Arrows
const owlPrev = document.querySelector('.owl-prev');
const owlNext = document.querySelector('.owl-next');

owlPrev.innerHTML += `<div class="arrow-left arrow"><svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.3613 13.5858C0.580248 14.3668 0.580248 15.6332 1.3613 16.4142L14.0892 29.1421C14.8703 29.9232 16.1366 29.9232 16.9176 29.1421C17.6987 28.3611 17.6987 27.0948 16.9176 26.3137L5.60394 15L16.9176 3.68629C17.6987 2.90524 17.6987 1.63891 16.9176 0.857865C16.1366 0.0768166 14.8703 0.0768165 14.0892 0.857865L1.3613 13.5858ZM5 13L2.77551 13L2.77551 17L5 17L5 13Z" fill="black"/>
    </svg></div>`;
owlNext.innerHTML += `<div class="arrow-right arrow"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.4142 16.6608C17.1953 15.8797 17.1953 14.6134 16.4142 13.8324L3.68625 1.10447C2.9052 0.323425 1.63887 0.323428 0.857827 1.10448C0.0767796 1.88553 0.0767833 3.15186 0.857834 3.93291L12.1716 15.2466L0.857895 26.5603C0.0768479 27.3414 0.0768516 28.6077 0.857902 29.3887C1.63895 30.1698 2.90528 30.1698 3.68633 29.3887L16.4142 16.6608ZM13 17.2466L15 17.2466L15 13.2466L13 13.2466L13 17.2466Z" fill="black"/>
    </svg></div>`;


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
const documentBlock = document.querySelector('#documentBlock');
const documentCross = document.querySelector('#documentClose');
const carouselItems = document.querySelector('#carouselItems');
const item = document.querySelector('.item');
// const owlStageOuter = document.querySelector('.owl-stage-outer');
const owlStage = document.querySelector('.owl-stage');
const documentBlockContent = document.querySelector('#documentBlockContent');
// const documentsNodes = documentBlockContent.childNodes;
// const itemsNodes = owlStage.childNodes;
// let owlStageOuterWidth = owlStageOuter.offsetWidth;

// function documentOpenTime(e) {
//     for (document of documentsNodes) {
//         document.style.cssText += 'display: none;';
//     }

//     let pageWidth = window.innerWidth;
//     let clickX = e.clientX;

//     let k = 0;
//     for (item of itemsNodes) {
//         if (item.closest('.active')) {
//             if (clickX <= pageWidth / 2) {
//                 if (item.firstChild.closest('.item1')) {
//                     document.getElementsByClassName('document-block__img1')[0].style += "display: block";
//                     documentOpen();
//                 } else if (item.firstChild.closest('.item2')) {
//                     document.getElementsByClassName('document-block__img2')[0].style += "display: block";
//                     documentOpen();
//                 } else if (item.firstChild.closest('.item3')) {
//                     document.getElementsByClassName('document-block__img3')[0].style += "display: block";
//                     documentOpen();
//                 } else if (item.firstChild.closest('.item4')) {
//                     document.getElementsByClassName('document-block__img4')[0].style += "display: block";
//                     documentOpen();
//                 } else if (item.firstChild.closest('.item5')) {
//                     document.getElementsByClassName('document-block__img5')[0].style += "display: block";
//                     documentOpen();
//                 }   
//             } else {
//                 if (item.firstChild.closest('.item1')) {
//                     // document.getElementsByClassName(`document-block__img${k+1}`)[0].style = "display: block";
//                     documentsNodes[k].style.cssText += "display: block";
//                     documentOpen();
//                 } else if (item.firstChild.closest('.item2')) {
//                     // document.getElementsByClassName(`document-block__img${k+1}`)[0].style = "display: block";
//                     documentsNodes[k].style.cssText += "display: block";
//                     documentOpen();
//                 } else if (item.firstChild.closest('.item3')) {
//                     // document.getElementsByClassName(`document-block__img${k+1}`)[0].style = "display: block";
//                     documentsNodes[k].style.cssText += "display: block";
//                     documentOpen();
//                 } else if (item.firstChild.closest('.item4')) {
//                     // document.getElementsByClassName(`document-block__img${k+1}`)[0].style = "display: block";
//                     documentsNodes[k].style.cssText += "display: block";
//                     documentOpen();
//                 } else if (item.firstChild.closest('.item5')) {
//                     // document.getElementsByClassName(`document-block__img${k+1}`)[0].style = "display: block";
//                     documentsNodes[k].style.cssText += "display: block";
//                     documentOpen();
//                 }  
//             }
//         }
//         k++;
//     }
// }

// carouselItems.addEventListener('click', (e) => {
//     documentOpenTime(e);
// })

function documentOpen() {
    documentBlock.classList.add('document_open');
    const documentScrollWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.cssText += `padding-right: ${documentScrollWidth}px`;
    body.style.cssText += "overflow-y: hidden";
}
function documentClose() {
    document.getElementsByClassName('document-block__img1')[0].style = "opacity: 0; visibility: hidden";
    documentBlock.classList.remove('document_open');
    body.style.cssText += "overflow-y: visible";
    body.style.cssText += `padding-right: 0`;
}

owlStage.addEventListener('click', () => {
    document.getElementsByClassName('document-block__img1')[0].style = "opacity: 1; visibility: visible";
    documentOpen();
})

// carouselItem1.addEventListener('click', () => {
//     document.getElementsByClassName('document-block__img1')[0].style = "display: block";
//     documentOpen();
// });
// carouselItem2.addEventListener('click', () => {
//     document.getElementsByClassName('document-block__img2')[0].style = "display: block";
//     documentOpen();
// });
// carouselItem3.addEventListener('click', () => {
//     document.getElementsByClassName('document-block__img3')[0].style = "display: block";
//     documentOpen();
// });
// carouselItem4.addEventListener('click', () => {
//     document.getElementsByClassName('document-block__img4')[0].style = "display: block";
//     documentOpen();
// });
// carouselItem5.addEventListener('click', () => {
//     document.getElementsByClassName('document-block__img5')[0].style = "display: block";
//     documentOpen();
// });

documentCross.addEventListener('click', (e) => {
    e.preventDefault();
    documentClose();
})
documentBlock.addEventListener('click', (e) => {
    if (!e.target.closest('.document-block__content')) {
        documentClose();
    }
})


// Catalog popup
const catalog = document.querySelector('#catalog');
const catalogPopup = document.querySelector('#catalogPopup');

catalog.addEventListener('click', () => {
    catalogPopup.classList.toggle('catalog_visible');
})
body.addEventListener('click', (e) => {
    if (!e.target.closest('.header__catalog-menu')) {
        catalogPopup.classList.remove('catalog_visible');
    }
})