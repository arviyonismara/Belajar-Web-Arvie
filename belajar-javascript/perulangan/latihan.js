let result = ""
for (let i = 1; i <= 20; i++){
    if (i % 5 === 0){
        result += " ";
    }
    else{
        result += "O";
    }
}
console.log(result)
