class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 219, 20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(8);
            stroke("#301608");
            line(pointA.x-26, pointA.y+5, pointB.x-10, pointB.y+5);
            line(pointA.x-26, pointA.y+5, pointB.x+24, pointB.y+5);
            image(this.sling3, pointA.x-25, pointA.y-7, 10, 25);
            pop();
        }
    }
    
    after1(){
        image(this.sling2, 192, 18);
    }

    reattach(body){
        this.sling.bodyA = body;
    }

}