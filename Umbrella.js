class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png");
        this.bImage = loadImage("Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        push();
        if(frameCount < 200){
            imageMode(CENTER);
            image(this.image,pos.x,pos.y+70,300,300);
        }
        else{
            imageMode(CENTER);
            image(this.bImage, pos.x, pos.y + 70, 200, 300)
        }
        pop();
    }
}
