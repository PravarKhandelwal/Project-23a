class box{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
   World.add(world, this.body);

    }
    display()
    {
        var angle = this.body.angle;
        rotate (angle);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}