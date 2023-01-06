let posts=[{title: "one post" , body: "this is post one", createdat: new Date().getTime()},
{title: "second post" , body: "this is post second", createdat: new Date().getTime()}]
 
let intervalId =0;
function getpost(){
    clearInterval(intervalId);
   intervalId= setInterval(() => {
    setTimeout( ()=>{
        let output=""
        posts.forEach((post)=>{
            output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.createdat)/1000}</li>`
        } )
       document.body.innerHTML=output;
    },2000);
},1000)
}
getpost();



function createpost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdat:new Date().getTime()});
        callback();
    },1000)
}




function create4post(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdat:new Date().getTime()});
        callback()
    },6000)
}
createpost({title: "third one ", body: "this is third one"},getpost)

create4post({title: "fourth one ", body: "this is forth one"},getpost);
