class Dustbin {
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/DustbinImage.png")
        World.add(world, this.body);
    }
    display(){
    rectMode(CENTER);
    fill("white");
    image(this.image, 570, 500, 150, 150)
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}