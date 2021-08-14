import {PhysAttackType, MagicalAttackType, AttackOrigin, AttackType } from './attackType.js'
let a: AttackType = {
  origin: AttackOrigin.magical,
  type: MagicalAttackType.fire
  }

console.log(a.type, 'fire' == a.type)