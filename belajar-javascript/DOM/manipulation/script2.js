// DOM Manipulations Node

// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru')

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)

// simpan pBaru di akhir section a
const sectionA = document.querySelector('section#a');
sectionA.appendChild(pBaru) // jadilah elemen paragraf baru


// tambah li baru di didalam section B sebelum li 2
const liBaru = document.createElement('li') // buat elemen li
const teksLiBaru = document.createTextNode('ini adalah li baru') // buat isi elemen

liBaru.appendChild(teksLiBaru) // append isi kedalam elemen

const ul = document.querySelector('section#b ul'); // ambil scope ul
const li2 = ul.querySelector('section#b ul li:nth-child(2)'); // menentukkan letak li2 

ul.insertBefore(liBaru, li2) // meletakkan liBaru sebelum li2
// ul.insertBefore(elemen_yang_akan_ditambahkan, elemen_patokan)


// remove elemen
// pada kasus ini menghapus link (a) dibawah paragraf 1
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link)

// replace elemen
const sectionB = document.getElementById('b'); // mendapatkan ssection B
const p4 = sectionB.querySelector('p') // target ke paragraf 4

const h2Baru = document.createElement('h2') // buat elemen baru h2
const teksH2Baru = document.createTextNode("Ini adala h2 Baru") // buat isi teks elemen h2

h2Baru.appendChild(teksH2Baru) // append teksH2Baru kedalam elemen h2Baru
sectionB.replaceChild(h2Baru, p4) // replace p4 menjadi h2Baru