
let mytodo=document.getElementById("todolist");
console.log(mytodo)
let mylist=document.getElementById("task");
console.log(mylist)

let mybtn=document.getElementById("list-item");

function func()
{
    if(mytodo.value ===''){
    
            alert("hello srinath");
        }
        else{
            let li=document.createElement("li")
            li.innerHTML=mytodo.value
            mybtn.appendChild(li)
             mytodo.value=''
          let  span=document.createElement("button")
          span.innerHTML="delete"
          span.style.backgroundColor="white"
          span.style.margin="30px"
          li.appendChild(span) 
          span .addEventListener  ("click", spanfunc)

          function spanfunc(){
           alert("heloo srinath")
           li.remove()
           mytodo.value=''
          }

          let edit=document.createElement("button");
          edit.innerHTML="edit"
          li.appendChild(edit)
          edit.addEventListener("click", editfunc)
        
          function editfunc(){
                   
           edit.remove()
          span.remove( )
          mytodo.value = 'hello'
           li.remove()

          }
       
        }
    }

    



    
