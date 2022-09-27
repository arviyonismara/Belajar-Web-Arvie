/* DOM Selection Method */

// 1. document.getElementById() -- element
const judul = document.getElementById("judul")
//artinya document carikan saya element id yang bernama judul
//mengubah style css
judul.style.color = 'red'; // jika menambahkan style, otomatis menambahkan inline css
judul.style.backgroundColor = "purple";
judul.innerHTML = "Arvie Arvearie" // mengubah isi text

// 2. getElementsByTagName() -- HTMLCollection
//untuk keluaran HTMLCollection untuk merubah style harus mengakses index
// const p = document.getElementsByTagName('p'); // output akan berupa array
// p[0].style.backgroundColor = 'lightblue' // untuk merubah style harus menggunakan index
// p[1].style.backgroundColor = 'lightblue' 
// p[2].style.backgroundColor = 'lightblue' 
// p[3].style.backgroundColor = 'lightblue' 

// for (let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue'
// }

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = '50px'

// 3. getElementsByClassName() -- HTMLCollection
// mengakses elemen berdasarkan class
const p1 = document.getElementsByClassName('p1')//[0];
p1[0].innerHTML = "ini dirubah dari Javascript"; //harus mengakses index untuk merubah


// 4. querySelector() -- element
const p4 = document.querySelector('#b p')
p4.style.color = 'green'
p4.style.fontSize = '30px'

const li2 = document.querySelector('section#b ul li:nth-child(2)') //nth-child dimulai dari 1
li2.style.backgroundColor = "orange"

// const p = document.querySelector('p') // hanya akan merubah elemen paling pertama dari p
// p.innerHTML = "ini dirubah melalui JS"

// 5. querySelectorAll() -- nodeList 
// seperti querySelector() sebelumnya akan tetapi bisa berlaku ke semua elemen setipe

const p = document.querySelectorAll('p')
// p[2].style.backgroundColor = 'lightblue' // harus mengakses index

for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue'
}

