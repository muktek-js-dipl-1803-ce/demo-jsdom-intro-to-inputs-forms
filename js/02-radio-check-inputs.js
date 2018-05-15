// .onChange function to modify another element
//--------------------------------------------


// I-a : Listen to 'change' event on checkbox (use specific selector),
//       put result on DOM
//--------------------------------------------
var olderThanCheckboxEl = document.querySelector('.older-than')

olderThanCheckboxEl.addEventListener('change', function putChangeInResultBox(evtObj){
  var checkBoxEl = evtObj.currentTarget
  console.log(checkBoxEl)
  var currentCheckboxBool = checkBoxEl.checked


  var resultBoxEl =  document.querySelector('.you-old')

  if(currentCheckboxBool === true){
    resultBoxEl.textContent = 'Yes You are VERY old...'
  } else {
    resultBoxEl.textContent = 'Not so old, or sexy'
  }

})

// II-b : Listen to change event on
//--------------------------------------------
