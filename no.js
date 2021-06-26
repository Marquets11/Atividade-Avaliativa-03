class no {
    // Construtor da árvore
    constructor(key){
        this.key = key;
        this.esquerda = null;
        this.direita = null;
        this.pai = null;
        this.alt = null;
    }

    // Getter do atributo alt
    getAlt(){
        let _alt
        if(this.pai == null){
            _alt = 0
        }
        else{
            _alt = this.pai.alt + 1
        }

        this.alt = _alt;

        return this.alt;
    }
}

module.exports = no;