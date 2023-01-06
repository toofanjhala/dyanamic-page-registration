// console.log("1 ticket")
// console.log("2 ticket")
// const wifebringingticket= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("3 ticket")
//     },3000)
// })

// const getpopcorn= wifebringingticket.then((t)=>{
//     console.log("husband denied")
//     console.log("wife requested")
//     return new Promise((resolve,reject) => resolve(` popcorn  and ${t}`))
// });

// getpopcorn.then((t)=>console.log(t));

// wifebringingticket.then(getpopcorn)

// console.log("4 ticket")
// console.log("5 ticket")

// ASYNC FUNCTION

//    console.log("1 ticket")
//    console.log("2 ticket")

// const premovie= async()=> {
//     const wifebringingticket=  new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve( 'ticket') ,3000)
//     })

//    const getpopcorn= new Promise((resolve,reject) => resolve(`popcorn`))

//    const getcolddrink= new Promise((resolve,reject) => resolve(`colddrink`))

//     let ticket = await wifebringingticket;
//     console.log(`wife i got ${ticket}`)
//     console.log("wife requested popcorn ")


//     let popcorn= await getpopcorn;
//     console.log(`husband bring ${popcorn}`);
//     console.log("wife please bring some colddrink");

//    let colddrink= await getcolddrink;
//    console.log(`here is ${colddrink}`)
//    console.log(`thank you hubby`)

//  return ticket;
// }

// premovie().then((message)=>console.log(`finally we can go with ${message}`));


// console.log("4 ticket")
// console.log("5 ticket")






let posts=[{title: "one post" , body: "this is post one", createdat: new Date().getTime()},
{title: "second post" , body: "this is post second", createdat: new Date().getTime()}]
 

const updatingpost = async()=>{

 
   const createpost = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(posts.push({titile:3}))
    
        },2000)
       
    })
   console.log("create post will execute")
   console.log(posts);

   console.log('now we are waiting for delete command' )


const deletepost = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(posts.pop())

    },5000)
   
})

console.log("now deletpost will execute")
console.log(posts);
console.log("thankyou")
}



updatingpost();

















