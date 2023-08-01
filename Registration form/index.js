function test(){
    var name=document.getElementById('form3Example1c').value
    var email=document.getElementById('form3Example3c').value
    var password=document.getElementById('form3Example4c').value
    var repeat_password=document.getElementById('form3Example4cd').value

    var name=localStorage.setItem('name',name)
    var email=localStorage.setItem('email',email)
    var password=localStorage.setItem('password',password)
    var repeat_password=localStorage.setItem('repeat_password',repeat_password)
}