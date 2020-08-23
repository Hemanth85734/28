class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
    var bodyA=this.sling.bodyA.position
    var pointB=this.sling.pointB


 line (bodyA.x,bodyA.y, pointB.x, pointB.y)
    }
    
}