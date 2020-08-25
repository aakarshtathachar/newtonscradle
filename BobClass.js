class BobClass {
    constructor(x,y,r) {
        var options={
        
       isStatic:false,
            restitution:1,
            //friction:0.5,
            density:0.8
        }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, 20);
      pop();
    }
  };



