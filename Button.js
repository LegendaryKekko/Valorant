const scrollUp = document.querySelector('.scrollUp');

window.addEventListener('scoll', () => {
    if (window.pageYOffset > 100) {
        scrollUp.classList.add("active");
    } else {
        scrollUp.classList.remove("active")
    }


})