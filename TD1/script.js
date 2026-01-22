function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var source = document.getElementById('source');
var A_tableau = []

for (let i = 0 ; i < 22 ; i++){
    let value = getRandomIntInclusive(-10, 40)
    source.innerText = value
    A_tableau.push(value)
}

console.log(A_tableau[21])


