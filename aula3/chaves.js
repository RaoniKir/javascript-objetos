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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
  }