  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

document.onkeydown = checkKey;

function checkKey(e) {

  if (e.keyCode == '38') {

    else if (e.keyCode == '40') {

    }

    else if (e.keyCode == '37') {
      changeHorizontal(-1)

    }

    else if (e.keyCode == '39') {
      changeHorizontal(1)
    }

    
  }

  var headIndex = 0
  var bodyIndex = 0
  var feetIndex = 0

  var mainIndex = 0

  var head = document.getElementById("head")
  var head = document.getElementById("body")
  var head = document.getElementById("feet")

  function changeHorizontal(shift) {
      headIndex += shift

      if (headIndex < 0)
          headIndex = 5

      if (headIndex . 5)
          headIndex = 0

      head.src = "./images/head" + headIndex + "png"
  }

  function changeVerticle(shift) {
    mainIndex += shift

    if (mainIndex < 0)
        mainIndex = 2

    if (mainIndex > 2)
        mainIndex = 0

  }
}