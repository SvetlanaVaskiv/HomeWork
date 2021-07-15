 //1task

// let body  = {
//     name:"body",
//     children: [
//       {
//         name:"div",
//         children:[
//           {
//             name:"span",
//             children:"Enter a data please",
//           },
//           {name: "br"},
//           {
//             name:"input",
//             attrs: {
//               type:"text",
//               id:"name",
//             }
//           },
//           {
//             name:"input",
//             attrs:{
//               type:"text",
//               id:"surname"
//             }
//           }, 
//         ]
//       },
//       {
//         name:"div",
//         children: [
//           {
//             name:"button",
//             attrs:{id:"ok"},
//             children:"Ok",
//           },
//           {
//             name:"button",
//             attrs:{id:"cancel"},
//             children:"Cancel",
//           },
//         ]
//       }
//     ],
//   }

//2task + 3task

// var notebook = {
//     brand: prompt("What is your laptop brand?"),
//     type:  prompt("What type is your laptop? "),
//     model:prompt("Which model of your laptop?") ,
//     ram:prompt("What ram is your laptop?"),
//     size: prompt("What is the size of your laptop?"),
//     weight: prompt("How much does your laptop weigh?"),
//     resolution: {
//         width: prompt("What's the width of your laptop?"),
//         height: prompt("What's the height of your laptop?"),
//     },
// };

// var phone = {
//     brand: confirm ("Brand of your phone - meizu?"),
//     model: confirm ("Model of your phone - m4?"),
//     ram: prompt ("What ram is your laptop?"),
//     color: alert ("I think you have black phone"),
// };

// var person = {
//     name: prompt ("What is your name?"),
//     surname: prompt ("What is your surname?"),
//     married: confirm ("Are you married?"),
// }

// notebook["owner"] = person;
// phone["owner"] = person;
// person["laptop"] = notebook;
// person["smartphone"] = phone;
// console.log(person.smartphone.owner.laptop.owner.smartphone == person.smartphone)

//4task

// let name = ("Введите Ваше имя");
// let surname = ("Введите Вашу фамилию")
// let nameFather = ("Введите Ваше отчество")

// let arr = [+prompt(name) , +prompt(surname) , +prompt(nameFather)];

//5task
// var answer = '';
// while (answer !== true){
//     answer = confirm ("Тыкай отмена сколько хочешь")}

//6task

// var arr = [];
// while (confirm ("Add new element")){
//     arr.push(prompt("Enter an element"))
// }
// alert (arr.valueOf())

//7task

// var arr = [];
// while (confirm ("Add new element")){
//     arr[arr.length]=(prompt("Enter an element"))
// }
// alert (arr.valueOf())
  
// var i;
// for (i = 1; i>0;i++){
//     if (Math.random() > 0.9) {
//         break;
//     }
// }
// alert ("Число итераций" + " " + i)

//8task
// while (null === prompt("Nu sho tam?")){}

//9task

// var arr = [];
// let n = +prompt("Введите число прогрессии")
// if (!(n>0)) {
//   alert ("Шото не то")
// }
// else {
//   for (let i = 0; i < n; i++){
//     arr [i] = 3*i +1;
//   }
//   alert (`${n} тождественно ${arr[arr.length - 1]}`)
// }

//10task

// let str = ""
// let n = prompt ("Введите число для решёточек")

// if (!(n>0)) {
//   alert ("Eto sho?")
// }

// else {
//   for (let i = 0; i < n; i++){
//     if (i%2) {
//       str += "#"
//     }
//     else { str += " "}
//   }
//   alert (str)
// }

//11task

// let str = "";
// for (let i =0; i<10;i++){
//   for (let a=0;a<10;a++){
//     str += a
//   }
//   str +="\n"
// }
// alert (str)

//12task

// let str = "";
// let y = +prompt ("Введите число символов в строке")
// if (y<0){
//     alert ("sho etpo")
// }
// let x = +prompt ("Введите число символов в строке")
// if (x<0){
//     alert ("sho eto?")
// }
// else{
// for (let i =0; i<y;i++){
//   for (let a=0;a<x;a++){
//       if (i%2) {
//           if (a%2){
//               str += "."
//           }
//           else {
//               str += "#"
//           }
//       }
//       else if (a%2){
//           str +="#"
//       }
//       else {
//           str+="."
//       }
//   }
//   str += "\n"
// }
// alert (str)
// }
//13task

// var arr = []
// let n = +prompt("Enter a number")
// if (n<0) {
//     alert ("shoto ne to")
// }
// else{
//     for (let i = 0; i<n;i++)
//     arr [i] = i**3 + "\n";
// } 
// alert (arr.valueOf())

//14task

// var arr = [];
// for (let i = 0; i <= 10; i++){
//     arr[i] = [];
//     if (0 === i) {
//         for (let j = 0; j <= 10; j++){
//             arr[i][j] = j;
//         }
//     }
//     else {
//         for (let j = 0; j <= 10; j++){
//             if (0 === j) {arr[i][j] = i}
//             else {arr[i][j] = i*j}
//         }
//     }
// }
// alert(arr.valueOf())

 //15task

 //neponyal

 //16task

 var str = "";
 var n = 11;

 if (n=11) {
     for (let i = 0; i<(Math.floor(n/2)+1); i++){
         let j = 0
         for (; j < (n - (n % 2 + i*2))/2; j++){
             str += " . ";
         };
         for (; j < (n + (n % 2 + i*2))/2; j++){
             str += "#";
         };
         for (; j < n; j++){
             str += " . ";
         };
         str += "\n"
     }
     alert(str);
 }

//17task

var userHistory = [1,1,1,1];
var predictArray = [];
let answerChoose;

for (let i0 = 0; i0 < 2;i0++){
    predictArray [i0] = [];
    for (let i1 =0;i1 < 2;i1++){
        predictArray [i0][i1] = [];
        for (let i2 = 0;i2 < 2;i2++){
            predictArray [i0][i1][i2] = [];
            for (let i3 = 0;i3 < 2;i3++){
                predictArray[i0][i1][i2][i3] = Math.floor(Math.random()*2)
            }
        }
    }
}

do {
    var answer = confirm ("Хочешь поиграть в 'какой руке монета'? ")
    let prediction = (1 === predictArray[userHistory[0]] [userHistory[1]] [userHistory[2]] [userHistory[3]]) ? "монета в правой" : "монета в левой"
    console.log (prediction)
    userHistory.push(predictArray[userHistory[0]][userHistory[1]][userHistory[2]][userHistory[3]] = answerChoose = Number(confirm("Вы выбрали?")))
    userHistory.shift() 
    alert (`Ваша ${prediction} руке`)
    var agree = confirm ("Я угадал?")
  
} while (agree !== true)
