function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var source = document.getElementById('source');
var box = document.getElementById('box');
var info = document.getElementById('info');
let compteur = 0


const repetition = setInterval(() => {
  let value = getRandomIntInclusive(-10, 40)
  source.innerText = value
  compteur++

  if (-10 <= value && value <= 0) {
    box.style.border = '2px solid blue'
    info.innerText = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !"
  } else if (0 < value && value <= 20) {
    box.style.border = '2px solid green'
  } else if (20 < value && value <= 30) {
    box.style.border = '2px solid orange'
  } else if (30 < value && value <= 40) {
    box.style.border = '2px solid red'
    info.innerText = "Caliente ! Vamos a la playa, ho hoho hoho !!"
  }

  if (compteur == 20) {
    clearInterval(repetition)
  }
}, 2000);



