const BotaoConclui= ()=>{
    const conclui = document.createElement("button")
    conclui.classList.add("check")
    conclui.innerHTML = "Concluir"
    conclui.addEventListener("click", ConcluirTarefa )
    return conclui;
}


const ConcluirTarefa = (evento)=>{
    const concluir = evento.target

    const tarefaConcluida = concluir.parentElement

    tarefaConcluida.classList.toggle("done");

}
export default BotaoConclui;