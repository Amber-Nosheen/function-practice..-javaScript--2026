
// question 01
function checkWeather(temp){
if(temp>=45){
    console.log("extreme heat");
}else if(temp>=35){
    console.log("hot");  
}else if(temp>=25){
    console.log("pleasant");
}else{
    console.log("cool")
}
}
checkWeather(30);


//question 02:
function checkSalary(salary){
    if(salary>=100000){
        console.log("High salary");
    }else if(salary>=70000){
        console.log("Good salary");
    }else if(salary>=40000){
        console.log("Average");
    }else{
        console.log("low salary")
    }
}
checkSalary(250000)


// //question 03:

function checkPassword(password) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
        else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        }
        else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber) {
        return "Strong Password";
    }
    else {
        return "Weak Password";
    }
}

console.log(checkPassword("Maryam123"));


//question 05:

function analyzeScore(score) {

    let scoreString = score.toString();
    let digits = scoreString.length;
    let sum = 0;

    for (let i = 0; i < digits; i++) {
        sum += Number(scoreString[i]);
    }
    let squareRoot = Math.sqrt(score);

    if (score === 100) {
        return "Perfect Score";
    }
    else if (score >= 80) {
        return "Excellent Score";
    }
    else if (score >= 50 && score <= 79) {
        return "Good Score";
    }
    else {
        return "Needs Improvement";
    }
}

console.log(analyzeScore(100));
console.log(analyzeScore(85));
console.log(analyzeScore(65));
console.log(analyzeScore(30));


//question 06:

function checkphone(number){
    let numberString = number.toString();
    if(numberString.length!==11){
   return "invalid number"
    }

    for( let i=0; i<numberString.length ; i++){
if(numberString[i]<"0" || numberString[i]>"9"){
    return "invalid "
}
}
if(numberString.startsWith("03")){
    return "valid number";
}else{
    return "invalid number"
}

}
console.log(checkphone("23767364"));


//question 7:

function discountcheck(shoppingamount , membership , items){
    let itemcount = 0;
    for (i=0; i<items.length; i++){
        itemcount++
    }
    let discount = 0;
if(shoppingamount>=50000){
discount = 10;
}else if(shoppingamount>=20000){
    discount = 20;
}

if(membership==="VIP"){
    discount = discount+5;
}
if(itemcount>10){
    discount = discount+3
}
let discountamount = shoppingamount*discount/100;
let totalamout = shoppingamount - discountamount;
return totalamout;
}

console.log(discountcheck(30000 , "VIP" , [1,2,3,4,5,6,7,8,9,10,11] ));


//question 08:

function analyzePrice(price){
    if(price<1000){
        return "Budget Product";
    }else if(price>1000 && price<5000){
        return "Regular Product";

    } else{
        return "Premium Product";
    }
    
}
let showresult = (price)=> {
console.log(analyzePrice(price))
}
showresult(47700);


// question 09:
function calculateticket(age){
    let ticketprice = 500;
    if(age<12){
        ticketprice = ticketprice *50/100;
    }else if(age>=60){
        ticketprice = ticketprice *30/100;
    }
    return ticketprice;
}
let age =  prompt("enter your age");
let finalprice = calculateticket(age)
console.log("final ticket price. Rs" + finalprice);


//question 10:
function Performance(sales, target, rate){
    let achivements = (sales/target)*100;
 
if(achivements>=100 && rate>=4){
    return "excellent performance";
}else if(achivements>=80 && rate>=3){
    return "Good performance";
}else if(achivements>=60 && rate>=2){
    return "average performance";
}else{
    return "poor performance"
}

} 
console.log(Performance(100 , 100 , 3))


function createSchoolAdmissionSlip(studentName, fatherName, className, admissionDate, monthlyFee) {

    studentName = studentName.trim();
    fatherName = fatherName.trim();
    className = className.trim();

    let studentNameUpper = studentName.toUpperCase();
    let fatherNameLower = fatherName.toLowerCase();

    let firstLetter = studentName.charAt(0).toUpperCase();
    let firstThree = studentName.substring(0, 3).toUpperCase();

    let rollDigits = "101";
    let studentID = firstThree.concat(rollDigits);

    let annualFee = monthlyFee * 12;

    let slip = "----- SCHOOL ADMISSION SLIP -----\n";
    slip = slip.concat("Student Name: ", studentNameUpper, "\n");
    slip = slip.concat("Father Name: ", fatherNameLower, "\n");
    slip = slip.concat("Class: ", className, "\n");
    slip = slip.concat("Admission Date: ", admissionDate, "\n");
    slip = slip.concat("Student ID: ", studentID, "\n");
    slip = slip.concat("First Letter: ", firstLetter, "\n");
    slip = slip.concat("Monthly Fee: Rs. ", monthlyFee, "\n");
    slip = slip.concat("Total Annual Fee: Rs. ", annualFee);

    return slip;
}

console.log(
    createSchoolAdmissionSlip(
        "  Maryam  ",
        "Imran",
        "10th",
        "30-09-2026",
        5000
    )
);





