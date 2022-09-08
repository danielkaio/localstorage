let form = document.querySelector('form')
let task  = JSON.parse(localStorage.getItem('task'))|| []
let list = document.querySelector('.list')

task.forEach(task => {
  
    let linha = document.createElement("li")
    linha.innerHTML = task
    list.append(linha)
    let span = document.createElement("span")
    span.className="fa-solid fa-xmark"
    linha.append(span)
    span.addEventListener('click',function(){
    
    linha.remove(this.parentNode)


    })

});

form.addEventListener("submit",(e)=>{

    let nome = document.querySelector('#nome').value
 
    task.push(nome)

   function Insert (){
    localStorage.setItem("task",JSON.stringify(task))
    linha.innerHTML = nome
    list.appendChild(linha)

   }

   Insert()


   localStorage.removeItem('task',nome)

    e.preventDefault()

    
})

