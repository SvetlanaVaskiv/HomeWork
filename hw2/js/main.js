// Сделайте несколько примеров кода, отсутствие ; в которых приводит к синтаксической ошибке
let a = 10;
let b,c;
b = (a*10) c = (b/2)

//немного не понял про логическую ошибку при отсутсвии ;

//1task
let age;

do {
    age = prompt ("Введите свой возраст");
    let dateBirth = 2021 - age; 

    alert (`Вы родились в ${dateBirth} году` )
} while (dateBirth !== null)


//2task

let temperatureCelsius;
do {
    temperatureCelsius = prompt("Введите температуру в градусах Цельсия");
    let temperatureFarenheit = (temperatureCelsius * 9/5) + 32;

    alert (`Температура ${temperatureFarenheit} в градусах Фаренгейта`);
} while (temperatureFarenheit !== null)

//3task

let firstNumber;
let secondNumber;

do {
    firstNumber = prompt('Введите первое число');
    secondNumber = prompt ('Введите второе число');

    let result = Math.floor(firstNumber / secondNumber);
    alert (`Вы получили результат ${result}`)
}while (secondNumber !== null)

//МОЖНО СИНИЙ ПОЯС?

let numeral;

do {
    numeral = prompt ('Введите число , буквы НЕ НАДА');

    if (!/^[0-9]+$/.test(numeral)){
        alert ("Ну я же попросил!!!")
    } else {
        alert ("KRASAVA")
    }
}while (numeral !== null)

// badwords task

let text;

do {
    text = prompt ("Write something good");

    if (text.includes(`fuck`)){
        alert ("You are bad boy!")

    }else {
        alert ("You are good boy")
    }
} while (text !== null)

// confirm-task

let questionMan = confirm ("Вы мужчина?");

do {if (questionMan) {
    alert("Вы мужчина")
  }else {
    alert ("Вы женщина")
  }
} while (comfirm !== null)
    
// array tasks

Array:Booleans
array [q1] 

//Array:Plus

let numbers = [1, 1];
numbers[2] = numbers[0] + numbers[1];
alert(numbers);

//plus-string

let students = []; //ученики
let item=0;
let = studentsItem = prompt("Имя ученика №" + (item + 1), "")
while (studentsItem) {
    if (item++ > 0) {
        students[item - 1] = students[item - 2] + ", " + studentsItem;
        studentsItem = prompt("Имя ученика №" + item, "")
    }
    else {
        students[item - 1] = studentsItem;
        studentsItem = prompt("Имя ученика №" + item, "")
    }
}
alert("Список учеников: " + students[students.length - 1]);//работает пока в prompt не будет пустота

//Comparison if

var age = +prompt("Сколько вам лет?","");
if (age < 0)
{
    alert("нерождённый");
}
else
{
    if (age < 18)
    {
        alert("школьник");
    }
    else {
        if (age < 30)
        {
            alert("молодежь");
        }
        else
        {
            if (age < 45)
            {
                alert("зрелость");
            }
            else
            {
                if (age < 60)
                {
                    alert("закат");
                }
                else
                {
                    if (age > 59)
                    {
                        alert("как пенсия?");
                    }
                    else
                    {
                        alert("то ли киборг, то ли ошибка");
                    }
                }
            }
        }
    }
}


//Comparison: sizes
sizeUSA = +prompt("Введите американский размер одежды.", "")
if ((sizeUSA + 1) % 2 && sizeUSA > 5 && sizeUSA < 21)
{
    let sizeRu = 34 + sizeUSA;
    alert("Российский размер одежды: " + sizeRu);
}
else
{
    alert("Мне неизвестен этот размер.");
}

// Comparison: object
let sizes = {
    Russia: [40,42,44,46,48,50,52,54],
    EuropeGeneral: [34,36,38,40,42,44,46,48],
    FranceSwitherland: [36,38,40,42,44,46,48,50],
    Italy: [38,40,42,44,46,48,50,52],
    Britain: [8,10,12,14,16,18,20,22],
    USA: [6,8,10,12,14,16,18,20]
}
let sizeStartSystem = prompt("В какой системе у вас размер одежды? " + Object.keys(sizes), "")
let sizeCurrentIndex = sizes[sizeStartSystem].indexOf(+prompt("Какой размер из этих нужно перевести? " + Object.values(sizes[sizeStartSystem]), ""))
let sizeFinishSystem = prompt("В какую систему пересчитать? " + Object.keys(sizes), "")
let finishSize = sizes[sizeFinishSystem][sizeCurrentIndex]
if (finishSize)
{
    alert("Размер в нужной системе: " + finishSize)
}
else
{
    alert("Что-то пошло не так...");
}

//Ternary
let sex = confirm("Ваш пол мужской?") ? "Вы мужчина" : "Вы женщина";
alert(sex)

//Number: flats
let floorsNumber = +prompt("Сколько этажей в доме?", "")
let flatsAtFloorNumber = +prompt("Сколько квартир на этаже?", "")
let flatNumber = +prompt("Какой номер квартиры?", "")
let flatFloor = Math.ceil((flatNumber % (floorsNumber*flatsAtFloorNumber)) / flatsAtFloorNumber)
let flatEntrance = Math.ceil(flatNumber / (floorsNumber*flatsAtFloorNumber))
if (flatFloor && flatEntrance)
{
    alert("Квартира №" + flatNumber + " находится в подъезде №" + flatEntrance + ", на этаже №" + flatFloor)
}
else
{
    alert("Что-то пошло не так...");
}



