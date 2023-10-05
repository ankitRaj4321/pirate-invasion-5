class Boat {

  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      restitution: 0.8,
      friction: 1,
      density:1.0
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    //this.boatposition = boatpos;
    this.image = loadImage("./asstes/boat.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
}
