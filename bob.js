class Bob{

    constructor(x,y,radius){

        var options={
            isStatic:false,
             restitution:1.2,
              friction:0.0,
               density:1.2
        }
        this.radius=radius
            this.body=Bodies.circle(x,y,radius,options);
            
           
            World.add(world,this.body);
           }
           display(){
               var pos=this.body.position;
               fill ("white");
              ellipseMode(RADIUS);
              ellipse(pos.x,pos.y,this.radius);
             
       
        
    }
}