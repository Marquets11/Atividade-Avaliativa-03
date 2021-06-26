const arvore = require("./arvore");
const no = require("./no");
const fs = require("fs");

// Lê o arquivo 'L2Q3.in' e joga na variavel 'arquivo3'
let arquivo3 = fs.readFileSync('./L2Q3.in', 'utf-8')

// Separa em linhas o arquivo
entrada = arquivo3.split(/\r?\n/);

// Captura os valores das linhas
for(x = 0; x < entrada.length; x++){
    entrada[x] = entrada[x].split(" ");
}

let saida = "";

for (x = 0; x < entrada.length; x++){
    let linhaArray = entrada[x];
    let arvoreBinaria = new arvore();

    for(y = 0; y < linhaArray.length; y++){
        if(linhaArray[y] == 'a'){
            y += 1;
            arvoreBinaria.adicionar(new no(parseInt(linhaArray[y])));
        }else if(linhaArray[y] == 'r'){
            y += 1;
            let noBuscado = arvoreBinaria.procura(arvoreBinaria.raizArvore, parseInt(linhaArray[y]));
            if(noBuscado == null){
                arvoreBinaria.adicionar(new no(parseInt(linhaArray[y])));
            }else{
                arvoreBinaria.remover(noBuscado);
            }
        }
    }

    let arvoreArray = arvoreBinaria.visualizarOrdem(arvoreBinaria.raizArvore);

    for(y = 0; y < arvoreArray.length; y++){
        saida += `${arvoreArray[y].key} (${arvoreArray[y].getAlt()}) `;
    }

    saida += "\n";
}

fs.writeFileSync("L2Q3.out", saida);