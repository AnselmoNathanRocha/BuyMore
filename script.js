let fade = document.querySelector('#fade');
let btnMenu = document.querySelector('#menu-input');
let btnProfile = document.querySelector('.box-profile');
let btnSearch = document.querySelector('#btn-search');
let search = document.querySelector('#search-input'); 
let navLeft = document.querySelector('.nav-left');
let modalProfile = document.querySelector('.modal-profile');
let load = document.querySelector('.loading');

btnMenu.addEventListener('click', function() {
    navLeft.classList.toggle('hide-main');
    fade.classList.toggle('fade');
});

btnSearch.addEventListener('click', function() {
    fade.classList.toggle('fade-search');
    load.classList.toggle('visible');
        
    function back() {
        fade.classList.toggle('fade-search');
        load.classList.toggle('visible');
    }
    setTimeout(back, 4000);
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