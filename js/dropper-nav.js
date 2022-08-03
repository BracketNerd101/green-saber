// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 230) {
        document.getElementById("nav-dropper").style.top = "0";
    } else {
        document.getElementById("nav-dropper").style.top = "-150px";
    }
}