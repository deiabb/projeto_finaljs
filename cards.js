function gerarCards() {
    const produtosContainer = document.querySelector('.produtos');

    bebidasDisponiveis.forEach((bebida, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '14rem';

        const img = document.createElement('img');
        img.className = 'card-img-top img-cerva';
        img.src = bebida.img
        img.alt = `Imagem de ${bebida.marca} ${bebida.tipo || bebida.sabor}`;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = `${bebida.marca} ${bebida.tipo || bebida.sabor}`;

        const addButton = document.createElement('button');
        addButton.textContent = 'adicionar';
        addButton.onclick = () => adicionarItemAoCarrinho(index);

//Temos que melhorar essa parte também, acredito que nossos objetos precisam ter um campo para quantidade,
// e também a possibilidade da pessoa digitar quantos quer (acho que isso é mais complexo)
        const contador = document.createElement('p');  
        contador.className = 'contador';
        contador.textContent = '0';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'deletar';
        deleteButton.onclick = () => deletarItemDoCarrinho(index);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(addButton);
        cardBody.appendChild(contador);
        cardBody.appendChild(deleteButton);

        card.appendChild(img);
        card.appendChild(cardBody);

        produtosContainer.appendChild(card);
    });
}

function adicionarItemAoCarrinho(index) {
    carrinho.push(bebidasDisponiveis[index]);
    console.log(`Adicionado: ${bebidasDisponiveis[index].marca} ${bebidasDisponiveis[index].tipo || bebidasDisponiveis[index].sabor}`);
    atualizarCarrinho();
}

function deletarItemDoCarrinho(index) {
    const item = bebidasDisponiveis[index];
    const itemIndex = carrinho.findIndex(carrinhoItem => carrinhoItem.marca === item.marca && carrinhoItem.tipo === item.tipo && carrinhoItem.sabor === item.sabor);
// aqui precisamos atualizar a função para reduzir do contador da quantidade total
    if (itemIndex !== -1) {
        carrinho.splice(itemIndex, 1);
        console.log(`Deletado: ${item.marca} ${item.tipo || item.sabor}`);
        atualizarCarrinho();
    } else {
        console.log('Item não encontrado no carrinho');
    }
}

function atualizarCarrinho() {
    console.log("Itens no carrinho:");
    carrinho.forEach(item => {
        console.log(`${item.marca} ${item.tipo || item.sabor} R$ ${item.preco}`);
    });
    totalCarrinho(carrinho);
}

gerarCards();