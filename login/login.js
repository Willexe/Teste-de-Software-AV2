let usuarios = []
if (localStorage.getItem('cadastrados')) 
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
function login(){
    let guarda_senha = document.getElementById('senha').value
    let guarda_cpf = document.getElementById('cpf').value
    if(procura_usuario(guarda_cpf, guarda_senha) != -1){
        alert("Usuário validado! Bem-vindo!")
        location.assign('file:///C:/Users/mcmiq/Documents/Codiguin/AV2%20-%20Teste%20de%20software/pages/qrcode.html')
    }else{
        alert("Usuário não cadastrado")
    }
}
function procura_usuario(guarda_cpf, guarda_senha,) {
    let index = usuarios.findIndex((element) => {
        return element.cpf == guarda_cpf && element.senha == guarda_senha
    })
    return index
}

let btn_senha = document.getElementById('senha')
let btn_cpf = document.getElementById('cpf')

btn_cpf.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        login();
    }
})
btn_senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        login();
    }
})
