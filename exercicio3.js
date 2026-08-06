async function requisicao() {
    const dados = await new Promise((resolve) => {
        setTimeout( () => {
            resolve(
                {
                    id:1,
                    nome: "João",
                    email: "joao@abc.com"
                }
            )}
        )
    });
    console.log("dados recebidos", dados);
}

// outro exemplo - buscar o café mais barato
async function buscarProduto(){
    const produto = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve({produto: "cafe", id: 1, preco: 20.00, marca: "Três Corações"})
        },2000)
    });
    console.log(`O melhor preço encontrado foi do café ${produto.marca}, custando apenas R$${produto.preco}.`);
}

buscarProduto();
console.log("buscando melhor preço do café...");
// const dadosRecebidos = requisicao();