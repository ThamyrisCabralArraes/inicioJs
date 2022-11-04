function name (nome) {
  const nomeUsuario = 'Thamyris'
  //document.querySelector('.top-bar p').textContent = 'Bem vindo(a), ' + nomeUsuario
  const elemento = document.querySelector('.top-bar p')
  //elemento.textContent = 'Bem vindo(a), ' + nomeUsuario
  elemento.textContent = elemento.textContent + nomeUsuario // isso aqui poderia ser elemento.textContent += nomeUsuario
}
name() 
