let fade = document.querySelector('#fade');
let btnMenu = document.querySelector('#menu-input');
let btnProfile = document.querySelector('.box-profile');
let btnSearch = document.querySelector('#btn-search');
let search = document.querySelector('#pesquisa'); 
let navLeft = document.querySelector('.nav-left');
let modalProfile = document.querySelector('.modal-profile');
let load = document.querySelector('.loading');
let res = document.querySelector('.res');
let divRes = document.querySelector('.resultado');
let inputFavorite = document.querySelectorAll('.favorite-on');
let imgFavorite = document.querySelectorAll('.imgFavorite');

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
        divRes.classList.add('visible');
        res.innerText = search.value;
    }
    setTimeout(back, 6000);
});

btnProfile.addEventListener('mouseover', function() {
    modalProfile.classList.add('visible');pesquisa
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

$(function(){ 

    $("#pesquisa").keyup(function(){
      var texto = $(this).val();
      
      $(".card").each(function(){
        var resultado = $(this).text().toUpperCase().indexOf(' '+texto.toUpperCase());
        
        if(resultado < 0) {
          $(this).fadeOut();
        }else {
          $(this).fadeIn();
        }
      }); 
  
    });
  
  });

  for (let i = 0; i < inputFavorite.length; i++) {
    inputFavorite[i].addEventListener('click', function(){
        if (inputFavorite[i].checked) {
            imgFavorite[i].setAttribute('src', 'img/favorite-on.png');
        } else {
            imgFavorite[i].setAttribute('src', 'img/favorite-off.png');
        }
    });
  }
