const avatarImg = document.querySelector('img');

function avatar () {
  const createDiv = document.createElement('div');
  const parentPlace = avatarImg.parentNode;
  parentPlace.classList.add('mainpage__avatar-place');
  createDiv.classList.add('mainpage__avatar-blue');
  parentPlace.append(createDiv);
}

avatarImg.addEventListener('click', avatar);