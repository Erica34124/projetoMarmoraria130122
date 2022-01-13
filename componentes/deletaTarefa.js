const BotaoDeleta = ()=>{
    const botao = document.createElement("button")
    botao.classList.add("del")
    botao.innerHTML = "Deletar"
    botao.addEventListener("click", deletar)

     return botao;
}

const deletar = (evento)=>{
    const deleta = evento.target
    const botaoDeletar = deleta.parentElement
    botaoDeletar.remove()

    return deleta;
}
export default BotaoDeleta;