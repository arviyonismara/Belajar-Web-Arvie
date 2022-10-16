const worker = new Worker("web-worker.js")

function showLog(total){
    for(let i = 0; i < total; i++){
        console.log(i)
    }
}

function buttonClick(){
    console.log("start Log");
    showLog(20000);
    console.log("Finish Log")
}