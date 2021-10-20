// 1task

function a()
{
    alert ("Привет!");
}

// 2task

var n;
function cube(n){
  var result = n*n*n
  return result;
}
// console.log(cube(3))

// 3task

var a;
var b;
function avg2(a,b){
    var result = (a+b)/2;
    return result
}

// console.log (avg2(1,2))
// console.log(avg2(10,5))

// 4task

var a;
var b;
var c;
function sum3(a,b,c) {
a = a || 0;
b = b || 0;
c = c || 0;
var result = a + b + c;
alert (result)
}

// console.log(sum3(1,2))

// 5task

function intRandom(low, high){
    let userNum = Math.random()*((high||0)-(low||0)) + (low || 0)
    return Math.round(userNum)   
   }
//    console.log(intRandom(2,15))
//    console.log(intRandom(-1,-1))
//    console.log(intRandom(0,1))
//    console.log(intRandom(10))

// task6

function greetAll() {
    let str = " "
    for (let i = 0;i < arguments.length;i++){
      str += arguments[i]
    }
    str.slice(0 , -1)
    alert ("Hello" + "," + str)
  }
//   greetAll("SpiderMan")

// task 7

function sum(){
    var result = 0;
    for (var i = 0;i <arguments.length; i++){
    result += arguments[i]}
    alert(result)
}
// sum(1,5,6,7,10)

//task 8
function aSample(){
    a("Привет!") // вызывает alert("Привет!")
}

function cubeSample(){
    alert(cube(5)) // => 125
}

function avg2Sample(){
        alert(avg2(1,2))
    }
function sum3Sample(){
    sum3(1,2,5)
}
function intRandomSample () {
    alert(intRandom(2,15))
}
function greetAllSample (){
    greetAll("Ivan")
}

function sumSample () {
    sum(10,5,6,7,35)
}

// var sample = prompt("Введите название задания")
// switch (sample.toLowerCase()){
//     case "a": aSample()
//             break
//     case "cube": cubeSample()
//             break
//     case "avg2": avg2Sample()
//             break
//     case "sum3":sum3Sample()
//             break
//     case "intRandom":intRandomSample()
//             break
//     case "greetAll":greetAllSample()
//             break
//     case "sum": sumSample()
//             break
// }

({
    a : () =>a("Привет"),
    cube : () => alert(cube(10)),
    avg2 : () => alert(avg2(3,10)),
    sum3 : () => sum3(1,10,100),
    intRandom : () => alert(intRandom(2,15)),
    greetAll: () => greetAll("BatMan", " " , "Deadpool", " ", "SuperMan"),
    sum: () => sum(1,10,100,1000)
    })[prompt("Введите название задания")](); 