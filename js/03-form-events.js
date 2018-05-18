var formEl = document.querySelector('.form-register')

function handleFormSubmit(evt){
  evt.preventDefault()
  var formEl = evt.currentTarget
  console.log(formEl.username.value)
  console.log(formEl.age.value)
  console.log(formEl.country.value)
}

formEl.addEventListener('submit', handleFormSubmit)
