
// ---Chapter # 1 ALERTS---


// Task  1;
// alert("Hello..! \nWelcome to my site");

// Task # 2
// alert("Error!Please enter a valid password")

// Task # 3
// alert("Welcome to JS land...\nHappy Coding!");

// Task # 4
// alert("Welcome to JS Land");
// alert("Happy Coding! \nPrevent this page from creating additional dialogs.");

// Task # 5
// alert("Hello..I can run JS through my web broswser's console")

// Task # 6
// I have used it in my html file

// Task # 7
// I have practiced by placing script at different sections





//   ---Chpater # 2 VARIABLES FOR STRINGS ---

//Task # 1
// var username;

//Task # 2
// var myName="Muhammad Ahmed Ansari";

//Task # 3
// var message;
// message="Hello World";
// alert(message);

//Task # 4
// var name ="John Doe";
// var age  ="15 years old";
// var course = "Certified Mobile Development";
// alert(name);
// alert(age);
// alert(course);

//Task # 5
// var a ="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(a);

//Task # 6
// var email = " ahmedshahzadaaa@gmail.com"
// alert("My email address is " + email);

//Task # 7
// var book = "A smarter way to learn JavaScript";
// alert("I am tryig to learn form the book" +learn);

//Task # 8
// var a ="yah! I can write html content through js";
// document.write(a);

//Task # 9
// var message;
// message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(message);
// document.write(message);






//   ---Chapter # 3 VARIABLES FOR NUMBERS ---

//Task #1
// var age;
// age = 15;
// alert("I am" + age + "years old");

//Task # 2
// var n = 3;
// alert("you have visited this site " +n +" times")




//Task # 3
// var birthYear = 1998;
// document.write("My birth year is " +birthYear + "<br>" +" Data type of my declared vaiable is number");

//Task # 4
// var name ="John Doe";
// var product ="T-shirt(s)";
// var quantity = 5;
// document.write(name + " ordered " +quantity+" " +product +" on XYZ Clothing store.")





//   --- Chapter # 4 Variable Names Legal and Illegal ---

//Task # 1
// var myName , farherName , age;


//Task # 2

//Legal Variables
// var myName , farherName , age ,$my , _1stVariable;

//Illegal

// var 1Name;
// var alert;
// var number = "7"
// var Order = "Anything";
// var 3 = "name";

//Task # 3
// document.write("Rules for naming JS variables" +"<br>");
// document.write("Variable names can only contain numbers , $ and _. For Example : $my_1stVariable" +"<br>");
// document.write("Variables must begin with a $ and _ . For Example : $name , _name or name" +"<br>");
// document.write("Variable names are case sensitive" +"<br>");
// document.write("Variable names should not be JS keywords")




//   --- Chapter # 5 MATH EXPRESSIONS ---


//Task # 1

// var firstNumber = 3;
// var secondNumber = 5;
// var total =firstNumber+secondNumber;
// document.write("Sum of 3 and 5 is " +total);


//Task # 2 (Subtraction)

// var firstNumber = 3;
// var secondNumber = 5;
// var total =firstNumber-secondNumber;
// document.write("Subtraction of 3 and 5 is " +total);


//Task # 2 (Multiplication)

// var firstNumber = 3;
// var secondNumber = 5;
// var total =firstNumber*secondNumber;
// document.write("Multiplication of 3 and 5 is " +total);


//Task # 2 (Division)

// var firstNumber = 3;
// var secondNumber = 5;
// var total =firstNumber/secondNumber;
// document.write("Division of 3 and 5 is " +total);


//Task # 2 (Mosulus)

// var firstNumber = 3;
// var secondNumber = 5 ;
// var total = firstNumber % secondNumber;
// document.write("Modulus of 3 and 5 is " +total);



//Task # 3

// var a;
// document.write("Value after variable declaration is "+a +"<br>" );
// a=5;
// document.write("Initial value:" +a +"<br>");
// a++;
// document.write("Value after increment is:" +a +"<br>");
// a=a+7;
// document.write("Value after addition is: " +a +"<br>")
// --a;
// document.write("Value after decrement is: " +a +"<br>");
// a=a%3;
// document.write("The remainder is:" +a);


//Task # 4

// var ticket = 600;
// ticket = 5*600;
// document.write("Total cost to buy 5 tickets to a movie is " +ticket +"<b>PKR")


//Task # 5

// document.write("Table of 4"+" <br>");
// var i ;
// for( i = 1 ; i <= 10 ; i++){
// document.write(4 +" x " +i + " = " +4*i  +"<br>");
// }


//Task # 6

// var celsius =  25;
// var fahrenheit =70;
// fahrenheit = (celsius * 9/5) +32;
// document.write( "25°C is " +fahrenheit +"°F" +"<br>");
// var celsius =  25;
// var fahrenheit =70;
// c =(fahrenheit-32) * 5/9;
// document.write( "70°F is " + c + "°C");


//Task # 7

// var item1_price= 650;
// var quantityOfItem1= 3;
// var item2_price = 100;
// var quantityOfItem2 = 7;
// var charges = 100;
// document.write ("Price of item 1 is " + item1_price  + "<br>")
// document.write("quantity of item 1 is " + quantityOfItem1 + "<br>")
// document.write ("Price of item 2 is " + item2_price  + "<br>")
// document.write("quantity of item 2 is " + quantityOfItem2 + "<br>")
// document.write("Shipping Charges " + charges + "<br>" + "<br>")
// var totalCost =item1_price*quantityOfItem1 + item2_price*quantityOfItem2 + charges;
// document.write("Total Cost of your order is " +totalCost);


//Task # 8

// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = obtainedMarks/totalMarks*100;
// document.write("Total Marks :" +totalMarks + "<br>");
// document.write("Obtained Marks :" +obtainedMarks + "<br>");
// document.write("Percentage :" +percentage +"%");


//Task # 9

// var usDollar = 10;
// var riyals = 25;
// var exchangeRateOfDollars = 104.80 *usDollar;
// var exchangeRateOfRiyals= 28 * riyals;
// var totalCurrency = exchangeRateOfDollars+ exchangeRateOfRiyals;
// document.write("Exchange Rate : 10 US dollars = " + exchangeRateOfDollars +"<br>")
// document.write("Exchange Rate : 25 Riyals = " + exchangeRateOfRiyals  +"<br>")
// document.write("Total Currency in PKR :" + totalCurrency);


//Task # 10

// var a = 5;
// a = (a+5 *10)/2;
// document.write(a);


//Task # 11

// var currentYear = 2020;
// var birthYear = 1998;
// var age = currentYear-birthYear;
// document.write("<h1> Age Calculator</h1>")
// document.write("Current Year " + currentYear +"<br>");
// document.write("Birth Year " + birthYear +"<br>");
// document.write("Your age is :" +age);


//Task # 12

// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius*radius;
// document.write("<h1>The Geometrizer:</h1> <br>" )
// document.write("Radius of a Circle :" +radius +"<br>");
// document.write("The circumference is " + circumference +"<br>");
// document.write("The area is " + area );


//Task # 13

// document.write("<h1>The Lifetime Supply Calculator: </h1> <br>" )
// var favouriteSnack = "Chocolate Chip";
// var oneYear = 365;
// var currentAge = 15;
// var maximumAge = 65;
// var amountOfSnacks = 3;
// var totalEatSnacks =( maximumAge-currentAge )* amountOfSnacks*oneYear;
// document.write("Favorite snack :" +favouriteSnack +"<br>");
// document.write("Current age :" +currentAge +"<br>");
// document.write("Maximum age  :" +maximumAge +"<br>");
// document.write("Estimated amount  :" +amountOfSnacks +"<br>");
// document.write("You will need " +totalEatSnacks +" to last you until the ripe old age of " + maximumAge);





//   ---Chapter # 6-9--- 

//Task # 1
// var a = 10;
// document.write("Result:" +"<br>")
// document.write("The value of a is: " +a +"<br>") ;
// document.write("......................................." +"<br>" +"<br>");
// ++a;
// document.write("The value of ++a is : " +a +"<br>");
// document.write("Now the value of a is : " +a +"<br>" +"<br>");
// document.write("The value of a++ is : " +a +"<br>");
// a++;
// document.write("Now the value of a is : " +a +"<br>" +"<br>");
// --a;
// document.write("The value of --a is : " +a +"<br>");
// document.write("Now the value of a is : " +a +"<br>" +"<br>");
// document.write("The value of a-- is : " +a +"<br>");
// a--;
// document.write("Now the value of a is : " +a +"<br>" +"<br>");


//Task # 2

// var a = 2, b = 1, result;
// document.write("a is " +a +"<br>");
// document.write("b is " +b +"<br>");
// --a; =1; 
// --a - --b; = 1-0 ; 
// --a - --b + ++b; = 1+1 = 2
// --a - --b + ++b + b--; = 2+1;

// result = --a - --b + ++b + b--;
// document.write("result is " +result);



//Task # 3

// var name = prompt("Enter your name");
// document.write("Dear " +name +" Welcome to our site.")



//Task # 4

// var num = +prompt("Enter a number");
// if (num == "") {
//     var number = 5;
//     for (var i = 1; i <= 10; i++) {
//         document.write(number + " *" + i + " =" + number * i + "<br>")
//     }
// }

// else
// {

//             for (var i = 1; i <= 10; i++) {
//             document.write(num + " *" + i + " =" + num * i + "<br>")
//         }
// }



// //Task # 5

// var sub1 = prompt("Enter first Subject");
// var sub2 = prompt("Enter Second Subject");
// var sub3 = prompt("Enter third Subject");

// var totalMarksOfSub1 = 100;
// var totalMarksOfSub2 = 100;
// var totalMarksOfSub3 = 100;
// var totalMarks = totalMarksOfSub1+totalMarksOfSub2+totalMarksOfSub3;

// var obtainedMarksOFSub1 = +prompt("Enter obtained marks of subject 1");
// var obtainedMarksOFSub2 = +prompt("Enter obtained marks of subject 2");
// var obtainedMarksOFSub3 = +prompt("Enter obtained marks of subject 3");
// var totalObtainedMarks = obtainedMarksOFSub1+obtainedMarksOFSub2+obtainedMarksOFSub3;

// var percentageOfSub1 = obtainedMarksOFSub1/totalMarksOfSub1*100;
// var percentageOfSub2 = obtainedMarksOFSub2/totalMarksOfSub2*100;
// var percentageOfSub3 = obtainedMarksOFSub3/totalMarksOfSub3*100;
// var totalPercentage = (percentageOfSub1+percentageOfSub2+percentageOfSub3) /3 *100;

// var totalMarks = totalMarksOfSub1+totalMarksOfSub2+totalMarksOfSub3;
// var obtainedMarks =obtainedMarksOFSub1+obtainedMarksOFSub2+obtainedMarksOFSub3;
// var percentage = obtainedMarks/totalMarks *100;

// document.write("<table><tr><th><b>Subject &nbsp    Total Marks Obtained Marks Percentage</b>");
// document.write("<tr><td>"+sub1 +  "  &nbsp &nbsp  "+ totalMarksOfSub1 +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     "+ obtainedMarksOFSub1 + " &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp        " + percentageOfSub1 +"%" +"</td></tr>")
// document.write("<tr><td>"+sub2 +  " &nbsp &nbsp &nbsp  "+ totalMarksOfSub2 +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     "+ obtainedMarksOFSub2 + " &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp        " + percentageOfSub2 +"%" +"</td></tr>")
// document.write("<tr><td>"+sub3 +  " &nbsp &nbsp &nbsp  "+ totalMarksOfSub3 +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     "+ obtainedMarksOFSub3 + " &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp        " + percentageOfSub3 +"%" +"</td></tr>")
// document.write("<tr><td>" +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     " + totalMarks + " &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp        "+totalObtainedMarks +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " +totalPercentage +"%" +"</td></tr></table>")







//   ---Chapter # 9-11 ---


//Task # 1

// var cityName =  prompt("Enter City Name ");
// if (cityName === "Karachi"){
//     alert("Welcome to city of lights")
// }


// Task # 2

// var gender = prompt("Enter your gender");
// if (gender ==="male"){
//     alert("  Good Morning Sir. ")
// }
// if (gender==="female"){
//     alert("Good Morning Ma’am.")
// }


//Task # 3

// var signalColor = prompt("Enter color of road traffic signal ")
// document.write("<table><tr><th><b>Signal Color &nbsp &nbsp&nbsp  Message</b></th></tr>");
// if (signalColor ==="Red"){
// document.write("<tr><td> Red"+  " &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp " +      "Must Stop"  +"</td></tr>")

// }

// if (signalColor==="Yellow"){
//  document.write("<tr><td>Yellow"+  "   &nbsp&nbsp&nbsp&nbsp " +      "Ready to move"  +"</td></tr>")

// }
// if (signalColor==="Green"){
//     document.write("<tr><td> Green"+  " &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp " +      "Move now"  +"</td></tr></table>")

// }




// Task # 4

// var remainingFuel = prompt("Enter remaining fuel in liters")
// if (remainingFuel <0.25 ){
//     alert("Please refill the fuel in your car");
// }


//Task # 5

//a Result : Alert is displayed
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


//Task # 5

//b Result : Alert is not displayed
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


//Task # 5 

//c Result : Alert is  displayed at condition 2 and 4
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


//Task # 5

//d Result : Alert is  displayed
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


//Task # 5

//e Result : Alert is  displayed
// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     }


//Task # 5

// f Result : Alert is  displayed
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


//Task # 6

// var obtainedMarks = prompt("Enter obtained marks in three subjects")
// var totalMarks = prompt("Enter total marks");
// var percentage = obtainedMarks/totalMarks*100;
// document.write("<h1><b>Marks Sheet</b></h1> <br> <br>");
// document.write("Total marks :" + totalMarks +"<br>");
// document.write("Marks obtained" +obtainedMarks +"<br>")
// document.write("Percentage" +percentage +"%" +"<br>");
// if (percentage >=80 ){
//     document.write("Grade : A-one" +"<br>")
//     document.write("Excellent")
// }
// if (percentage < 80 &&percentage >=70){
//     document.write("Grade : A" +"<br>")
//     document.write("Good")
// } 
// if (percentage < 70 && percentage >=60){
//     document.write("Grade : B" +"<br>")
//     document.write("You need to improve")
// }
// if (percentage < 60){
//     document.write("Grade : Fail" +"<br>")
//     document.write("Sorry")
// } 


//Task # 7

// var secretNumber = 4;
// var guessNumber = +prompt("Guess the secret number");
// // var closeNumber = guessNumber+1;
// if(guessNumber ===secretNumber){
//     alert("Bingo! Correct answer")
// }
// if( guessNumber+1 === secretNumber){
// alert("Close enough to the correct answer")
// }


//Task # 8

// var number = +prompt("Enter a number");
// if (number % 3 ==0){
//     alert("This number is divisible by 3")
// }
// else{
//     alert("The given number is not divisible by 3")
// }


//Task # 9

// var number = +prompt("Enter a number");
// if (number % 2 == 0) {
//     alert("This number an even number")
// }

// if(number % 2 != 0) {
//     alert("The given number is an odd number")
// }



//Task # 10

// var temp = +prompt("Enter temperature");
// if (temp >40 ){
//     document.write("It is too hot outside.")
// }
// if(temp < 40 && temp > 30 ){
//     document.write("The Weather today is Normal.")
// }
// if(temp <31 && temp > 20){
//     document.write("Today’s Weather is cool.")
// }
// if( temp<21 && temp> 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }


//Task # 11

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var operator = prompt("Chosse the operation +,-,*, / , % ");

// if (operator === "+") {
//     var additon = firstNumber + secondNumber;
//     alert("Addition of two numbers is " + additon);
// }
// if (operator === "-") {
//     var sub = firstNumber - secondNumber;
//     alert("Subtraction of two numbers is " + sub);
// }
// if (operator === "*") {
//     var mul = firstNumber * secondNumber;
//     alert("Multiplication of two numbers is " + mul);
// }
// if (operator === "/") {
//     var div = firstNumber / secondNumber;
//     alert("Division of two numbers is " + div);
// }
// if (operator === "%") {
//     var remainder = firstNumber % secondNumber
//     alert("Remainder of two numbers is " +remainder)
// }



//   ---Chapeters 12-13---


//Task # 1

// var input = prompt("Enter any character");
// if (input.charCodeAt(0) >=65  && input.charCodeAt(0) <=90){
//     alert("This is uppercase letter");
// }
// else if (input.charCodeAt(0) >=97 && input.charCodeAt(0)<=122 ){
//     alert("This is lowercase letter");
// }
// else {
//     alert("This is a number");
// }


//Task # 2

// var firstNumber = +prompt("Enter frst integer");
// var secondNumber = +prompt("Enter second integer");
// if (firstNumber > secondNumber){
//     alert(firstNumber +" is larger");
// }
// else if (secondNumber > firstNumber){
//     alert(secondNumber + " is larger");
// }
// else{
//     alert("Both numbers  are equal");
// }

//Task # 3
// var input = prompt("Enter a number");
// if (input>0){
//     alert("This is a positive number");
// }
// else if (input<0){
//     alert("This is a negative number");

// }
// else{
//     alert("You have entered zero")
// }


//Task # 4

// var str = prompt("Enter any character");
// if (str.length===1 && (str === "a" || str ==="e" ||str==="o" || str==="i" || str==="u" )){
//     alert("true")
// }
// else {
//     alert("False")
// }


//Task # 5

// var password = "Agree123";
// var inputPassword = prompt("Enter your password");
// if (inputPassword===""){
//     alert("Please enter your password");
// }
// else if (inputPassword===password){
//     alert("Correct! The password you entered matches the original password")
// }
// else {
//     alert("Incorrect password")
// }


//Task # 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else
// {
// greeting = "Good evening";
// alert(greeting);
// }


//Tasl # 7

// var inputTime = +prompt("Enter time ");
// if (inputTime>=0000 && inputTime<1200){
//     alert("Good morning");
// }
// else if (inputTime >= 1200 && inputTime <1700){
//     alert("Good afternoon!");
// }
// else if (inputTime >=1700 && inputTime<2100){
//     alert("Good evening");
// }
// else if (inputTime>=2100 && inputTime <=2359){
//     alert("Good night");
// }
// else {
//     alert("please! Enter valid time ");
// }





//   ---Chapters 14-16 ---


//Task # 1

// var arr = [];
// console.log(arr);


//Task # 2

// var arr = new Array();
// console.log(arr);


//Task # 3

// var strArr = ["Mubeen" , "Maheen" , "Muqaddas" , "Maham"];
// document.write(strArr);


//Task # 4

// var numberArr = [1,2,3,4,5,6,7,8];
// document.write(numberArr);


//Task # 5

// var array = [true , false];


//Task # 6

// var arr = ["ali", 1, 2 ,"Alina" , 6];
// document.write(arr[2]);


//Task # 7

// var qualification =[" SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// var number = ["1)", "2)" , "3)" , "4)" , "5)" , "6)" , "7)" , "8)"]
// for (var i =0 ; i<qualification.length ; i++)
// {
//     document.write( number[i] +" "+qualification[i] +"<br>")
// }


//Task # 8

// var StudentNames = ["Michael" , "John" , "Tony"];
// var marks = [320,230,480];
// var totalMarks = 500;
// for (var i =0 ;i<StudentNames.length ; i++){
//     document.write("Score of " +StudentNames[i] +" is " +marks[i] + " Percentage :" + marks[i]/totalMarks*100 +"%"+ "<br>")
// }

//Task # 9

// var colorNames = ["white " , "Blue" , "Green" , "Yellow" , "Black" ];
// document.write(colorNames +"<br>");
// var addingAtFirst = prompt("What color you want to add color at beginning" );
// colorNames.unshift(addingAtFirst);
// document.write(colorNames +"<br>");
// var addingAtLast = prompt("What color you want to add color to the end" );
// colorNames.push(addingAtLast);
// document.write(colorNames +"<br>");
// colorNames.unshift("Aqua " , "Brown");
// document.write(colorNames +"<br>");
// colorNames.shift(colorNames[0]);
// document.write(colorNames +"<br>");
// colorNames.pop(colorNames[colorNames.length-1]);
// document.write(colorNames +"<br>");
// var startIndex = +prompt("At which index you want to add a color & color name. Enter the index");
// var removeValue = +prompt("Enter the index at which you want to replace that value . Write 0 if you just want to add");
// var colorName = prompt("Enter the color name ")
// colorNames.splice(startIndex , removeValue , colorName);
// document.write(colorNames +"<br>");
// var startIndexToRemove = +prompt("At which index you want to delete the color? Enter the index.");
// var colorIndexes = +prompt("How many colors you want to delete?");
// colorNames.splice(startIndexToRemove , colorIndexes);
// document.write(colorNames +"<br>");


//Task # 10

// var scores = [320 , 230 ,480 , 120];
// document.write("Scores of Students : " +scores +"<br>");
// scores.sort();
// document.write( "Ordered Scores of Students : "+ scores);


//Task # 11

// var cityNames = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities list :" +"<br>");
// document.write(cityNames +"<br><br><br>");
// var copyCityNames = cityNames.slice(2,4);
// document.write( "Selected Cities list : <br>" +copyCityNames );


//Task # 12

// var arr = ["This" , "is" , "my" , "cat"];
// document.write("Array : <br>"+arr +"<br><br>");
// arr1=arr.join("  ");
// document.write("String : <br>"+arr1);


//Task # 13

// var arr = ["Keyboard" , "mouse" , "printer" , "monitor"];
// document.write("Devices <br>"+arr +"<br><br><br>");
// for (var i=0 ; i<arr.length; i++){
//     document.write("OUT <br> " +arr.shift(arr[i]) +"<br><br>"); 
//     arr.length=arr.length+1;
//     }


//Task # 14

// var arr = ["Keyboard" , "mouse" , "printer" , "monitor"];
// document.write("Devices <br>"+arr +"<br><br><br>");
// for (var i= arr.length ; i > 0; i--){
//     document.write("OUT <br> " +arr.pop(arr[i]) +"<br><br>"); 

//     }


//Task # 15

// var arr = ["Japani" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
// document.write("<select>" )
// for (var i=0 ; i<arr.length ; i++){
//     document.write("<option>" + arr[i] +"</option>" )
// }
// document.write("</select>")



//   --- Chapter # 17-20 ---


//Task # 1

// var mulArray = [["Ahmed"] , 2 ,"Ali"];
// alert(mulArray);

//Task # 2
// var arr = [[0,1,2,3] , [1,0,1,2],[2,1,0,1]];
// for (var i=0 ; i<arr.length ; i++){
//     for (j=0 ; j< 4 ;j++){
//     document.write(arr[i][j]  );
//     }
    


// }

//Task # 3
// var i;
// for (i=1 ; i<=10 ; i++){
//     document.write(i +"<br>")
// }

//Task # 4
// var number = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// document.write("Multiplication table of " +number +"<br>");
// document.write("Length " +length +"<br>")
// for (i = 1 ; i<=length ; i++){

//     document.write(number +" * " +i + " =" +number*i +"<br>");
// }

//Task # 5
// var fruits = ["jamun", "banana", "mango", "orange", "strawberry"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
    

// }
// document.write("<br>");
// for (var j = 0; j < fruits.length; j++) {
//     document.write("Element at index" + j + " is " + fruits[i] + "<br>")
// }

//Task # 6
//a
// document.write("Counting :<br><br>")
// for (var i = 1 ; i<=15 ;i++)

// {
//     document.write( i +",")
// } 
// b
// document.write("<br><br>Reverse Counting : <br><br>")
// for (var i = 10 ; i>=1 ;i--)

// {
//     document.write( i +",")
// } 

// c
// document.write("<br><br>Even: <br><br>")
// for (var i = 0 ; i<=20 ;i=i+2)

// {
//     document.write( i +",")
// } 
// d
// document.write("<br><br>Odd: <br><br>")
// for (var i = 1 ; i<=20 ;i=i+2)

// {
//     document.write( i +",")
// } 
// e
// document.write("<br><br>Series: <br><br>")
// for (var i = 2 ; i<=20 ;i=i+2)

// {
//     document.write( i+"k" +",")
// } 

//Task # 7
// var A = ["cake" , "apple pie" ,"cookie" , "fries" , "patties" ];
// var input = prompt("Welcome to our Bakery. What do you want to order ?")
// for (var i = 0 ; i< A.length ; i++){
//     if(input===A[i]){
//         document.write(input + " is available at index " +i +"in our bakery")
//     }
    
// }

//     document.write(" We are sorry . pastry is not available in our bakery.")


//Task # 8
// var A = [24, 53, 78, 91, 12];
// var maximum = A[0];
// for (i=0 ; i<A.length ; i++){
//     if (maximum < A[i]){
//         maximum = A[i];

//     }
// }
// document.write(maximum);

//Task # 9
// var A = [24, 53, 78, 91, 12];
// var minimum = A[0];
// for (i=0 ; i<A.length ; i++){
//     if (minimum > A[i]){
//         minimum = A[i];

//     }
// }
// document.write(minimum);

//Task # 10

// var number = 5;
// for (var i = 1 ; i<=20 ;i++){
//     document.write(number*i +",");
// }





























































