function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var source = document.getElementById('source');
let compteur = 0


const repetition = setInterval(() => {
  source.innerText = getRandomIntInclusive(-10, 40)
  compteur++

  if (compteur == 20) {
    clearInterval(repetition)
  }
}, 2000);



