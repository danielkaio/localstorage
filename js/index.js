let form = document.querySelector('form')
let task  = JSON.parse(localStorage.getItem('task'))|| []
let list = document.querySelector('.list')


form.addEventListener("submit",(e)=>{

    let nome = document.querySelector('#nome').value

    task.push(nome)

    localStorage.setItem("task",JSON.stringify(task))
   

    let linha = document.createElement("li")
    
    linha.innerHTML = nome
    list.appendChild(linha)


    e.preventDefault()




    
    
})

