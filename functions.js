//Functions allow code to be reusable 
    //Defines a chunk of code that can execute at a later point
        //USED OFTEN!!!
            //2 steps -> define, then run

//function funcName(){
    //functionality
//}

//function travel(){
  //  console.log('Thailand marriage');
    //console.log('India');
    //console.log('Boise');
//}



//Arguments : 
    //functions can also take input (arguments)

//let firstName = prompt('Please enter your first name')
  //  function greet(){
    //console.log(`Name  is set to: ${firstName}`)
//}  

//Multiple Arguments:

//let firstName; lastName = prompt('Please enter your name')
//function greeting(firstName, lastName) {
  //  console.log(`Hey there, ${firstName}!`);
//}


//The Return Keyword:
    //Built-In methods return values when we call them
        //Can store those values
//EXAMPLE -> :

//const yell = 'I am yelling".toUpperCase();
    //yell;
        //const idx = ['a','b','c'].indexOf('c');
            //idx;



//FUNCTION SCOPE: 
    //Variable visibility
    //The location where a variable is defined dictates where I have access to it

//let favoriteGame = 'Elder Scrolls Online'; scope function sets variable first
//function games(){
 //   console.log(`Issac's favorite game is ${favoriteGame}`);
//}

//BLOCK SCOPE:
    //if a variable is declared in block {} only accessible in that block


    // let radius =4; //let radius equal 4

//if (radius >0) {//if radius is greater than 0 
  //  const area=2; //this variable too
  //  let inBlock = true; //variables would only exist in the block
//} 

//LEXICAL SCOPE:
    //Parent / child functions, put in a thing called a scope. Can access variable defined in it

    //function thailandTrip() {
        //const things = ['Rent', 'Visa', 'Plane Tickets'];
        //function dontForget() {
            //for (let thailand of things) {
                //console.log('don't forget to make sure everythings taken care of.');
            //}
        //}
        //dontForget();
    //}
    

//FUNCTION EXPRESSIONS:
    //expressions written in a function. While the function itself is written in a variable.

        //const square = function (num) {
            //return num * num;
        //}
        //square(7); 49 -> this would multiply num * num (squaring it)

//HIGHER ORDER FUNCTIONS:
    //Functions that operate with other functions. (Think like arguments)

        //function echo(func){
            //func();
            //func();
        //}
        //function words() {
            //const yell = prompt('Yell a word and hear a response');
            //console.log(yell);
        //}
        //echo(words);
                        //In this example function echo would run then display a prompt asking to enter a word
                        //Then repeating those words back


 
//RETURNING FUNCTIONS:
    //Returns a function

    //function didIPass(){
        //const grade = prompt('Please enter your grade number');
        //if (grade > .75){
            //return function() 
            //}
        //}
    //}

    //Can also do various cool things such as return two numbers, compare, etc, theres no limit. If confused
        //use WEBDocs or see it in use


//DEFINING METHODS:
    //I can add properties to functions, called methods
        //.cube() 
        //.square()
        //.toUpperCase()
        //etc.....

        //written like this:

        //let retain = prompt('Please enter the percent received on your test');
         //const answer = {
            //knowledge: function (num){
                //return answer + percentRetained
            //}
         //}

    //WHAT DOES "THIS" MEAN IN METHODS?!?
        //Used to acccess other properties on the same object

        //const showsImWatching {
            //show: One Piece;
            //howFar: 170~ episodes;
            //currentlyWatching() {
             //alert(`I'm not currently watching ${this.show}, must be spending time with my girlfriend`);   
            //}
        //} I can also set a new variable instead of using this.

        //TRY & CATCH:
            //Allows use of methods on something without a variable
                //try {
                    //apples.toUpperCase();
                //} catch {
                //console.log('Complete);
                //}
                


//FUNCTION EXAMPLES:

function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
  }
  
  console.log(sayHello("world")); //Simple program to say hello ___ how are you
  

  function mathAddition(num1, num2) {
  console.log(num1 + num2)
  }
  
  mathAddition(11,22) //simple addition taking two numbers specified
  
  function mathSubtraction(num3,num4) { 
      console.log(num3 - num4);
  }
  mathSubtraction(15,19); //same thing for subtraction
  
  function myLocation(location) {
      let msg = `Hey there, I see you're located in ${location}.`;
      return msg;
  }
  console.log(myLocation("Thailand")); //function for location. in this case thailand


  
  function yell(str) {
    let sYell = str.toUpperCase()
    return sYell;
}

console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"




  function averageOfFour(num1,num2,num3,num4) {
    let sum = num1 + num2 + num3 + num4
    console.log(sum /4)
}

averageOfFour(10, 10, 15, 5); // => 10
averageOfFour(3, 10, 11, 4); // => 7
averageOfFour(1, 2, 3, 4); // => 2.5