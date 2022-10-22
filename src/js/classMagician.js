import Character from './classCharacter';

export default class Magician extends Character {
  constructor(name, type, stoned, distance, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 100;
    this.defence = 40;
    this.stoned = stoned;
    this.distance = distance;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    this._attack *= (1 - (this.distance - 1) / 10);
    this._attack = this.stoned ? this._attack - Math.log2(this.distance) * 5 : this._attack;
    return Math.round(this._attack);
  }
}
