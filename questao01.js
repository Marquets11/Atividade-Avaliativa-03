const arvore = require("./arvore");
const no = require("./no");
const fs = require("fs");

// Lê o arquivo 'L2Q1.in' e joga na variavel 'arquivo1'
let arquivo1 = fs.readFileSync('./L2Q1.in', 'utf-8')

// Separa em linhas o arquivo
entrada = arquivo1.split(/\r?\n/);

// Captura os valores das linhas
for(x = 0; x < entrada.length; x++){
    entrada[x] = entrada[x].split(" ");
}

let saida = "";

for (x = 0; x < entrada.length; x++){
    let linhaArray = entrada[x];
    let arvoreBinaria = new arvore();

    for(y = 0; y < linhaArray.length; y++){
        let alturaDoNo = arvoreBinaria.adicionar(new no(parseInt(linhaArray[y])));
        saida += `${alturaDoNo} `
    }

    let maximo = arvoreBinaria.pegarMaiorValor(arvoreBinaria.raizArvore);
    saida += `max ${maximo.key} alt ${maximo.getAlt()} pred ${ (maximo.pai != null) ? arvoreBinaria.pegarValorAnterior(maximo).key : "NaN" }`

    saida += "\n";
}

fs.writeFileSync("L2Q1.out", saida);

