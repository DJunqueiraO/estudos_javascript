const navigatorToggler = document.getElementById('navigator-toggler');
const navigator = document.getElementById('navigator');
const navigatorLis = document.getElementsByClassName('navigator-li');

navigatorToggler.addEventListener('click', () => {
    navigatorToggler.classList.toggle('open');
    let height = navigatorLis[0].offsetHeight * navigatorLis.length;
    navigator.style.height = !navigatorToggler.classList.contains('open') ? '0' : `${height}px`;
});