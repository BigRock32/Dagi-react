'use strict'



// const mediaQuery = window.matchMedia('(min-width: 768px)')

// function handleTabletChange(e) {
//     if (e.matches) {

//         document.addEventListener('DOMContentLoaded', function(){
//             console.log('Ready');
//         })
//     }
// }

// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)


// function checkMediaQuery() {
//     if (window.innerWidth < 769) {
//         window.addEventListener('scroll', () => {
//             let scrollTop = window.pageYOffset;

//             if (scrollTop >= 10) {
//                 header.classList.remove('_fixed');
//             }else{
//                 header.classList.add('_fixed');
//             }
//         });
//     }
// }
// window.addEventListener('resize', checkMediaQuery);
//Конец анимации шапки


//Графика на первом экране

//Конец графики на первом экране


//Анимация аккордиона

let questBody = document.querySelector('.questions__question .questions__question-body')
let arrow = document.querySelector('.questions__question')

let questBodys = document.querySelectorAll('.questions__question-head')
let quest = document.querySelectorAll('.questions__question')

function initQuestion() {
    let firstQuestionBodyHeight = document.querySelector('.questions__question .questions__question-body > *').clientHeight
    questBody.style.maxHeight = firstQuestionBodyHeight + 'px'
}
initQuestion()

function questOpen() {

    let questionHeaderClickHandler = function (e) {
        quest.forEach(function (question) {
            question.querySelector('.questions__question-body').style.maxHeight = '0px'
            question.classList.remove('rotate')
        })

        let questionSection = e.target.closest('.questions__question')

        let insideElHeight = questionSection.querySelector('.questions__question-body > *').clientHeight

        questionSection.querySelector('.questions__question-body').style.maxHeight = insideElHeight + 'px'
        questionSection.classList.add('rotate')
    }
    arrow.classList.add('rotate')

    questBodys.forEach(function (question) {
        question.addEventListener('click', questionHeaderClickHandler)
    })
}
questOpen()
//Конец анимации аккордиона


//Прокрутка страницы
const menuLinks = document.querySelectorAll('header__link,footer__link,[data-goto]')
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

            if (burger.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                burger.classList.remove('_active')
                burgerMenu.classList.remove('_active')
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}
//Конец кода прокрутки страницы


//Анимация бургера
const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')
if (burger) {
    burger.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        burger.classList.toggle('_active')
        burgerMenu.classList.toggle('_active')
    })
}
//Конец анимации бургера


//Модальное окно
const btns = document.querySelectorAll('.popup-link')
const modal = document.querySelector('.modal')
const modals = document.querySelectorAll('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const cross = document.querySelectorAll('.modal__close-icon')
const formTitle = document.querySelector('.form__change-title')


if (btns.length > 0) {
    btns.forEach(btn => {
        let path = btn.dataset.path;

        switch (path) {
            case 'one':
                btn.addEventListener('click', btnHandler);
                break;
            case 'two':
                btn.addEventListener('click', btnHandler2);
                break;
        }
    })
}

cross.forEach((cros) => {
    cros.addEventListener('click', closeModal);
})


modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        closeModal()
    }
})


function openMpdal(path) {
    document.querySelector(`[data-target="${path}"]`).classList.add('_open');
    modalOverlay.classList.add('_open');
    document.body.classList.add('_lock');
}

function closeModal() {
    modals.forEach((modal) => {
        modal.classList.remove('_open')
    })
    modalOverlay.classList.remove('_open')
    document.body.classList.remove('_lock')
}

function btnHandler(e) {
    e.preventDefault()
    const path = e.currentTarget.getAttribute('data-path');
    openMpdal(path)
    const parent = e.target.closest('.popup-link');
    const title = parent.querySelector('.popup-title');
    const titleText = title.innerText;
    formTitle.innerText = titleText;
}

function btnHandler2(e) {
    e.preventDefault()
    const path = e.currentTarget.getAttribute('data-path');
    const currentModal = document.querySelector(`[data-target="${path}"]`)
    currentModal.querySelector('.form__change-title').innerText = e.target.innerText
    openMpdal(path)
}
//Конец кода модального окна


//Форма обратной связи
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)

        let formData = new FormData(form)

        if (error === 0) {
            form.classList.add('_sending')
            // let response = await fetch('sendmail.php',{
            //     method: 'POST',
            //     body: formData
            // })
            // if(response.ok){
            //     let result = await response.json()
            //     alert(result.message)
            //     formPreview.innerHtml = ''
            //     form.reset()
            //     form.classList.remove('_sending')
            // }else{
            //     alert('Ошибка')
            //     form.classList.remove('_sending')
            // }
        } else {
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(e) {
        let error = 0
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]
            formRemoveError(input)

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input)
                    error++
                }
            } else {
                if (input.value === '') {
                    formAddError(input)
                    error++
                }
            }
        }
        return error
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

    function emailTest(input) {
        return !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(input.value);
    }
})



//Горизонт скролл
gsap.registerPlugin(ScrollTrigger);

const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {

    var thisPinWrap = sec.querySelector('.pinWrap');
    var thisAnimWrap = thisPinWrap.querySelector('.animationWrap');

    var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);



    var size = window.innerHeight/5


    gsap.fromTo(thisAnimWrap, {
        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
    }, {
        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
        ease: "none",
        scrollTrigger: {
            // trigger: sec,
            start: () => "+=" + (-size) ,
            end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            //anticipatePin: 1,
            scrub: true,
            //markers: true,
        }
    });

});