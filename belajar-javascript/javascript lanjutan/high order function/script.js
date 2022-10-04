// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]')); // gunakan [] untuk mengambil attribut didalam tag
// karena querySelectorAll() memiliki keluaran nodeList / bukan array, maka untuk merubah menjadi array bisa menggunakan Array.from()

//  pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')) // untuk memfilter element videos yang memiliki text tertentu dapat menggunakan textContent.includes()

// ambil durasi masing-masing video
// chaining lanjutan dari yang atas
.map(item => item.dataset.duration) // buat arrow function .dataset.duration untuk mengambil durasi

// ubah durasi menjadi int, ubah menit menjadi detik
.map(waktu => {
    // karena durasi berbentuk 10:30 lebih mudah jika dirubah menjadi array -> [10, 30] split terlebih dahulu tanda ":"
    const parts = waktu.split(':').map(part => parseFloat(part)); //parseFloat() untuk casting element array dalam part menjadi float
    return (parts[0] * 60) + parts[1]; // kembalikan nilai parts[0]/menit menjadi detik dengan dikali 60
})

//  jumlahkkan semua detik
.reduce((total, detik) => total + detik); // menjumlahkan total detik

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600); 
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM (span)
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlvideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlvideo} Video.`


console.log(detik)