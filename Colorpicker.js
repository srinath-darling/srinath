let mybutton=document.getElementById("btn")
console.log(mybutton)
let myBody=document.body
myBody.style.display="flex"
myBody.style.alignItems="center"
myBody.style.height="100vh"
myBody.style.width="100%"
myBody.style.justifyContent="center"
function myfunc(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
   let blue=Math.floor(Math.random()*256);
   let randomColor=`rgb(${red},${green},${blue})`;
   return randomColor
}
mybutton.addEventListener("click",()=>{


    let randomColor=myfunc()
    myBody.style.backgroundColor=randomColor
    myhead.textContent=randomColor
})

let myhead=document.getElementById("head")