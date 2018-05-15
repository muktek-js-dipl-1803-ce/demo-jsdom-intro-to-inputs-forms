
// I-a : Capture text value from <input/> element, put in
//       <p class="output-box">...</p>
//--------------------------------------------
document
  .querySelector('.enter-btn')
  .addEventListener('click', function outputText(){
    // select input
    var userInputDomEl = document.querySelector('.user-input')
    // capture text value
    var userInputText = userInputDomEl.value

    var outputBoxDomEl = document.querySelector('.output-box')
    outputBoxDomEl.innerHTML = userInputText

    // III - Clear the input for the next entry
    userInputDomEl.value = ''

  })



// II-a : keyDown <input/> event to 'keep the x out'
//--------------------------------------------

var userInputDomEl = document.querySelector('.user-input')

userInputDomEl.addEventListener('keydown', function(evtObj){
  console.log(evtObj)
  var currentText = evtObj.target.value

  // check for the 'x' key...
  if(evtObj.keyCode === 88 ){
    // prevent the character from showing in the input box
    evtObj.preventDefault()
  }

  // check for the '6' key...
  if(evtObj.keyCode === 54 ){
    // prevent the character from showing in the input box
    evtObj.preventDefault()
  }

})

// III-a : Capture text value from <input/> element
//        on ENTER key and then clear <input>
//--------------------------------------------
