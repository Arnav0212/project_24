class Paper {
    constructor(x,y) {
        var options = { 
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:false
        }
        this.body = Bodies.circle(x, y,15,15,options);
       this.width=15;
        this.width=15;
        World.add(world, this.body);
      }
      display(){
  
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0)
        pop();
      }
}