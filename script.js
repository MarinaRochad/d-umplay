let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")


function abreFechaMenu() {

    //Menu Fechado - tem a classe menu fechado
    //Menu aberto - nao tem a classe menu fechado 

    //se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        //abrir o menu- tirar a classe menu-fechado
        menu.classList.remove("menu-fechado")

        //esconder icone barras
        iconeBarras.style.display = "none"

        // mostrar o icone do x
        iconeX.style.display = "inline"

    } else {
        //fechar o menu- adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // esconder icone x
        iconeX.style.display = "none"

        //mostrar o icone barras 
        iconeBarras.style.display = "inline"

    }

}



onresize = () => {
    //abrir o menu- tirar a classe menu-fechado
    menu.classList.remove("menu-fechado")

    //esconder icone barras
    iconeBarras.style.display = "none"

    // mostrar o icone do x
    iconeX.style.display = "inline"

}

function solicitarOrcamento() {
    //Pegar os valres dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail= document.getElementById("campo-email").value
    let valorTelefone = document.getElementById("campo-telefone").value

    //Organizar os valores em um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorTelefone
    }

    console.log(dadosForm);

    //Enviar a requisicao para a API
    //metodo HTTP POST - Create/Criar -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        //CASO SUCESSO
        .then(resposta=> {  
            console.log(resposta);   

            //limpar os inputs
            document.querySelector("#contato form").reset()

            //mostrar um alert de sucesso
            alert("Solicitação enviada com sucesso!!! <3")
        })
        .catch(erro => {
            console.log(erro);
            //Caso erro
            //mostrar alert com msg de erro
            alert("Erro na requisição 🫠")
        })

            event.preventDefault()                      
}
