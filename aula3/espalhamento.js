const cliente ={
    nome:"Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: [ '1131585475', '112525719' ],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 134"
},
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);