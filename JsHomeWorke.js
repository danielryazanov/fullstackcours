// להגדיר 2 מספרים ולהדפיס על במסך

let aVarr = '5' ;
let bVarr = '8' ;

if ( aVarr < bVarr ) {
    document.write ('The high number is :' aVarr );   
}
else( aVarr > bVarr ) {
    document.write('The high number is' bVarr ) ;
}

//  מספרים מעורבים ,סוכמת אותם ומדפיסה על המסך את סחמן התוצאה ( חיובי שלילי )

let cVarr = '-30';
let dVarr =  '50';
let eVarr = '-20';
let sum = cVarr + bVarr + eVarr;

if (sum > 0 ){
    document.write('The result is positive' );
}
else if (sum == 0){
    document.write('The result is zero ');
}
else (sum > 0){
    document.write('The result is negative' );
}

//שלוש מספרים במערך,מסדר אותם בתוך מערך חדש ,מדפיסה למסך את המערך החדש והמסודר 
let arr1 = [1,9,3];
let arr2

if (arr1[0] > arr1[1] > arr1[2] ){
    arr1[0] == arr2[0];
    arr1[1] == arr2[1];
    arr1[2] == arr2[2];
    document.write(arr2);
}
else if (arr1[0] > arr1[2] > arr1[1]){
    arr1[0] == arr2[0];
    arr1[2] == arr2[1];
    arr1[1] == arr2[2];
    document.write(arr2);
}
else if (arr1[2] > arr1[0] > arr1[1] ){
    arr1[2] == arr2[0];
    arr1[0] == arr2[1];
    arr1[1] == arr2[2];
    document.write(arr2);
    
}
else if (arr1[2] > arr1[1] > arr1[0] ){
    arr1[2] == arr2[0];
    arr1[1] == arr2[1];
    arr1[0] == arr2[2];
    document.write(arr2);
    
}
else if (arr1[1] > arr1[0] > arr1[2]){
    arr1[1] == arr2[0];
    arr1[0] == arr2[1];
    arr1[2] == arr2[2];
    document.write(arr2);
}
else (arr1[1] > arr1[2] > arr1[0] ){
    arr1[1] == arr2[0];
    arr1[2] == arr2[1];
    arr1[0] == arr2[2];
    document.write(arr2);
}

//  להגדיר מערך עם חמישה מספרים אשר עובר על כל המספרים ומדפיס את במספר הגבוה ביותר 

let arr3 = [0,1,2,3,4];
if (arr3[0] > arr3[1] && arr3[0] > arr3[2] && arr3[0] > arr3[3] && arr3[0] > arr3[4] ){
    document.write('the max namber is 'arr3[0]);
}
else if (arr3[1] > arr3[0] && arr3[1] > arr3[2] && arr3[1] > arr3[3] && arr3[1] > arr3[4] ){
    document.write('the max namber is 'arr3[1]);

}
else if (arr3[2] > arr3[1] && arr3[2] > arr3[0] && arr3[2] > arr3[3] && arr3[2] > arr3[4] ){
    document.write('the max namber is 'arr3[2]);

}
else if (arr33] > arr3[1] && arr3[3] > arr3[2] && arr3[3] > arr3[0] && arr3[3] > arr3[4] ){
    document.write('the max namber is 'arr3[3]);

}
else  (arr3[4] > arr3[1] && arr3[4] > arr3[2] && arr3[4] > arr3[3] && arr3[0] < arr3[4] ){
    document.write('the max namber is 'arr3[4]);

}

//להגדיר חמישה מספרים אפשר כל אחד מהם עובר במבלך בתוכנית ובסופה מדפיסה האם המספרים זוגיים או אי זוגיים 

let arr4 = [1,2,3,4,5];

if ((arr4[0]% 2) = 0 ){
    document.write('the namber' arr4[0] 'is even number'  );
}
else ((arr4[0]% 2) != 0 ){
    document.write('the namber' arr4[0] 'is odd number'  );
}

if ((arr4[1]% 2) = 0 ){
    document.write('the namber' arr4[1] 'is even number'  );
}
else ((arr4[1]% 2) != 0 ){
    document.write('the namber' arr4[1] 'is odd number'  );
}

if ((arr4[2]% 2) = 0 ){
    document.write('the namber' arr4[2] 'is even number'  );
}
else ((arr4[2]% 2) != 0 ){
    document.write('the namber' arr4[2] 'is odd number'  );
}
if ((arr4[3]% 2) = 0 ){
    document.write('the namber' arr4[3] 'is even number'  );
}
else ((arr4[3]% 2) != 0 ){
    document.write('the namber' arr4[3] 'is odd number'  );
}
if ((arr4[4]% 2) = 0 ){
    document.write('the namber' arr4[4] 'is even number'  );
}
else ((arr4[4]% 2) != 0 ){
    document.write('the namber' arr4[4] 'is odd number'  );
}
if ((arr4[5]% 2) = 0 ){
    document.write('the namber' arr4[5] 'is even number'  );
}
else ((arr4[5]% 2) != 0 ){
    document.write('the namber' arr4[5] 'is odd number'  );
}