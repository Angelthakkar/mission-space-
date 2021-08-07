function state0(){
    background(space1)

    
 
   
   wire.addImage(wire1)
   wire.scale=0.2
    
 
      if(mousePressedOver(wire)){
         wire.x=mouseX;
         wire.y=mouseY;
      }

      if (spaceship.isTouching(wire)){
      wire.destroy()
      spaceship.velocityY=-5;
      spaceship.velocityX=-1;
      }
     // wire.debug=true;
     // spaceship.debug=true;

    } 
