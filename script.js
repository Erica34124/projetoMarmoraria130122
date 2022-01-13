import BotaoDeleta from "./componentes/deletaTarefa.js";
import BotaoConclui from "./componentes/concluiTarefa.js";
//entradas

const botao = document.querySelector(".btn");

// criando função

const tarefa = (evento) => {
    evento.preventDefault()

    const lista = document.getElementById("lista");
    const nomeCliente = document.getElementById("nome");
    const cliente = nomeCliente.value;
    const tel = document.getElementById("telefone");
    const clienteTel = tel.value;
    const email = document.getElementById("email");
    const clienteEmail = email.value;
    const come = document.getElementById("comentarios");
    const clienteCome = come.value;

    //criando elemento
    const criarLista = document.createElement("li")
    criarLista.classList.add("config")
    const ListaValor = `<h3>${cliente}</h3>`;
    criarLista.innerHTML = ListaValor;
    lista.appendChild(criarLista);
    nomeCliente.value = ' '

    const criarListaTel = document.createElement("li")
    criarListaTel.classList.add("config")
    const ListaValorTel = `<p>${clienteTel}</p>`;
    criarListaTel.innerHTML = ListaValorTel;
    lista.appendChild(criarListaTel)
    tel.value = ' '

    const criarListaEmail = document.createElement("li")
    criarListaEmail.classList.add("config")
    const ListaValorEmail = `<p>${clienteEmail}</p>`;
    criarListaEmail.innerHTML = ListaValorEmail;
    lista.appendChild(criarListaEmail)
    email.value = ' '

    const criarListaCome = document.createElement("li")
    criarListaCome.classList.add("config")
    const ListaValorCome = `<p>${clienteCome}</p>`;
    criarListaCome.innerHTML = ListaValorCome;
    
    lista.appendChild(criarListaCome)
    lista.appendChild(BotaoConclui())
    lista.appendChild(BotaoDeleta())
    come.value = ' '

}
// chamando a função no evento
botao.addEventListener("click", tarefa);


