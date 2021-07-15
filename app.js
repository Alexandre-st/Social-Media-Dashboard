let body = document.querySelector('.theme-toggle');
let toggle = document.getElementById("checkbox");
let header = document.getElementById('header');
let social = document.getElementById('social');
let overview = document.getElementById('overview');

toggle.addEventListener('click', evt => {
  if (toggle.checked) {
    header.classList.add('dark');
    social.classList.add('social-dark');
    overview.classList.add('overview-dark');
  }
  else {
    header.classList.remove('dark');
    social.classList.remove('social-dark');
    overview.classList.remove('overview-dark');
  }
});
