//1,2,4,5,6,7,8task
var a = {
    name:"Vasiliy",
    surname:"Pupkin",
}
var b = {
    name:"Petr",
    surname:"Sidorov",  
}
var c = {
    name:"Maria",
    surname:"Andreeva",
}

a.sex = "male";
c.sex = "female";
a.age = 15;

var persons= [];

persons[0] = a
persons[1] = b
persons[2] = c
persons[3] = {
    name:"Jacob",
    surname:"Brown",
    age:45,
}

// for (let i = 0; i<persons.length;i++){
//     console.log(persons[i])
// }

// for (let i = 0; i<persons.length;i++){
//     console.log(persons[i]["name"])
//     console.log(persons[i]["surname"])
// }
//3task

//не понял , что такое необязательные поля

// alert(Object.values(a))
// alert(Object.values(b))
// alert(Object.values(c))

// for (let i = 0; i < persons.length; i++) {
//     persons[i]["fullName"] = `${persons[i]["surname"]} ${persons[i]["name"]}`
//     if (undefined !== persons[i]["fathername"]) {
//         persons[i]["fullName"] += " "+persons[i]["fathername"]
//     }
// }

// //9task
// var personsJson = JSON.stringify(persons)
// console.log(personsJson)
// console.log(typeof personsJson)

// //10task
// var alesha = JSON.parse('{"name": "Alex", "surname": "Alekseev", "fathername": "Alekseevich", "age": 33, "sex": male}')
// persons.push(alesha)
// console.log(persons)

//11task

// let str = "<table border='1'>"

// for (let i=0; i<1; i++){   
   
//     for(let key in persons[i]){
//             str +=`<th bgcolor = '#FFA07A'>${key}</th>`.toUpperCase();
//         }  
//         for (let j = 0; j < 3; j++) {
//             if (persons[j].sex === undefined) {
//                 str+=persons[j].sex = 'ne sex'
//             }
//             if (persons[j].age === undefined){
//                 str +=persons[j].age = "dostatochno"
//             }
//             str += `<tr bgcolor='#B0E0E6'><td>${persons[j].name}</td><td>${persons[j].surname}</td><td>${persons[j].sex}</td><td>${(persons[j].age)}</td></tr>`;
//         }
// }
// str += "</table>"

// console.log(str)
// document.write(str)

//12task
 
// for (let i = 0; i < 3; i++) {
//     for(let key in persons[i]){
//         console.log(key+": "+persons[i][key])
//     }
// }

//siniy poyas

// var someTree = {
//     tagName: "table", 
//     subTags: [ 
//         {
//                     tagName: "tr",
//                     subTags: [
//                         {
//                             tagName: "td",
//                             text: "shoto 0",
//                         },
//                         {
//                             tagName: "td",
//                             text: "shoto 1",
//                         }
//                     ]
//         }
//     ],
//     attrs: 
//     {
//         border: 1,
//     },
// }

// let str = "<table border=1>"
// for(let i = 0; i<1;i++){
//     str += 
//     `<tr>
//         <td>${"shoto 0"}</td>
//         <td>${"shoto 1"}</td>
//     </tr>`
// }
//  str += "</table>"
//  document.write(str)

//destruct array
// let arr = [1,2,3,4,5, "one", "two", "three"];
// let [even1, even2] = [arr[1], arr[3]];
// alert(even1);
// alert(even2);

// let [odd1, odd2, odd3] = [arr[0], arr[2], arr[4]];
// alert(odd1);
// alert(odd2);
// alert(odd3);

// let [s1, s2, s3] = [arr[5], arr[6], arr[7]];
// alert(s1 + s2 + s3);

//destruct string
// let arr = [1, "one"];
// let [number] = [arr[0]];
// alert(number);
// let [s1, s2, s3] = [arr[1].charAt(0), arr[1].charAt(1), arr[1].charAt(2)]//??????
// alert(s1)
// alert(s2)
// alert(s3)

//destruct2
// let obj = {name: 'Leonardo',
//            surname: 'Jean-Claude Van Damme',
//            children: [{name: 'Bianca Van Varenberg'}, {name: 'Nicolas Van Varenberg'}]}

// let {name1, name2} = {name1: obj.children[0].name, name2: obj.children[1].name}; 
// alert(name1);
// alert(name2);

//destruct 3
// let arr = [1,2,3,4, 5,6,7,10];
// let {first, second, length} = {first: arr[0], second: arr[1],length: arr.length};
// alert(first);
// alert(second);
// alert(length);

//black poyas
// var userHistory = "1111";
// var predictObject = {};

// for (let i = 0; i < 16; i++) {
//     predictObject[i.toString(2)] = Math.floor(Math.random()*2);
// }
// do {
//     var answer = (confirm("Хочешь поиграть в 'какой руке монета'? "))
//     let prediction = ((1 === predictObject[userHistory]) ? "монета в правой" : "монета в левой")
//     console.log(prediction)
//     userHistory += (predictObject[userHistory] = Number(confirm("Вы выбрали?")))
//     userHistory = userHistory.substring(1)
 
//     alert (`Ваша ${prediction} руке`)
//     var agree = confirm ("Я угадал")
// } while (agree !== true )
