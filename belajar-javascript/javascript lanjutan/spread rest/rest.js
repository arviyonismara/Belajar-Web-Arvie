// Rest Parameter
// rest parameter harus berada di akhir parameter formal

// function myFunc(a, b,...myArgs){ // rest menggunakan "..." untuk mengambil sisa dari inputan yang belum di miliki parameter lain
//     // return myArgs; // iki akan mereturn 3,4,5
//     // return `a = ${a} b = ${b} myArgs = ${myArgs}`
// }

// console.log(myFunc(1,2,3,4,5))

// function myF(){
//     // return arguments; // jika begini akan mereturn inputan dalam bentuk objek
// }

// console.log(myF(1,2,3,4,5))

// function jumlah(...angka){
//     // let total = 0;
//     // for(const a of angka){
//     //     total += a;
//     // }

//     // return total;
//     return angka.reduce((acc, curr) => acc + curr)
// }
// console.log(jumlah(1,2,3,4,5))

// array destructuring
// const kelompok1 = ['Arvie', 'Shandika', 'Bima', "Rizal", 'Lucky']
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota)

// object destructuring
// const team = {
//     pm : 'Arvie',
//     fe1 : 'Bima',
//     fe2 : 'Erik',
//     be1 : 'Fajar',
//     ux : 'Hendor',
//     dev : 'Dian'
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam)

// filtering
function filterBy(type, ...values){ // hanya inputan pertama yang dideklarasikan menjadi type, selebihnya masuk kedalam parameter values.
    return values.filter(v => typeof v === type); // type mengambil dari parameter yang mana merujuk pada inputan "number", tergantung inputannya
}
console.log(filterBy('number', 1,2, 'Arvie', false, 10, true, 'Doddy'));