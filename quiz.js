const accessCode1 = "MILKY WAY";
const accessCode2 = "MARS";
const accessCode3 = "SATURN";
const accessCode4 = "GRAVITY";

class Quiz {
    

    constructor(){

        this.access1 = createInput("write your answer here ")
        this.access1.position(100,160);
        this.access1.style('background', 'lightblue');  

        this.button1 = createButton('Check');
        this.button1.position(280,160);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("write your answer here")
        this.access2.position(700,160);
        this.access2.style('background', 'lightblue');  

        this.button2 = createButton('Check');
        this.button2.position(880,160);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("write your answer here")
        this.access3.position(100,330);
        this.access3.style('background', 'lightblue');  

        this.button3 = createButton('Check');
        this.button3.position(280,330);
        this.button3.style('background', 'lightgrey'); 

        this.access4 = createInput("write your answer here")
        this.access4.position(700,330);
        this.access4.style('background', 'lightblue');  

        this.button4 = createButton('Check');
        this.button4.position(880,330);
        this.button4.style('background', 'lightgrey'); 
    }

    display(){

        this.button1.mousePressed(() => {
            if(quiz.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
               /* fill("white")
                textSize(15)
                text("Well Done!!!", 100,150)*/
              
            }
        });

        this.button2.mousePressed(() => {
            if(quiz.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(quiz.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(quiz.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

    }
   

    clues() {
        
        fill("white")
        textSize(15)
        //write your ques here
        text("What is the name of our galaxy?", 100,150)
        
        

        fill("white")
        textSize(15)
         //write your ques here
         text("Which planet is known as red planet?", 700,150)
        
       
       

        fill("white")
        textSize(15)
         //write your ques here
         text("what is the name of the 2nd biggest planet in our solar system?", 100,320)

         fill("white")
         textSize(15)
          //write your ques here
          text("what is the name of the force holding to the earth", 700,320)
   
       
       

    }
    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
       // text(code,300,300)
        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else
            return false
    }
}