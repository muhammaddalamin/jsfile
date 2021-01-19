// var arr = [3,53,53,5,44,3,5,7,52,34]

// var find =5;

// var isFound =false
// for (i =0;i<arr.length;i++){
//     if(arr[i]=== find){
//         console.log('Data found at index : ' +i)
//         isFound = true
//     }
// }
// if(!isFound){
//     console.log('Data Not Found')
// }

// var arr = [
//     [[],[]],
//     [[],[]],
//     [[],[]]
// ]
// console.log(arr2[0][3])

// for (var i =0 ;i<arr2.length;i++){
//     for(j = 0; j <arr2[i].length;j++){
//         console.log('Element' + i + ':'+arr2[i][j])
//     }
// }
// var arr2 = [
//     [76,75,90,88],                   // index = 0
//     [75,72,97,46],
//     [56,86,86,46]
// ]

// for(var i= 0; i<arr2.length;i++){
//     for(j =0; j<arr2[i].length;j++){
//         console.log(arr2[1][3])
//     }
// }



// for(var i=0;i<arrSort.length / 2; i++){
//     var temp =arrSort[i]
//     arrSort[i] = arrSort[arrSort.length - 1 - i]
//     arrSort[arrSort.length -1 - i] =temp

// }
// console.log(arrSort)


// var arr = [3,53,53,5,44,3,5,7,52,34]

// var arrSort = arr.sort(function(a,b){
//     return a - b
// })
// console.log(arrSort)

// for (var i = 0;i< arrSort.length / 2 ; i++){
//     var temp = arrSort[i]
//     arrSort[i] = arrSort[arrSort.length -1 -i]
//     arrSort[arrSort.length -1 -i ] = temp
// }
// console.log(arrSort)

// var arr = [3,53,53,5,44,3,5,7,52,34]
// console.log(arr)

// var arr2 = Array.from(arr)
// console.log(arr2)

// var obj = Object()

// var obj2 =  new Object()

// obj2.a = 'amar sonar '
// console.log(obj2)

// var obj ={
//     a:10,
//     b:20
// }
// var obj2 ={
//     a:10,
//     b:20
// }

// console.log(obj.a === obj2.a && obj.b === obj2.b)
// console.log(obj)
// console.log(JSON.stringify(obj))
// console.log(JSON.stringify(obj) === JSON.stringify(obj2))



// for(var i in obj2){
//     console.log(i)
//     console.log(obj2.b)
// }
// console.log('a' in obj2)
// console.log('w' in obj2)

// var search = 'x' in obj2;
// console.log(search)

// var obj2 ={
//     a:10,
//     b:20
// }
// console.log(Object.keys(obj2))
// console.log(Object.values(obj2))
// console.log(Object.entries(obj2))

// var obj = Object.assign({} ,obj2)

// obj.a = 200;
// console.log(obj2)
// console.log(obj)

// var arr1 = [1,32,42,4]

// function add (arr){
//     var sum = 0;
//     for(var i= 0;i<arr.length;i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// add(arr1)

// function test(name,email){
//     return {
//         name:name,
//         email:email
//     }
//     console.log('hello')
// }
// var a = test('Muhammd','muhammad@hotmail.com')
// console.log(a)

// var addition = function (a,b){

//     return a+b
// }

// console.log(addition(3,4))

// setTimeout (function (){
//     console.log('I will call after 1 sec')
// },1000);

// var another =addition
// console.log(another(2,3))

// function something (green , name){
//     function sayHi(){
//         if(name){
//             return name.split(' ')[0]
//         }else{
//             return ''
//         }
        
//     }
//     var message = green + ' ' + sayHi()
//     console.log(message)
// }
    
// something('Goood morning')


// var arr = [1,32,42,4]

// function bigLergerNum (){
//     var lergerNumber = arr[0]
//     for(i = 0;i < arr.length;i++){
//         var elements = arr[i]
//         if(elements > lergerNumber){
//             lergerNumber = elements
//         }
//     }
//     return lergerNumber
// }

// var output = bigLergerNum(arr)
// console.log(output)

// var date = new Date()
// console.log(date)

// var year =date.getDay();
// console.log(year);

// var myVar = document.querySelector('#myImg');
// function myFunction() {
//     myVar.src = 'city.jpg';
// }
// function myFunction2() {
//     myVar.src = 'ballon.jpg';
// }

// var a ='abc'

// function test (n){

//     function a(){
//         return n%3 === 0
//     }
    
//     function b(){
//         return n%5 === 0
//     }
    
//     if(a() && b()){
//         console.log(n + ' is divisible by both 3 % 5 ')
//     }else{
//         console.log('not a valid number')
//     }
// }
// test(15)


// function sayName (name){
//     return 'Hello ' + name

// }

// var hello = sayName;



// // var fun = sayName('Muhammd');

// // console.log(hello);
// // console.log(fun);

// // console.log(hello('Muhammd'))
// var another = hello;                        // variable store  // passed
// console.log(another('Al amin'));

// var arr = [ 1,2,3]
// arr.push(another)                           //Array store     // passed
// console.log(arr)


// var person ={                               //Object store    // passed
//     name:'Muhammd',
//     sayName:sayName,
//     print:function(){
//         console.log('Hi')
//     }
    
// }
// person.print()
// console.log(person)

// var sum = 10 + (function(){return 20})(); //we can create function as needed

// console.log(sum)


// function wow(name,fun){
//     return fun(name)
// }
// var result = wow('Muhammd',sayName); // we can pass function as an arguments
// console.log(result)


// function base(b){
//     return function(n){
//         var result = 1;

//         for(i=0;i<b;i++){
//             result *= n
//         }
//         return result
//     }
    
// }

// var result  = base(3)(5)
// console.log(result)

// function outer(){
//     function inner(){
//         console.log('I am inner function')
//     }
//     inner()
//         console.log('I am outer function')
// }
// outer()

// function add (a,b){

//     function x(){
//         console.log('Amar sonar bangla')
//         return a+b
//     }
//     var result = x()
//     console.log(result)
//     function y(){
//         return a-b
//     }
    
// }
// add()

// function example (){
//     return{
//         name:'Muhammad',
//         skill:['java','javascript'],
//         print:function(){
//             console.log( this.name, this.skill);
//         }
//     }
// }
// var obj = example();
// console.log(obj)
// obj.print();

// var arr = [3,4,2,5,6,3];

// arr.forEach(function(a){
//     console.log(a)
// });

// function caller(){
//     return function(name){
//         return 'caller calling you ' + name
//     }
// }
// var x = caller();
// console.log('Muhammad')

// function hello(name){
//     print(name);
// }

// function print(args){
//     console.log(args)
// }


// hello('twincall cats');

// function hello(name,print){
//     print(name)

// }

// // hello('Muhammad',print)


// // function print(args){
// //     console.log(args)
// // }

// hello('muhammad',function(name){
//     console.log('hello '+name);
// });

// var me = {
//     name:'Muhammad',
//     age:15,
//     email:'demo@hotmail.com'
// }

// function printMySelf(person,callback){
//     console.log('Person: ' + person.name +'('+person.age+')');
//     if(person.age >= 18){
//         callback(person.email);
//     }else{
//         console.log('You are little');
//     }
// }

// printMySelf(me,function(email){
//     console.log('Email sent to ' +email)
// });

// function print(data,callback,callback2){
//     console.log('Orginal Data:' + data);
//     callback(data)
//     callback2(data)
// }

// print('Twinkle Cats is awesome ',function(data){
//     var data = data.toUpperCase();
//     console.log('Uppercase: ' + data);
// },function(data){
//     var data = data.toLowerCase();
//     console.log('Lowercase: ' + data)
// });

// const taskOne =()=>{
//     console.log('Task1')
// }




// const taskTwo =()=>{
//     setTimeout(()=>{
//         console.log('Task2. Data Loading');
//     },1000);
// }

// const taskThree =()=>{
//     console.log('Task3')
// }


// taskOne()
// taskTwo()
// taskThree()

// function squre(x){
//     console.log('squre of x:' + x*x)
// }



// const y = squre



// function higerOrderFunction (num,callback){
//     callback(num)
// }

// higerOrderFunction(6,squre)

// const taskOne =(callback)=>{
//     console.log('Task1')
//     callback();
// }


// const taskTwo =(callback)=>{
//     setTimeout(()=>{
//         console.log('Task2. Data Loading');
//         callback();
//     },2000);
// }

// const taskThree =(callback)=>{
//     console.log('Task3')
//     callback();
// }

// const taskFour =()=>{
//     console.log('Task4')
// }

// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree(function f3(){
//             taskFour()
//         });
//     });
// });

// function host(){
//     console.log('I am host functiono');
//     return function child(){
//         console.log('I am child')
        
//     }
    
    
// }

// var a = host();
// a();


// function greeting(msg){

//     return function(name){
//         console.log(msg + ' ' +name)
//     }
// }

// var good = greeting('Goood morning');
// var hello = greeting('hello')

// good('Twinklw cats')

// var name = 'twinkle cats'

// function sayName(){
//     console.log('hello ' + name)
// }
// console.dir(sayName)

// sayName()

// function greeting (msg){
//     return function(name){
//         console.log(msg + ' ' + name)
//     }
// }

// var hell0 = greeting('hello');
// hell0('Muhammad')

// var arr = [54,53,53,21,86,61,35,64,56,12,43]

// arr.sort(function(a,b){
//     return b-a
// })
// console.log(arr)

// var people = [
//     {name:'Muhammad',age:20},
//     {name:'Alamin',age:23},
//     {name:'Summon',age:19}
// ]
// // people.sort(function(a,b){
// //     return a.age - a.age
// // });

// people.sort(function(a,b){
//     if(a.name > b.name){
//         return 1;
//     }else if(a.name<b.name){
//         return -1;
//     }else{
//         return 0
//     }
// });

// console.log(people)

// var arr = [54,53,53,21,86,61,35,64,56,12,43]

// // arr.forEach(function(element,index ,arr){
// //     console.log('Elements is '+ element + ' index ' +index + 'Array ' + arr)
// // })

// function loop(arr ,callback){
//     for(var i = 0; i<arr.length; i++){
//         callback(arr[i],i)
//     };
// };

// loop(arr,function(element, i){
//     console.log('Elements is ' + element + 'index' + i)
// });


// var arr = [54,53,53,21,86,61,35,64,56,12,43]

// var newArr = []

// var newArray = arr.filter(function(value){
//     return value % 2 == 0;
// });
// document.write(newArray)
// function myFilter (arr,callback){
//     var newArr = [];

//     for(var i =0 ;i<arr.length;i++){
//         if(callback(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// var myArr = myFilter (arr,function(element){
//     return element % 2 == 1
// });

// console.log('My Array filtered data = ' + myArr)


// var arr = [54,53,53,21,86,61,35,64,56,12,43]

// var mapArr = []
// for (var i = 0; i <arr.length;i++){
//     mapArr.push(arr[i]+2);
    
// }

// console.log(mapArr)

// var newArr = arr.map(function(value){
//     return value + 2;
// });

// console.log('New Array ' + newArr)

// var arr = [54,53,53,21,86,61,35,64,56,12,43]

// function myMap(arr,callback){
//     var newArr = []

//     for(var i =0 ;i<arr.length;i++){

//         var data = callback(arr[i])
//         // newArr.push(callback(arr[i]))
//         newArr.push(data)
//     }
//     return newArr
// }

// var myArr = myMap(arr,function(value){
//     return value *2
// });

// console.log(myArr)

// var arr = [54,53,53,21,86,61,35,64,56,12,43] 

// var result = arr.reduce(function(a,b){
//     return a/b
// });

// console.log(result)

// function add (a,b){
//     return a+b
// }

// var sum = add
// console.log(sum(2,2))

// var arr = []
// arr.push(add)
// console.log(arr[0](5,3))
// console.log(arr)

// var obj ={
//     sum :add
// }
// console.log(obj)
// console.log(obj.sum(3,4))


// setTimeout(function(){
//     console.log('I have created....')
// });

// function add (a,b){
//     return a+b
// }


// function manipulate(a,b,func){
//     var c = a+b
//     var d = a-b

//     function multiply(){
//         var m = func(a,b)
//         return c*d*m
//     }
//     return multiply
// }

// var multiply = manipulate(3,4,add)

// console.log(multiply())

// function sample (a,b,cb){
//     var c = a+b
//     var d = a-b

//     var result = cb(c,d);
//     return result
// }

// // function sum (a,b){
// //     return  a+b 
// // }

// // var result = sample(5,8,sum)
// // console.log(result)

// var result2 = sample(5,8,function(c,d){
//     return c-d
// });
// console.log(result2)

// var result3 = sample(5,8,function(c,d){
//     return c*d
// });
// console.log(result3)

// var arr = [1,2,3,4,5,6]


// var sum = 0
// arr.forEach(function(value,index,array){
//     // console.log(value,index,arr)

//     sum += value
// });
// console.log(sum)

// function myforEach(arr,callback){
//     for (var i = 0 ;i<arr.length;i++){
//         callback(arr[i],i,arr)
//     }
// }


// var sum = 0;
// myforEach(arr,function(value,index,arr){
//     console.log(value,index,arr)
//     sum += value
// })
// console.log(sum)

// myforEach(arr,function(value,index,arr){
//     arr[index]  = value +5
// })
// console.log(arr)

// function inchToFeet(inch){
//     var feet = inch/12;
//     return feet;
// }

// var senior
// var result = inchToFeet(156)
// var result2 = inchToFeet(200)


// console.log(result +'feet');
// console.log(result2 +'feet');

// var name = 'Javed Akbar';

// if(name.length>4){
//     console.log('Juventus')
// }
// console.log(name)

// function isLeapYear(year){
//     const remainder = year % 4;
//     if(remainder == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const check2000 = isLeapYear(366);
// console.log(check2000)


// var factroial = 1;
// for (var i=1;i<= 50;i++){
//     factroial = factroial *i
//     console.log(i,factroial);
// }

// function factorial(num){
    
// var factroial = 1;
// for (var i=1;i<= num;i++){
//     factroial = factroial *i
//     console.log(i,factroial);
//     }
//     return factroial
// }
// var result = factorial(10);
// console.log(result)

// var i =1;

// var factroial = 1;
// while (i<=10) {
//     factroial = factroial*i
//     // console.log(i,factroial);
//     i++;
// }

// console.log(factroial)


// function factorial(n){
    
//     var factro = 1;
//     var i = 1;
//     while (i<=n) {
//         factro =factro * i
//         i++;
//     }
//     return factro;
// }
// var result = factorial(20)
// console.log(result);

// for(var i=10;i>=1;i--){

// }

// function factrial(n){
//     if(n==0){
//         return 1;
//     }
//     else{
//         return n*factrial(n-1)
//     }
// }

// var result = factrial(10);
// console.log(result)


// fibo[2] = fibo[2-1] + [2-2];
// fibo[2] = fibo[3-1] + [3-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + [i-2];
// var fibo = [0,1]
// function fibonacci(n){
//     for(var i = 2; i<=n;i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
        
//     }
//     return fibo;
// }

// var result = fibonacci(12)


// console.log(result)

// function fibonacci(n){
//     if(n==0){
//         return 0;
//     }
//     else if(n==1){
//         return 1
//     }
//     else{
//         return fibonacci (n-1) + fibonacci (n-2);
//     }
// }
// var result = fibonacci(10);
// console.log(result)

// var num =18;
// for(var i = 2;i<num-1;i++){

// }

// function myRecursive(n){
//     if(n ==0){
//         return ;
//     }
//     myRecursive(n-1);
    
// }
// myRecursive(10)

// var arr = [1,2,3];

// var sqrArr =arr.map(function(value,index,arr){
    
//     return value * value
    
// });
// console.log(arr);
// console.log(sqrArr)
// function myMap(arr,callback){

//     newArr = [];
//     for(var i=0;i<arr.length;i++){
//         var temp = callback(arr[i]);
//         newArr.push(temp);
//     }
//     return newArr;
// }

// var result = myMap(arr,function(value){
//     return value*value*value
// });
// console.log(result)

// var arr = [1,2,3,4,5,6,7,8];

// var filterArr = arr.filter(function(value){
//     return Math.max(value)
// });
// console.log(filterArr)

// function filterFunc(arr,callback){
//     newArr = [];
//     for(var i =0 ;i<arr.length;i++){
//         if(callback(arr[i]));
//         newArr.push(arr[i]);
//     }
//     return newArr;
// };
// var result = filterFunc(arr,function(value){
//     return value > 4
// });
// console.log(result)

// var arr = [1,2,3,4,5,6,7,8];

// var sum = arr.reduce(function(prev,curr){
//     return prev + curr
// },200);

// console.log(sum)

// var mx = arr.reduce(function(prev,curr){
//     return Math.max(prev,curr);
// })
// document.write(mx)

// function myReduce(arr,callback,acc){

//     for(var i=0;i<arr.length;i++){
//         acc = callback(acc,arr[i])
//     }
//     return acc;
// }

// var sum = myReduce(arr,function(prev,curr){
//     return prev + curr
// },0);
// console.log(sum);

// // var max = myReduce(arr, function(prev,curr){
// //     return Math.max(prev,curr)
// // },0)
// // console.log(max)

// // var arr = [1,2,3,4,5,6,7,8];
// // var result = arr.find(function(value){
// //     return value === 5
// // });
// // console.log(result)

// // var result =arr.findIndex(function(value){
// //     return value === 5;
// // });
// // console.log(result)

// // function myFind(arr,callback){
    
// //     for(var i =0 ;i<arr.length;i++){
// //         if(callback(arr[i])){
// //             return i
// //         };
        
// //     }
// // }

// // var result = myFind(arr,function(value){
// //     return value === 5;
// // })
// // console.log(result)

// var arr = [4,24,22,247,3,34,4,43,67,5,147,73,643,35]

// arr.sort(function(a,b){
//     if(a>b){
//         return -1;
//     }else if(a<b){
//         return 1
//     }else{
//         return 0
//     }
// });
// console.log(arr);


// var rest = arr.every(function(value){
//     return value % 2 === 0
// });
// console.log(rest)

// var rest3 = arr.some(function(value){
//     return value% 2 ===1;

// })

// console.log(rest3)

// function greet(msg){

//     function sayHi(name){
//         return msg + ', ' +name +'!'
//     }
//     return sayHi
// }
// var gm = greet('Good Morning');

// console.log(gm)

// var msg = gm('Muhammad');

// console.log(msg)

// function base(b){
//     return function (n){
//         var result = 1;
//         for (var i =1;i<=b;i++){
//             result *=n
//         }
//         return result
//     }
// }
// var base10 =base(10)
// console.log(base10(2))

// function sayHi(n){
//     if(n===0){
//         return 
//     }
//     console.log('Hi ,i am calling')
//     sayHi(n-1)
// }

// sayHi(10)

// function sum (n){
//     if(n===1){
//         return 1;
//     }
//     return n + sum(n-1)
// }
// console.log(sum(5))

// function facto(n){
//     if(n===1){
//         return 1
//     }
//     return n *facto(n-1)
// }
// console.log(facto(4))

// function add(a,b,c){
//     return a+b+c
// }

// // add(41,52,63)

// function currying(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// var result = currying(5)(6)(7)
// console.log(result)

// function print(inp){
//     console.log(inp)
// }

// function multipleByFive(n){
//     return n*5;
// }

// function add(a,b){
//     return a+b

// }


// print(multipleByFive(add(3,5)))

// function printNumber(n){
//     if(n == 0){
//         return
//     }else{

//     }
// }


// var x =55;

// function test(){

//     y=5
// }
// test(x)

// function  test(){
//     var msg = 'I am Learning Laxical scope and closure';

//     return function(){
//         console.log(msg)
//     }
// }

// var sayMsg = test()
// sayMsg()

// for (var i =1 ; i<=5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000*i)
// }

// var a =5;
// var b=7;

// // console.log('Before swap: a =',a,'b =',b);

// var temp = a;
// a = b;
// b =temp;

// // console.log('after swap: a =',a,'b =',b);

// var x = 5;
// var y = 7;

// x =x+y;
// y =x-y;
// x = x -y
// console.log('after swap: x =',x,'y =',y);


// var p =5;
// var q =7;

// [p,q] = [q,p];

// console.log('after swap: p =',p,'q =',q);

// var num = 2.45454464453;

// var result = Math.floor(num);
// var result2 = Math.ceil(num);
// var result3 = Math.round(num);

// console.log(result)
// console.log(result2)
// console.log(result3)

// var randomNum = Math.random()*37;

// var output = Math.round(randomNum);
// console.log(output)

// var business = 450 ;
// var minister =650;
// var schib = 335;

// var result = Math.max(business,minister,schib)
// console.log(result)

// if(business > minister){
//     if(business >schib){
//         console.log('business is bigger');
//     }else{
//         console.log('schib is bigger');
//     }
// }else{
//     if(minister > schib){
//         console.log('minister is bigger');
//     }else{
//         console.log('schib is bigger');
//     }
// }

// var marks = [ 45,64,24,65,84,32,96,45,98,67,87,80];

// var max = marks[0];

// for (var i =0 ;i<marks.length;i++){

//     var element = marks[i]
//     if(element > max){
//         max = element
//     }
// }
// console.log('Highest value is ', max)

// var marks = [ 45,64,24,65,84,32,96,45,32,67,87,24];



// function getArraySum(marks){
//     var sum = 0;
//     for(var i=0;i<marks.length;i++){

//         var element = marks[i]
//         sum += element

        
//     }
//     return sum
// }
// var result = getArraySum(marks)
// console.log('total of the number :',result);

// var number = [ 45,64,24,65,84,32,96,45,32,67,87,24];
// console.log(number)

// var uniqueNum = [];
// for(var i= 0;i<number.length;i++){
//         var element = number[i]

//         var index = uniqueNum.indexOf(element);

//         if(index == -1){
//             uniqueNum.push(element)
//         }
// }
// console.log(uniqueNum)

// function add(a,b){
//     return a+b
// }
// console.log(add('adam' + 'eve'))

// var seepk = 'I am a      good person, I don\'n\ snore at night'

// var count = 0;
// for (var i =0;i<seepk.length;i++){
//     var char = seepk[i];
//     if(char == ' ' && seepk[i-1] != ' '){
//         count++;
//     }
// };
// count++;
// console.log(count)



// var count = 0;
// for (var i =0;i<sentence.length;i++){
//     var letter = sentence[i];

//     if(letter == ' ' && sentence[i-1] != ' '){
//         count++;
//     }
// }
// count++;
// console.log(count)
// function reverseString(sentence){
//     var reverse = '';
//     for(var i =0;i<sentence.length;i++){
//         var char = sentence[i];
//         reverse = char +  reverse ;
//     };
//     return reverse;
// };

// var forAlien = reverseString(sentence);
// console.log(forAlien)

var sentence = 'I am hardworking ,i amserious. i am sure i will do it';

var reverse = sentence.split(' ').reverse().join(' ');

console.log(reverse)