let posts=[{title: "one post" , body: "this is post one", createdat: new Date().getTime()},
{title: "second post" , body: "this is post second", createdat: new Date().getTime()}]
 
let intervalId =0;
function getpost(){
    clearInterval(intervalId);
   intervalId= setInterval(() => {
    setTimeout( ()=>{
        let output=""
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        } )
       document.body.innerHTML=output;
    },1000);
},1000)
}
getpost();



function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
        const error=false;
        if(!error){
            resolve()
        }
        else
        {
            reject("error-something went wrong")
        }
       
        },1000)
    })
    
}

//createpost({title:"third" ,body:"this is third one"})
//.then(getpost)
//.catch(err=>console.log(err))

 
function deletepost(post){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
        const length=posts.length;
        if(length>0){
            resolve(posts.pop(post))
        }
        else
        {
            reject("array is empty")
        }

 }
        , 2000)
    })
    
}
// createpost({title:"third" ,body:"this is third one"})
// .then(()=>{getpost()
//     deletepost()
// .catch(err=>console.log(err))
// .then(()=> {(getpost)
//     deletepost()
//     .catch(err=>console.log(err))
    
//     .then(()=>{(getpost)
//         deletepost()
//         .catch(err=>console.log(err))
    
//         .then(()=>{(getpost)
//             deletepost()
//             .catch(err=>console.log(err))
            
//             })
        
//         })
    
//     })

// })

// createpost({title:"forth",body:"this is forth"})
// .then(()=>{
//     (getpost);
   // deletepost;
//})


//promise all

// const promise1=Promise.resolve("hello world")
// const promise2=10;
// const promise3= new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"goodbye")
// })

// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

const user={name:"abhi",lastactivitytime: new Date().getTime()}

console.log( " intial time " + user.lastactivitytime)



function lastactivitytupdated(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime =(new Date).getTime();
              resolve(user.lastactivitytime);
           },1000)
    })
    
}


// function updatedpost(){
// Promise.all([createpost,lastactivitytupdated])
// .then(console.log(posts)  + console.log(user.lastactivitytime))


// }

function updatedpost(){
    Promise.all([createpost({title:"forth",body:"this is forth"}),lastactivitytupdated()])
    .then(([createpostresolve,resolve])=>{
       console.log(resolve)
       console.log(posts)
    })
}
createpost({title:"fifth",body:"this is fifth"})
.then(()=>{
 (lastactivitytupdated)
    
    updatedpost();
    deletepost()
    
})