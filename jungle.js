class Animal {
  #name;
  #species;
  #energy;
  #decreaseAmount = 10;
  #increaseAmount = 10;

  static remainingAnimals = 0;

  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;

    Animal.remainingAnimals += 1
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get species() {
    return this.#species;
  }

  set species(species) {
    this.#species = species;
  }

  get energy() {
    return this.#energy;
  }

  set energy(energy) {
    this.#energy = energy;
  }

  get decreaseAmount() {
    return this.#decreaseAmount;
  }

  set decreaseAmount(decreaseAmount) {
    this.#decreaseAmount = decreaseAmount;
  }

  get increaseAmount() {
    return this.#increaseAmount;
  }

  set increaseAmount(increaseAmount) {
    this.#increaseAmount = increaseAmount;
  }

  attack (target) {
    this.#energy -= this.#decreaseAmount;
    target.energy -= this.#decreaseAmount;

    if (this.#energy <= 0) {
      console.log(`${target.name} won`)
      Animal.remainingAnimals -= 1
    }

    if (target.energy <= 0) {
      console.log(`${this.name} won`)
      Animal.remainingAnimals -= 1
    }

    console.log(`${this.name}'s energy: ${this.energy}`)
    console.log(`${target.name}'s energy: ${target.energy}`);
  }

  eat() {
    this.#energy += this.increaseAmount;
    console.log(`${this.name} eats and gains energy!`)
    console.log(`${this.name}'s energy: ${this.energy}`)
  }
}

class Bird extends Animal {
  #canFly

  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
    this.decreaseAmount = 20;
    this.increaseAmount = 10;
  }

  get canFly() {
    return this.#canFly;
  }

  set canFly(conFly) {
    this.#canFly = conFly;
  }

  attack (target) {
    console.log(`${this.name} swoops in to attack ${target.name}!`)
    super.attack(target);
  }
}

class Mammal extends Animal {
  #furColor;

  constructor(name, species, furColor) {
    super(name, species, 200);
    this.#furColor = furColor;
    this.decreaseAmount = 50;
    this.increaseAmount = 20;
  }

  get furColor() {
    return this.#furColor;
  }

  set furColor(conFur) {
    this.#furColor = conFur;
  }

  attack (target) {
    console.log(`${this.name} lunges to attack ${target.name}!`)
    super.attack(target);
  }
}

class Reptile extends Animal {
  #coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded = coldBlooded;
    this.decreaseAmount = 30;
    this.increaseAmount = 15;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }

  set coldBlooded(conFur) {
    this.#coldBlooded = conFur;
  }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
