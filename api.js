const ul = document.querySelector('ul')

function  getApiGit(){
    fetch('https://api.github.com/users/Luisdaniel6010/repos')
     .then(async res => {
        if(!res.ok){
            throw new Error(res.status)
        }
        let data = await res.json()
        data.map(item =>{
            let li = document.createElement('li')
            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</strong>
            <span>URL: ${item.url}</span>
            <span>Data Criação:
            ${Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </span>
            `
            ul.appendChild(li)
        })

     }).catch(e => console.log(e))

}

getApiGit()