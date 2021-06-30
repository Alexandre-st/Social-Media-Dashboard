let body = document.querySelector('.theme-toggle');
let header = document.getElementById('header');
let toggle = document.getElementById("checkbox");
//TODO Il va falloir définir pour chaque composant son coté dark. 

toggle.addEventListener('click', evt => {
  if (toggle.checked) {
    body.classList.add('dark');
    header.classList.add('dark');
  }
  else {
    body.classList.remove('dark');
    header.classList.remove('dark');
  }
});

// document.getElementsByClassName('theme-toggle')[0].addEventListener('change', function(evt) {
//   (evt.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
// });