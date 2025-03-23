
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.header__nav-item')

    //popup
    const close = document.querySelector('.popup__close')
    const popupBtn = document.querySelectorAll('.header__right-btn')
    const popup = document.querySelector('.popup')
    const dark = document.querySelector('.dark')

    //menu
    const menuBtn = document.querySelector('.header__menu-img');
    const closeMenu = document.querySelector('.header__close');
    const nav = document.querySelector('.header__mobile-nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.remove('transform')
        dark.classList.remove('none');
        document.body.style.overflow = 'hidden'
    })
    closeMenu.addEventListener('click', () => {

        console.log("Клик по кнопке закрытия сработал!");

        nav.classList.add("transform");

        dark.classList.add("none");
        document.body.style.overflow = "auto";
    })

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            navItems.forEach((link) => link.classList.remove('active'))
            item.classList.add('active')
        })
    })

    popupBtn.forEach((btn) => {
        btn.addEventListener('click', () => {

            popup.classList.remove('none')
            dark.classList.remove('none');
            document.body.style.overflow = 'hidden'
            nav.classList.add('transform')
        })
    })

    close.addEventListener('click', () => {
        popup.classList.add('none')
        dark.classList.add('none');
        document.body.style.overflow = 'auto'
    })


    // БАЗОВАЯ ВАЛИДАЦИЯ ИНПУТОВ
    document.querySelector('#popup__input-name').addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s.]/g, '');
    });

    document.querySelector('#popup__input-tel').addEventListener('input', function () {
        this.value = '+' + this.value.replace(/[^0-9\s.]/g, '');
    });


})

