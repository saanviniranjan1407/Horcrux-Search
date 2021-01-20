class Harry{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage('images/HarryPotter.png');
        World.add(world,this.body);
    }

    display(){
        if(keyWentDown(UP_ARROW)){
            this.velocityY = -5;
        }

        if(keyWentDown(DOWN_ARROW)){
            this.velocityY = 5;
        }

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}