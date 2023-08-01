// EXAMINE DOCUMENT OBJECT

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent='hello'
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)


// GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title')
// var header=document.getElementById('main-header')
// console.log(headerTitle)
// headerTitle.textContent="hello"
// headerTitle.innerText='goodbye'
// console.log(headerTitle.innerText)
// headerTitle.innerHTML='<h1>hello</h1>'
// header.style.borderBottom='3px solid red'


//GET ELEMENT BY CLASSNAME

// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent='hello 2'
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='red'


//gives error

// items.style.backgroundColor='orange'
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='blue'
// }


//queryselector

var header=document.querySelector('#main-header')
header.style.borderBottom='5px solid black'

// var input=document.querySelector('input')
// input.value='hello world'

// var submit=document.querySelector('input[type="submit"]')
// submit.value='SEND'

// var item=document.querySelector('.list-group-item')
// item.style.color='red'

// var lastItem=document.querySelector('.list-group-item:last-child')
// lastItem.style.color='blue'

// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color='green'


//queryselectorall

// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent='hello'

// var odd=document.querySelectorAll('li:nth-child(odd)')
// var even=document.querySelectorAll('li:nth-child(even)')

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='red'
//     even[i].style.backgroundColor='yellow'
// }