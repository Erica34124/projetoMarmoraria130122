export default function vendas() {
    const nome = document.querySelector('#clienteNome');
    const materia = document.querySelector('#mat');
    const cor = document.querySelector('#cor');
    const altura = document.querySelector('#alt');
    const largura = document.querySelector('#lar');
    const profun = document.querySelector('#pro');
    const preco = document.querySelector('#pre');
    const custo = document.querySelector('#cus');
    const quantidade = document.querySelector('#qua');
    const botoaVendas = document.querySelector('#btnVendas');
    const relatorio = document.querySelector('#relatorio');
    let total = 0;

    function tratar() {
        let v1 = altura.value.replace(',','.');
        let v2 = largura.value.replace(',','.');
        let v3 = profun.value.replace(',','.');
        let v4 = preco.value.replace(',','.');
        let v5 = custo.value.replace(',','.');
        let v6 = quantidade.value.replace(',','.');
        

        if (v3=== true && v3 !== 0) {
            total = (v1 * v2 * v3 * v4*v6);
            total += +v5;
            return ('true',total);
        }
        else {
            total = (v1 * v2 * v4*v6);
            total += +v5;
            return ('false',total);
        }
        
    }
   
    const lista = [nome, materia, cor];

    function popular(event) {
        event.preventDefault();
        const ul = document.createElement('ul');
        for (let i = 0; i <= lista.length - 1; i++) {
            const li = document.createElement('li');
            li.innerHTML = ` <h3> Nome: ${lista[i].value}</h3>`;
            ul.appendChild(li);
        }
        const total =document.createElement('li');
        total.innerHTML =` <h3> Valor total R$ ${tratar().toFixed(2)}</h3>`;
        ul.appendChild(total);
        ul.classList.add('listaVendas');
        relatorio.appendChild(ul);


    }
    botoaVendas.addEventListener('click', popular);
}
// Movimentacao: function () {
//     for (let i = 0; i <= (this.movimentacao).length - 1; i++) {
//         const li = document.createElement("li");

//         // movExtrato.innerHTML += `${this.movimentacao[i]}` + " <br>"
//         li.innerHTML += `${this.movimentacao[i]}` + " <br>"
//         movExtrato.appendChild(li)
//     }
// },
