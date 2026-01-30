function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var source = document.getElementById('source');
var box = document.getElementById('box');
var info = document.getElementById('info');
var historique = document.getElementById('historique');
let compteur = 0


const repetition = setInterval(() => {
  let value = getRandomIntInclusive(-10, 40)
  let histo = ""

  if(historique.firstChild) {
    histo = ', ' + value + ' °C'
  } else {
    histo = value + ' °C'
  }

  let histoNode = document.createTextNode(histo)
  historique.appendChild(histoNode)


  let tempNode = document.createTextNode(value + ' °C')


  while (source.firstChild) {
    source.removeChild(source.firstChild);
  }

  source.appendChild(tempNode)

  compteur++

  while (info.firstChild) {
    info.removeChild(info.firstChild);
  }

  if (-10 <= value && value <= 0) {
    box.className = "bleu"

    var msgFroid = document.createTextNode("Brrrrrrr, un peu froid ce matin, mets ta cagoule !");
    info.appendChild(msgFroid);
  }
  else if (value > 0 && value <= 20) {
    box.className = "vert"
  }
  else if (value > 20 && value <= 30) {
    box.className = "orange"
  }
  else {
    box.className = "rouge";

    var msgChaud = document.createTextNode("Caliente ! Vamos a la playa, ho hoho hoho !!");
    info.appendChild(msgChaud);
  }

  if (compteur == 20) {
    clearInterval(repetition)
  }
}, 2000);



