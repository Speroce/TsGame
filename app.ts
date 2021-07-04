function maxAttribute (value: number) {
  const attribute: ModedAttribute = {
    full: value,
    actual: value
  }
  return attribute;
}

type ModedAttribute = {
  full: number,
  actual: number
}

interface IUnit {
  id: number,
  hp: ModedAttribute | number,
  name: string,
  attack: ModedAttribute | number,
  defence: ModedAttribute | number,
  minDamage: ModedAttribute | number,
  maxDamage: ModedAttribute | number,
  speed: ModedAttribute | number,
  initiative: ModedAttribute | number,
  properties: string[],
  level: number,
  description: string,
  experience: number,
  spellPoints: ModedAttribute | number,
  knowledge: ModedAttribute | number,
  mana: ModedAttribute | number,
  isAlive: boolean
}

class Unit<T extends IUnit> {
  obj: T;
  constructor (obj: T){
    this.obj = obj;
    typeof this.obj.hp == 'number' && (this.obj.hp = maxAttribute(this.obj.hp));
    typeof this.obj.attack == 'number' && (this.obj.attack = maxAttribute(this.obj.attack));
    typeof this.obj.defence == 'number' && (this.obj.defence = maxAttribute(this.obj.defence));
    typeof this.obj.spellPoints == 'number' && (this.obj.spellPoints = maxAttribute(this.obj.spellPoints));
    typeof this.obj.speed == 'number' && (this.obj.speed = maxAttribute(this.obj.speed));
    typeof this.obj.initiative == 'number' && (this.obj.initiative = maxAttribute(this.obj.initiative));
    typeof this.obj.minDamage == 'number' && (this.obj.minDamage = maxAttribute(this.obj.minDamage));
    typeof this.obj.maxDamage == 'number' && (this.obj.maxDamage = maxAttribute(this.obj.maxDamage));
    typeof this.obj.mana == 'number' && (this.obj.mana = maxAttribute(this.obj.mana));
  };

  get knowledge () {
    return (this.obj.knowledge as ModedAttribute).actual;
  }

  set knowledge (value: number) {
    const knwl = this.obj.knowledge as ModedAttribute;
    knwl.actual = value;
    this.mana = value * 10;
    //knwl.full = value;
    /* const k = value / knwl.full;
    knwl.actual = Math.round(knwl.actual * k);
    knwl.full = k * 10; */
  }

  set mana (value: number) {
    const mana = this.obj.mana as ModedAttribute;

  }

}

class Hero extends Unit<IHero> {
  
}

interface IHero extends IUnit {
  class: string,
  artifacts: string[]
}




function create(){
  const Moander = new Hero({
    id: 9,
    hp: 100, //
    name: 'Moander',
    attack: maxAttribute(0), //
    defence: 1, //  
    spellPoints: 3, //
    knowledge: 2, //
    initiative: 10, //
    minDamage: 10, //
    maxDamage: 15, //
    speed: 5, //
    properties: ['Undead', 'Lich'],
    class: 'Necromancer',
    level: 1,
    description: '',
    experience: 0,
    mana: 20, //
    isAlive: true,
    artifacts: []
  })
}

function getExperience (unit: Unit<IUnit>, value: number) {
  //unit.experience += unit instanceof Hero ? value * 2 : value;
}