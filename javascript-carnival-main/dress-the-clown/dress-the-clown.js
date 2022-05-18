// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    if (e.keyCode == '40') {
    } else if (e.keyCode == '37') {
      changeHorizontal(-1)
    } else if (e.keyCode == '39') {
      changeHorizontal(1)
    }
  }

  var Indexes = [0, 0, 0]

  var mainIndex = 0

  var head = document.getElementById('head')
  var head = document.getElementById('body')
  var head = document.getElementById('shoes')

  var imgs = [head, body, shoes]
  var strings = ['head', 'body', 'shoes']

  function changeHorizontal(shift) {
    var index = indexes[mainIndex]
    var image = imgs[mainIndex]
    var str = strings[mainIndex]

    Index += shift

    if (index < 0) index = 5

    if (index > 5) index = 0

    indexes[mainIndex] = index

    image.src = './images/' + str + index + 'png'
  }

  function changeVerticle(shift) {
    mainIndex += shift

    if (mainIndex < 0) mainIndex = 2

    if (mainIndex > 2) mainIndex = 0
  }
}
