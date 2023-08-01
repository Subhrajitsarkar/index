function test() {

  let name = document.getElementById('form3Example1c').value
  let email = document.getElementById('form3Example3c').value
  let password = document.getElementById('form3Example4c').value
  let repeat_password = document.getElementById('form3Example4cd').value



  let user = {
    name: name,
    email: email,
    password: password,
    repeat_password: repeat_password,

  }

  let users = []
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].name != name || users[i].email != email) {
      users.push(user)

      localStorage.setItem('users', JSON.stringify(users))
      alert('your data is being stored to localstorage')
    }
    else
    alert('your data is already in localstorage')
  }}

  function del() {
    let name = document.getElementById('form3Example1c').value
    let email = document.getElementById('form3Example3c').value

    let users = JSON.parse(localStorage.getItem('users'))

    for (let i = 0; i < users.length; i++) {
      if (users[i].name === name || users[i].email === email) {
        users.splice(i, 1); // Remove the user from the 'users' array
        i--; // Decrement 'i' to account for the removed element
      }
    }
        // After removing the desired users from the 'users' array, update the local storage with the updated 'users' array.
    localStorage.setItem('users', JSON.stringify(users));
    alert('your data is being deleted from localstorage')
  }