// // DOM Events

// // Events Handler //
// const p3 = document.querySelector('.p3')

// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarnaP3(){
//     p2.style.backgroundColor = 'lightblue';
// }
// // contoh menggunakan event handles menggunakan eksternal javascript
// const p2 = document.querySelector('.p2')
// p2.onclick = ubahWarnaP2


// // addEventListener //
// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul')
//     const liBaru = document.createElement('li')
//     const teksLiBaru = document.createTextNode('item Baru')
//     liBaru.appendChild(teksLiBaru)
//     ul.appendChild(liBaru)
// })

// perbedaan event hadler dan event listener

const p3 = document.querySelector('.p3')
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue'
// }
// //fungsi kedua akan menimpa fungsi yang pertama sehingga fungsi pertama tidak berjalan
// p3.onclick = function(){
//     p3.style.color = 'red'
// }

p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightblue'
})
// fungsi kedua bisa berjalan bersamaan dengan fungsi pertama
p3.addEventListener('click', function(){
    p3.style.color = 'red'
})