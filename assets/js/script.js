const btnMenu = document.querySelector(".btnMenu");
const navMenu = document.querySelector('.menu');
// window.addEventListener('resize', function() {
//     let screenWidth = window.innerWidth || document.documentElement.clientWidth;
//     if(screenWidth <= 768) {
//         btnMenu.classList.remove('hide')
//         navMenu.classList.add('hide')
//     } else {
//         btnMenu.classList.add('hide')
//         navMenu.classList.remove('hide')
//     }
// });

// btnMenu.addEventListener('click', function() {
//     if(this.classList.contains('is-close')) {
//         this.classList.replace('fa-bars', 'fa-x')
//         this.classList.replace('is-close', 'is-open')
//         navMenu.classList.remove('hide')
//     } else {
//         this.classList.replace('fa-x', 'fa-bars')
//         this.classList.replace('is-open', 'is-close')
//         navMenu.classList.add('hide')
//     }
// })


function handleScreenSizeChange() {
    screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth <= 768) {
        if(btnMenu.classList.contains('fa-xmark')) {
            btnMenu.classList.replace('fa-xmark', 'fa-bars');
        }
        btnMenu.classList.remove('hide');
        navMenu.classList.add('hide');
    } else {
        btnMenu.classList.add('hide');
        navMenu.classList.remove('hide');
    }
}

window.addEventListener('resize', handleScreenSizeChange);
handleScreenSizeChange();

btnMenu.addEventListener('click', function () {
    if (btnMenu.classList.contains('fa-bars')) {
        btnMenu.classList.replace('fa-bars', 'fa-xmark');
        navMenu.classList.remove('hide')
    } else {
        btnMenu.classList.replace('fa-xmark', 'fa-bars');
        navMenu.classList.add('hide')
    }
})

