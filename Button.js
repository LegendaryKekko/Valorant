let Oben = document.getElementById("Button");

window.onscroll = function() {
    scrollFunction();
};



function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        var element = document.getElementById("Button");
        element.classList.remove("b-hidden");
        element.classList.add("b-shown");


    } else {
        var element = document.getElementById("Button");
        element.classList.remove("b-shown");
        element.classList.add("b-hidden");

    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}