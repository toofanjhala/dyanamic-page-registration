function goingforshooping(){
    return new Promise((resolve,rej)=>{
    setTimeout(()=>{
           resolve("let go for shopping")
    },3000)
})
}

function car(){
    return new Promise((resolve,rej)=>{
    setTimeout(()=>{
           rej("sorry car have no petrol")
    },2000)
})
}

function selectingcloth(){
    return new Promise((resolve,rej)=>{
    setTimeout(()=>{
           resolve("selecting shirts")
    },2000)
})
}

async function  result(){
try{

    const shopping= await goingforshooping();
    console.log(shopping)

    const vehicle= await car();
    console.log(vehicle)

    const cloth= await selectingcloth();
    console.log(cloth)
}
catch(err){
 console.log(err);
}

}




result();