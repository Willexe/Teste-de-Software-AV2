let usuarios = []

if (localStorage.getItem('cadastrados')) {
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function cadastrar() {
    let guarda_nome = document.getElementById('nome').value
    let guarda_senha = document.getElementById('senha').value
    let guarda_cpf = document.getElementById('cpf').value
    let guarda_email = document.getElementById('email').value
    let dataNascimento = document.getElementById('data').value
    let data = new Date();
    let usuario = { 
        nome: guarda_nome.toLowerCase().trim(), 
        senha: guarda_senha, 
        cpf: guarda_cpf,
        email: guarda_email,
        dataCriacao: `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`
        
    }



    if (guarda_nome.length > 2 &&
        guarda_senha.length > 5 && guarda_senha.length < 11 &&
        guarda_cpf.length == 11 &&
        guarda_email.length > 10 &&
        dataNascimento.length == 10 &&
        guarda_nome.trim().length != 0 &&
        guarda_senha.trim().length != 0 &&
        guarda_cpf.trim().length != 0 &&
        dataNascimento.trim().length != 0
     


    ) {
        if (procura_usuario(usuario.cpf)==-1) {
            usuarios.push(usuario)
            localStorage.setItem('cadastrados', JSON.stringify(usuarios))
            alert('Usuário cadastrado com sucesso! Bem-vindo ' + guarda_nome)
            location.assign('../login//login.html')
                 

        }else{
            alert("CPF informado já existe! Por favor informe um CPF válido")
        }  

    } 
 

    var erros = [];

    if (guarda_nome.length <= 2 ||
        guarda_nome.trim().length == 0) {
        document.getElementById('alerta_nome').innerHTML = `Mínimo de três caracteres`
        setTimeout(() => {
            document.getElementById('alerta_nome').innerHTML = ``
        }, 3000)
    }
    if (guarda_senha.length <= 5 || guarda_senha.length >= 11 ||
        guarda_senha.trim().length == 0) {
        document.getElementById('alerta_senha').innerHTML = `Mínimo de seis á dez caracteres`
        setTimeout(() => {
            document.getElementById('alerta_senha').innerHTML = ``
        }, 3000)
    }
    if (guarda_cpf.length <= 10 || guarda_cpf.length >= 12 ||
        guarda_cpf.trim().length == 0) {
        document.getElementById('alerta_cpf').innerHTML = `Mínimo de onze caracteres`
        setTimeout(() => {
            document.getElementById('alerta_cpf').innerHTML = ``
        }, 3000)
    }

    if (!validaEmail(guarda_email)) {
        document.getElementById('alerta_email').innerHTML = `Digite um email válido`
        setTimeout(() => {
            document.getElementById('alerta_email').innerHTML = ``
        }, 3000)
    }

    if (dataNascimento.length <= 11 ||
        data.trim().length == 0) {
        document.getElementById('alerta_data').innerHTML = `Insira uma data válida`
        setTimeout(() => {
            document.getElementById('alerta_data').innerHTML = ``
        }, 3000)
    }

    
   
}

let btn_nome = document.getElementById('nome')
let btn_senha = document.getElementById('senha')
let btn_cpf = document.getElementById('cpf')
let btn_email = document.getElementById('email')
let btn_dataNascimento = document.getElementById('data')

btn_nome.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_cpf.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_email.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_dataNascimento.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

function procura_usuario(guarda_cpf) {
    let index = usuarios.findIndex((element) => {
        return element.cpf == guarda_cpf
    })
    return index
}
function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}