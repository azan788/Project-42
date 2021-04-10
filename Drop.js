class Rain {
    constructor(x,y){
        var options = {
            isStatic : false,
            friction : 0.9
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain);
    }
    update(){
        if(this.rain.position.y > height + 5){
            Matter.Body.setPosition(this.rain, {x : random(0,400), y : random(0,400)})
        }
    }
    display(){
        var pos = this.rain.position;
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 5, 5);
        pop();
    }
}