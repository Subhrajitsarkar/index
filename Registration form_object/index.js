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
    localStorage.setItem('user', JSON.stringify(user))
    alert('your data is being saved to localstorage')
}