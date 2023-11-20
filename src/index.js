class heroDungeon{
    constructor(nameHero, ageHero, typeHero) {
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.typeHero = typeHero
    }
    
    toAtacck() {
        if (this.typeHero == "Wizard") {
            console.log(`${this.typeHero} ${this.nameHero} used magic!`)
        } else if (this.typeHero == "Warrior") {
            console.log(`${this.typeHero} ${this.nameHero} used sword!`)
        } else if(this.typeHero == "Monk"){
            console.log(`${this.typeHero} ${this.nameHero} used martial arts!`)
        }else if(this.typeHero == "Ninja"){
            console.log(`${this.typeHero} ${this.nameHero} used shuriken!`)
        }
    }

}

let wizardHero = new heroDungeon("Mago do CSharp", "1000 anos", "Wizard")
let warriorHero = new heroDungeon("Gladiador do Java", "40 anos", "Warrior")
let monkHero = new heroDungeon("Mestre do Flutter", "300 anos", "Monk")
let ninjaHero = new heroDungeon("KunGo","25 anos","Ninja")

wizardHero.toAtacck()
warriorHero.toAtacck()
monkHero.toAtacck()
ninjaHero.toAtacck()
