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

cliente.enderecos.push({
    rua: "R. Joseph Letter",
    numero: 404,
    apartamento: false,
});

// console.log(cliente.enderecos)

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
  );

  console.log(listaApenasApartamentos);