const arvore = require("./arvore");
const no = require("./no");
const fs = require("fs");

// Lê o arquivo 'L2Q2.in' e joga na variavel 'arquivo2'
let arquivo2 = fs.readFileSync('./L2Q2.in', 'utf-8')

// Separa em linhas o arquivo
entrada = arquivo2.split(/\r?\n/);

// Captura os valores das linhas
for(x = 0; x < entrada.length; x++){
    entrada[x] = entrada[x].split(" ");
}

let saida = "";

for (x = 0; x < entrada.length; x++){
    let linhaArray = entrada[x];
    let arvoreBinaria = new arvore();

    for(y = 0; y < linhaArray.length; y++){
        if(arvoreBinaria.procura(arvoreBinaria.raizArvore, parseInt(linhaArray[y])) == null){
            arvoreBinaria.adicionar(new no(parseInt(linhaArray[y])));
        }
    }

    let arvoreArray = arvoreBinaria.visualizarOrdem(arvoreBinaria.raizArvore);

    for(y = 0; y < arvoreArray.length; y++){
        let direita = arvoreBinaria.somarFolhas(arvoreArray[y].direita);
        let esquerda = arvoreBinaria.somarFolhas(arvoreArray[y].esquerda);

        saida += `${arvoreArray[y].key} (${direita - esquerda}) `;
    }

    saida += "\n";
}

fs.writeFileSync("L2Q2.out", saida);