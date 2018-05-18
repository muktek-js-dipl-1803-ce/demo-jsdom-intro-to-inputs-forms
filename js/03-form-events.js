var formEl = document.querySelector('.form-register')

function handleFormSubmit(evt){
  // (2) we want to prevent the default behavior
  //     of the 'submit' event refreshing the page
  evt.preventDefault()

  // (3) we access the form element
  var formEl = evt.currentTarget

  // (4) we access the values of the inputs;
  //     note that the <input> elements need a 'name' property
  //     EX: <input name="username">, <input name="age">

  console.log(formEl.username.value)
  console.log(formEl.age.value)
  console.log(formEl.country.value)
}


// (1) we can listen for 'submit' event on forms
//     the 'submit event is fired when the
//     the <input type="submit"> is clicked
formEl.addEventListener('submit', handleFormSubmit)
