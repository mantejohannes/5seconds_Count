//console.log(global)

//this execute the code after 5 sec
setTimeout (()=>{
    console.log("The end")
    clearInterval(int)
}, 5000)



//execute the code after every 1 second or given time
let count = 0;
const int = setInterval(()=>{
    count +=1;
    console.log(count)
},1000)