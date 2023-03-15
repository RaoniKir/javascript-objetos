const cliente ={
    nome:"Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: [ '1131585475', '112525719' ],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo ) {
            console.log("Saldo Insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(40)