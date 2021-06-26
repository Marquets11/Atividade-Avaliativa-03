class arvore {
    constructor () {
        this.raizArvore = null;
    }

    visualizarArvore(a){
        if(a != null){
            this.visualizarArvore(a.esquerda);
            console.log(a.key)
            this.visualizarArvore(a.direita);
        }
    }

    visualizarOrdem(a, array = []){
        if(a != null){
            this.visualizarOrdem(a.esquerda, array);
            array.push(a);
            this.visualizarOrdem(a.direita, array);
        }
        return array;
    }
    
    procura(a, key) {
        if(a === null || key === a.key){
            return a;
        }

        if(key < a.key) {
            return this.procura(a.esquerda, key)
        }
        else {
            return this.procura(a.direita, key)
        }
    }

    pegarMaiorValor(a){
        while (a.direita != null){
            a = a.direita;
        }
        return a;
    }

    somarFolhas(a){
        let key
        if(a != null){
            key = a.key
        }
        else{
            key = 0
        }

        let direita
        if(a != null){
            direita = this.somarFolhas(a.direita)
        }
        else{
            direita = 0
        }

        let esquerda
        if(a != null){
            esquerda = this.somarFolhas(a.esquerda)
        }
        else{
            esquerda = 0
        }

        return key + direita + esquerda;
    }

    pegarMenorValor(a){
        while (a.esquerda != null){
            a = a.esquerda;
        }
        return a; 
    }

    pegarProximoValor(a){
        if(a.direita != null){
            return this.pegarMenorValor(a.direita);
        }
        let b = a.pai;
        console.log(b)

        while(b != null & a == b.direita){
            a = b;
            b = b.pai;
        }
        return b;
    }

    
    pegarValorAnterior(a){
        if(a.esquerda != null){
            return this.pegarMaiorValor(a.esquerda);
        }
        let b = a.pai;

        while(b != null & a == b.esquerda){
            a = b;
            b = b.pai;
        }
        return b;
    }

    adicionar(c){
        let b = null;
        let a = this.raizArvore;
    
        while(a != null){
            b = a;

            if(c.key < b.key){
                a = a.esquerda;
            }
            else{
                a = a.direita;
            }
        }

        c.pai = b;
        if(b == null){
            c.alt = 0
        }
        else{
            c.alt = c.pai.alt + 1
        }


        if(b == null){
            this.raizArvore = c;
        }
        else if(c.key < b.key){
            b.esquerda = c;
        }
        else{
            b.direita = c;
        }

        return c.alt;
    }

    remover(c){
        let b;
        let a;

        if(c.esquerda == null || c.direita == null){
            b = c;
        }
        else{
            b = this.pegarProximoValor(c);
        }

        if(b.esquerda != null){
            a = b.esquerda;
        }
        else{
            a = b.direita;
        }

        if(a != null){
            a.pai = b.pai;
        }

        if(b.pai == null){
            this.raizArvore = a;
        }
        else if(b == b.pai.esquerda){
            b.pai.esquerda = a;
        }
        else{
            b.pai.direita = a;
        }

        if(b != c){
            c.key = b.key;
        }

        return b;
    }

}

module.exports = arvore;