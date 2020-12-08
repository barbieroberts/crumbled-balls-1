class Ball{
    constructor(x,y,radius){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
    this.x=x,
    this.y=y
    this.radi=radi
    this.body=Bodies.circle (this.x,this.y,radi,options)
    World.add(world,this.body);
}
    display()
    {
        
        this.ballpos=this.body.position;
        push()
        translate(ballpos.x,this.ballpos.y)
        ellipseMode(RADIUS) 
        strokeWeight(3)
        fill(255,0,255)
        ellipse(0,0,this.radius,this.radius);
        pop()

    }
}