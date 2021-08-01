export enum PhysAttackType {
regular = 'regular',
hardened = 'hardened'
}

export enum MagicalAttackType {
fire = 'fire',
water = 'water',
earth = 'earth',
air = 'air',
power = 'power',
dark = 'dark'
}

export enum AttackOrigin {
physical = 'physical',
magical = 'magical'
}

export type AttackType = {
origin: AttackOrigin,
type: PhysAttackType | MagicalAttackType
}
