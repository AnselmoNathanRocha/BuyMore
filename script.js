let btnMenu = document.querySelector('#menu-input');
let btnProfile = document.querySelector('.box-profile');
let search = document.querySelector('#search-input'); 
let navLeft = document.querySelector('.nav-left');
let modalProfile = document.querySelector('.modal-profile');

btnMenu.addEventListener('click', function() {
    navLeft.classList.toggle('hide-main');
});

btnProfile.addEventListener('mouseover', function() {
    modalProfile.classList.add('visible');
});
btnProfile.addEventListener('mouseout', function() {
    modalProfile.classList.remove('visible');
});
modalProfile.addEventListener('mouseover', function() {
    modalProfile.classList.add('visible');
});
modalProfile.addEventListener('mouseout', function() {
    modalProfile.classList.remove('visible');
});

search.addEventListener('focus', function() {
    search.setAttribute('placeholder', 'Pesquise por produtos');
});
search.addEventListener('blur', function() {
    search.removeAttribute('placeholder', 'Pesquise por produtos');
});