const h1 = document.createElement('h1')
const a1 = document.createElement('a')
const li1 = document.createElement('li')

const lastel = () => {
h1.textContent='Работа с DOM'

document.body.prepend(h1);
}


const bgcol = (col) =>{
    document.body.style.backgroundColor = col
}


const url = () => {
a1.textContent='DOM'
a1.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model'
a1.target= 'blank'
main.append(a1)
}


const addel = (text) => {
    li1.textContent = text
    list.append(li1)
}


const delCopy = () => {
copyright.remove()
}

// let array = [
//     {
//       name: 'Google',
//       url: 'https://google.com'
//     },
//     {
//       name: 'Instagram',
//       url: 'https://instagram.com'
//     },
//     {
//       name: 'intocode',
//       url: 'https://intocode.ru'
//     },
//   ]

//   const ul = document.createElement('ul')


// function render(arr){
// for(i=0; i<arr.length; i++){
//     const il = document.createElement('il')
//     const a = document.createElement('a') 
//     a.href = arr[i].url
//     a.textContent = arr[i].name
//     il.append(a)
//     ul.append(il)
// }
// }
// console.log(render(array))



