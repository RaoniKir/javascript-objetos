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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'chave'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}}