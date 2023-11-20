class heroDungeon{
    constructor(nameHero, ageHero, typeHero) {
        this.name = nameHero
        this.ageHero = ageHero
        this.typeHero = typeHero
    }
    
    toAtacck(typeHero) {
        if (typeHero == "Wizard") {
            console.log(`${typeHero} used magic!`)
        } else if (typeHero == "Warrior") {
            console.log(`${typeHero} used sword!`)
        } else if(typeHero == "Monk"){
            console.log(`${typeHero} used martial arts!`)
        }else if(typeHero == "Ninja"){
            console.log(`${typeHero} used shuriken!`)
        }
    }

}