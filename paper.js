class Paper{

    constructor(x,y,radius){
          
       

        var options ={
           isStatic:false,
           
           friction:0,
           density:1.2
        }

        this.x = x
        this.y = y
        this.r = radius
          
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

        
    }

    display()
    {

        push ()
        translate(this.body.position.x , this.body.position.y)

        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        
        
        pop ()
        
    }
}