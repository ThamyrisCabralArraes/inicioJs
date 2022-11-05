(function () {
  //const elemento = document.querySelector('.top-bar p')
  const nomeUsuario = 'thamyris'
  if(nomeUsuario){
    const addNome = document.createElement('div')
    addNome.className = 'top-bar'
    addNome.innerHTML = ` <p> Bem vindo, ${nomeUsuario} </p>`
    const elementoPai = document.querySelector('.hero')
    elementoPai.insertBefore(addNome, elementoPai.firstElementChild)
  }
})()
  
  
  
  
  
  
    //document.querySelector('.top-bar p').textContent = 'Bem vindo(a), ' + nomeUsuario
  //elemento.innerHTML = 'Bem vindo(a), ' + nomeUsuario
//   elemento.innerHTML = elemento.innerHTML + '<br>' + nomeUsuario + '</br>' // isso aqui poderia ser elemento.innerHTML += nomeUsuario
//   }
//   else {
//     const removeFilho = elemento.parentElement
//     removeFilho.parentElement.removeChild(removeFilho)
//   }
// }
// name()