
const catSound = document.getElementById('cat-sounds');
const catPic = document.getElementById('cat-pic');
  
catPic.addEventListener('click', () => {
    catSound.play();
});
const dogSound = document.getElementById('dog-sounds');
const dogPic = document.getElementById('dog-pic');
  
dogPic.addEventListener('click', () => {
    dogSound.play();
});
const horseSound = document.getElementById('horse-sounds');
const horsePic = document.getElementById('horse-pic');
  
horsePic.addEventListener('click', () => {
    horseSound.play();
});