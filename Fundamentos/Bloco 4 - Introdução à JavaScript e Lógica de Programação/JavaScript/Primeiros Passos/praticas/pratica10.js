function lucros(custo, venda, numero) {
    custo *= 1.20;
    if ((custo || venda) < 0) {
        console.log("ERRO! VALOR DIGITADO É MENOR QUE R$0.");
    }

    const lucro = venda - custo;
    const lucroDeVendas = lucro * numero;
    
    console.log("R$ "+lucroDeVendas.toFixed(2));
}
lucros(12, 20, 1000);
