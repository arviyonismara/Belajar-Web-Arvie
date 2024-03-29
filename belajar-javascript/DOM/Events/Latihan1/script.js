const tUbahWarna = document.getElementById('tUbahWarna')

tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue'
    // document.body.setAttribute('class', 'biru-muda') // memberikan class biru-muda pada body
    document.body.classList.toggle('biru-muda') // menggunakan toggle() jika beluma ada class maka ditambahkan, jika sudah ada maka class dihapus.
}

// membuat element button acakWarna menggunakan js
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button')
tAcakWarna.appendChild(teksTombol)
tUbahWarna.after(tAcakWarna)

// buat event listener untuk click acak warna
tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1); // rumus untuk mendapatkan nilai 1 sampai 255 adalah * 255 + 1
    // console.log(r)
    const g = Math.round(Math.random() * 255 + 1); 
    const b = Math.round(Math.random() * 255 + 1); 
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')' // set value rgb menjadi variable random r, g, & b
})

const sMerah = document.querySelector('input[name=sMerah]') // ambil element sMerah
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

// buat event untuk sMerah
sMerah.addEventListener('input', function(){ // event input berfungsi ketika menggeser slider, maka warna akan otomatis berubah
    const r = sMerah.value;
    document.body.style.backgroundColor = 'rgb('+r+', 100, 100)'
})

// buat event untuk sHijau
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb('+r+', '+ g +', 100)'
})

// buat event untuk sBiru
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+', '+ g +', '+ b +')'
})

// event ketika kursor mouse bergerak didalam body, maka warna akan berubah sesuai pergrakan mouse
document.body.addEventListener('mousemove', function(){
    //posisi mouse
    // console.log(event.clientY)
    //ukuran browser
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+xPos+', '+ yPos +', 100)'
})