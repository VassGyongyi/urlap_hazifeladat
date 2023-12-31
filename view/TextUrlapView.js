export default class TextUrlapView {
    #value = ""
    #valid = false
    constructor(szuloElem, obj, key) {
        this.szuloElem = szuloElem;
        this.obj = obj;
        this.key = key;
        this.textUrlapElem();
        //megfogjuk az text input mezőnket
        this.inputElem = $(`#${this.key}`)
        this.#value = this.inputElem.val()
        //a beviteli mező billentyű felengedés eseményének kezelése
        this.inputElem.on("keyup", () => {
           console.log(this.inputElem.val())
            //eltároljuk az elem értékét a #value privát adattagban.
            this.#value = this.inputElem.val()
            //valid-e? 
            let patternString = this.obj.pattern;//reguláris kifejezés
            let pattern = new RegExp(patternString);//reguláris kifejezés átalakítása reguláris objektummá
            //a reguláris OBJEKTUM test metódusa ellenőrzi a megfelelőséget, visszatérési értéke true, vagy false
            if (pattern.test(this.#value)) {
                this.#valid = true;
            } else {
                this.#valid = false;
            }
            console.log(this.#valid)
        });
    }
    getValue() {
        return  this.#value
    }

    getValid()
    {
        return this.#valid
    }
    textUrlapElem() {
        let txt = `<div class="mb-3 mt-3">
        <label for="${this.key}" class="form-label">${this.obj.megjelenes}</label>
        <input type="${this.obj.tipus}" class="form-control" 
                id="${this.key}" 
                placeholder="${this.obj.placeholder}"
                pattern="${this.obj.pattern}"
                value="${this.obj.value}"
                name="${this.key}">

        
         </div>`
        this.szuloElem.append(txt)
    }
}