document.querySelector('#light-mode').addEventListener('click', lightMode);
document.querySelector('#dark-mode').addEventListener('click', darkMode);
document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
}

const page = document.querySelector('html');
const theme = localStorage.getItem('cococentTheme');

if (theme) {
    page.setAttribute('data-bs-theme', theme);
}

function lightMode() {
    page.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('cococentTheme', 'light');
}

function darkMode() {
    page.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('cococentTheme', 'dark');
}
