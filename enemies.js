function Enemy(name, rank, health, speed, attack, image) {
    this.name = name;
    this.rank = rank;
    this.health = health;
    this.speed = speed;
    this.attack = attack;
    this.image = image;
  }

let enemy1 = new Enemy("Goblin", "Common", 100, 10, 20, "https://example.com/goblin.jpg");
let enemy2 = new Enemy("Orc", "Rare", 150, 8, 25, "https://example.com/orc.jpg");
let enemy3 = new Enemy("Dragon", "Legendary", 500, 5, 50, "https://example.com/dragon.jpg");


function Player(name, level, health, attack, speed, experience) {
  this.name = name;
  this.level = level;
  this.health = health;
  this.attack = attack;
  this.speed = speed;
  this.experience = experience;
}

let player = new Player("Sung-Jin Woo", 1, 100, 10, 5);