function test() {

    let name = document.getElementById('form3Example1c').value
    let email = document.getElementById('form3Example3c').value
    let password = document.getElementById('form3Example4c').value
    let repeat_password = document.getElementById('form3Example4cd').value
  
    let user = {
      name: name,
      email: email,
      password: password,
      repeat_password: repeat_password
    }
  
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'))
    }
  
    users.push(user)
  
    localStorage.setItem('users', JSON.stringify(users))
    alert('your data is being stored to localstorage')
  }