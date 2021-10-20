//1task
        // let sizeRu
        // let sizeUSA = prompt("Введите американский размер одежды.(6,8,10,12,14,16,18,20)", "")
        // switch (sizeUSA)
        // {
        //     case "6": sizeRu = 40,
        //         alert("Российский размер одежды: " + sizeRu);
        //         break;
        //     case "8": sizeRu = 42,
        //         alert("Российский размер одежды: " + sizeRu);
        //         break;
        //     case "10": sizeRu = 44,
        //         alert("Российский размер одежды: " + sizeRu);
        //         break;
        //     case "12": sizeRu = 46,
        //         alert("Российский размер одежды: " + sizeRu);
        //         break;
        //     case "14": sizeRu = 48,
        //         alert("Российский размер одежды: " + sizeRu);
        //         break;
        //     case "16": sizeRu = 50,
        //         alert("Российский размер одежды: " + sizeRu);
        //         break;
        //     case "18": sizeRu = 52,
        //         alert("Российский размер одежды: " + sizeRu);
        //         break;
        //     case "20": sizeRu = 54,
        //         alert("Российский размер одежды: " + sizeRu);
        //         break;
        //     default: alert("Мне неизвестен этот размер.");
        // }

//2task

// let color = prompt ("Введите цвет");


//   if (color == "red") {
//    document.write("<div style='background-color: red;'>красный</div>");
//   }
//   else if (color == "black") {
//     document.write("<div style='background-color: black; color: white;'>черный</div>");}
//     else if (color == "blue") {
//       document.write("<div style='background-color: blue; color: white;'>blue</div>");
//     }
//       else if (color == "green"){
//         document.write("<div style='background-color: green; color: white;'>green</div>")
//       }
//       else {
//         document.write("<div style='background-color: grey; color: white;'>what?</div>")
//       }

//3task

// let age = +prompt("Сколько вам лет?","");
//         (age > -1) && !alert("Ваш год рождения: "+ (2021 - age)) ||
//         alert("Ошибка");

//4task

// confirm("шопинг?") && !alert ("Let's go") || alert ("ты бяка")

//5task

// do {
//     if (confirm("шопинг?")){
//         alert ("Let's go")
//     }
//     else {
//         alert ("ты бяка")
//     }
// }while (confirm !== null)

//6task 

// do {
//     let surname = prompt ("Введите свою фамилию")
//     let name = prompt ("Введите своё имя")
//     let fatherName = prompt ("Введите своё отчество")

//     let fio = surname + " " + name + " " + fatherName;

//     alert ("Ваше ФИО:" + fio)

// }while (fio !== null)

//7task

// do {
//     let surname = prompt ("Введите свою фамилию") || "Furīkusu"
//     let name = prompt ("Введите своё имя") || "Gon"
//     let fatherName = prompt ("Введите своё отчество") || "Ging"

//     let fio = surname + " " + name + " " + fatherName;

//     alert ("Ваше ФИО:" + fio)

// }while (fio !== null)

//8task 

// let name;
// let surname;
// let fatherName;

// do {
//     if (surname = prompt ("Введите свою фамилию" ));
//     else {surname = "Furikusu"}
//     if (name = prompt ("Введите своё имя"));
//     else {name = "Gon"}
//     if (fatherName = prompt ("Введите своё отчество"));
//     else {fatherName = "Ging"}
//     let fio = surname + " " + name + " " + fatherName;
//     alert ("Ваше ФИО:" + fio)
// }while (fio!==null)

//9task

// let credentials = { //верные логин и пароль
//     login: 'admin',
//     password: 'qwerty',
// };
// let user = {}; //объект для конкретного юзера, например, для передачи в БД
// do {
// if ((user.login = prompt('Введите имя пользователя:', '')) == credentials.login){
//     if ((user.password = prompt('Введите пароль:', '')) == credentials.password){
//         alert("Вы успешно вошли в систему");
//     }
//     else {
//         alert("Пароль неверен");
//     }
// }
// else {
//     alert("Логин неверен");
// }
// } while (credentials !== null)

//10task

//         let rateEur = 32.57;
//         let rateUsd = 27.27;
//         let rateUser;
//         let hrivnaUser;
//         let userCurrency = prompt("Выберите валюту, в которую нужно переводить: usd или eur", "")
//         switch (userCurrency)
//         {
//             case "usd": rateUser = rateUsd;
//                 break;
//             case "eur": rateUser = rateEur;
//                 break;
//             default: alert("Некорректная валюта");
//         }
//         do {
//         if (rateUser) {
//             hrivnaUser = +prompt("Сколько гривен будете менять?");
//             if (hrivnaUser>-1) {
//                 alert(`За ${hrivnaUser} грн вы получите ${Math.floor(hrivnaUser/rateUser*100)/100} ${userCurrency}`);
//                 rateUser = 0;
//             }
//             else {
//                 alert("Что-то пошло не так...")
//             }
//         }
//     } while (rateUser !== null)

//11 task
        
    //     let rateEur = 32.57;
    //     let rateUsd = 27.27;
    //     let rateUser;
    //     let hrivnaUser;
    //     let userCurrency = prompt("Выберите валюту, в которую нужно переводить: usd или eur", "").toLowerCase()
    //     switch (userCurrency)
    //     {
    //         case "usd": rateUser = rateUsd;
    //             break;
    //         case "eur": rateUser = rateEur;
    //             break;
    //         default: alert("Некорректная валюта");
    //     }
    //     do {
    //     if (rateUser) {
    //         hrivnaUser = +prompt("Сколько гривен будете менять?");
    //         if (hrivnaUser>-1) {
    //             alert(`За ${hrivnaUser} грн вы получите ${Math.floor(hrivnaUser/rateUser*100)/100} ${userCurrency}`);
    //             rateUser = 0;
    //         }
    //         else {
    //             alert("Shit happens...")
    //         }
    //     }
    // } while (rateUser !== null)

    //12task

    // let rateEur;
    // let rateUsd;
    // let rateUser;
    // let moneyUser;

    // let saleRate = confirm ("Вы будете продавать валюту?") ?
    // "1" && (rateEur = 32.65) && (rateUsd = 27.36) : "0" && (rateEur = 32.28) && (rateUsd = 27.17)
    // let userCurrency = prompt("Выберите валюту: usd или eur", "").toLowerCase()
    //     switch (userCurrency)
    //     {
    //         case "usd": rateUser = rateUsd;
    //             break;
    //         case "eur": rateUser = rateEur;
    //             break;
    //         default: alert("Некорректная валюта");
    //     }
    //     if (rateUser) {
    //         if (+saleRate) {
    //             moneyUser = +prompt(`Сколько ${userCurrency} будете менять?`);
    //             if (moneyUser>-1) {
    //                 alert(`За ${moneyUser} ${userCurrency} вы получите ${moneyUser*rateUser} грн`);
    //             }
    //             else {
    //                 alert("Некорректная сумма")
    //             }
    //         }
    //         else {
    //             moneyUser = +prompt("Сколько гривен будете менять?");
    //             if (moneyUser>-1) {
    //                 alert(`За ${moneyUser} грн вы получите ${Math.floor(moneyUser/rateUser*100)/100} ${userCurrency}`);
    //             }
    //             else {
    //                 alert("Некорректная сумма")
    //             }
    //         }
    //         rateUser = 0;
    //     }

    //13task

    // let rateEur;
    // let rateUsd;
    // let rateUser;
    // let moneyUser;
    // let saleCurrency;

    // if (saleCurrency = confirm("Вы будете продавать валюту?")) {
    //     rateEur = 29.61;
    //     rateUsd = 27.68;
    // }
    // else {
    //     rateEur = 30.52;
    //     rateUsd = 28.33;
    // }
    // let userCurrency = prompt("Выберите валюту: usd или eur", "").toLowerCase()
    // switch (userCurrency)
    // {
    //     case "usd": rateUser = rateUsd;
    //         break;
    //     case "eur": rateUser = rateEur;
    //         break;
    //     default: alert("Некорректная валюта");
    // }
    // if (rateUser) {
    //     if (+saleCurrency) {
    //         moneyUser = +prompt(`Сколько ${userCurrency} будете менять?`);
    //         if (moneyUser>-1) {
    //             alert(`За ${moneyUser} ${userCurrency} вы получите ${moneyUser*rateUser} грн`);
    //         }
    //         else {
    //             alert("Некорректная сумма")
    //         }
    //     }
    //     else {
    //         moneyUser = +prompt("Сколько гривен будете менять?");
    //         if (moneyUser>-1) {
    //             alert(`За ${moneyUser} грн вы получите ${Math.floor(moneyUser/rateUser*100)/100} ${userCurrency}`);
    //         }
    //         else {
    //             alert("Некорректная сумма")
    //         }
    //     }
    //     rateUser = 0;
    // }

    //14task

    // let ratios = {
    //     usd: [27.68, 28.33],
    //     eur: [29.61, 30.52]
    // }
    // let saleCurrency;
    // let moneyUser;

    // saleCurrency = +confirm("Вы будете покупать валюту?") 
    // let userCurrency = prompt(`Выберите валюту: ${Object.keys(ratios)}`, "").toLowerCase()

    // if (Object.keys(ratios).indexOf(userCurrency) > -1) { 
    //     if (saleCurrency) {
    //         moneyUser = +prompt(`Сколько ${userCurrency} будете менять?`);
    //         if (moneyUser>-1) {
    //             alert(`За ${moneyUser} ${userCurrency} вы получите ${moneyUser*ratios[userCurrency][saleCurrency]} грн`);
    //         }
    //         else {
    //             alert("Некорректная сумма")
    //         }
    //     }
    //     else {
    //         moneyUser = +prompt("Сколько гривен будете менять?");
    //         if (moneyUser>-1) {
    //             alert(`За ${moneyUser} грн вы получите ${Math.floor(moneyUser/ratios[userCurrency][saleCurrency]*100)/100} ${userCurrency}`);
    //         }
    //         else {
    //             alert("Некорректная сумма")
    //         }
    //     }
    //     userCurrency = "";
    // }
    // else {
    //     alert("Некорректная валюта")
    // }

    //15task
    
    // let turnsVariant = ["камень", "ножницы", "бумага"]
    // let userTurn = prompt ("Камень, ножницы, бумага?","").toLowerCase()
    // let pcTurn = Math.floor(Math.random()*3)
    // if (turnsVariant.indexOf(userTurn)>-1){
    //     if (turnsVariant.indexOf(userTurn) == pcTurn){
    //         alert("Ничья.")
    //     }
    //     else {
    //         if ((turnsVariant.indexOf(userTurn) == 0 && pcTurn == 1) ||
    //             (turnsVariant.indexOf(userTurn) == 1 && pcTurn == 2) ||
    //             (turnsVariant.indexOf(userTurn) == 2 && pcTurn == 0)){
    //             alert("Вы победили!")
    //         }
    //         else {
    //             alert("Вы проиграли...")
    //         }
    //     }
    // }
    // else {
    //     alert("Не знаю такого жеста...")
    // }

    //16task

        // let turnsVariant;
        // let userTurn;
        // let pcTurn;
        // ((turnsVariant = ["камень", "ножницы", "бумага"]).indexOf(userTurn = prompt ("Камень, ножницы, бумага?","").toLowerCase())>-1) &&
        // ( 
        //     ( 
        //         turnsVariant.indexOf(userTurn) == (pcTurn = Math.floor(Math.random()*3))
        //         &&
        //         !alert("Ничья.")
        //     )
        //     || ( 
        //         ( 
        //             (
        //                 ((turnsVariant.indexOf(userTurn) == 0 && pcTurn == 1) ||
        //                     (turnsVariant.indexOf(userTurn) == 1 && pcTurn == 2) ||
        //                     (turnsVariant.indexOf(userTurn) == 2 && pcTurn == 0))
        //             ) &&
        //             !alert("Вы победили!")
        //         )|| !alert("Вы проиграли...")
        //     )
        //     )
        // || ( //else, если вариант не правильный
        //     alert("Не знаю такого жеста...")
        // )