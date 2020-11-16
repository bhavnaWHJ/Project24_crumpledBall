class Paper{
    constructor(){

        var options = {
            restitution: 0.8,
            density: 1.2,
            friction: 0.5,
            isStatic: false
        }

        this.body = Bodies.circle(50,500,50,options);

        this.image = loadImage("crumpledBall1.png")
        World.add(world, this.body);


    }

    display(){

        //ellipseMode(CENTER);
        //ellipse(this.body.position.x, this.body.position.y,40,40);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)



    }
}