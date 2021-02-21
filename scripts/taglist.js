const tag = document.querySelector('.tag');

function substitutionOfHeading () {
  const title = document.querySelector('h1');

  if (title.textContent === 'Отмечено тегом «work»') {
    title.textContent = 'Всё про работу';
  }
  else if (title.textContent === 'Отмечено тегом «home»') {
    title.textContent = 'Совсем не про работу'
  }
}

if (body.contains(tag)){
  substitutionOfHeading ();
}