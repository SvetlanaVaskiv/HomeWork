// 1task

let humansteps = 10000; //норма шагов в день
let notnorm;// во сколько раз проходит меньше положеного

alert ("Норма шагов в день для человека:10000")
do {
  let stepsam = prompt("Введите количество шагов , которые вы проходите до 12:00");
  let stepspm = prompt ("Введите количество шагов , которые вы проходите в промежутке  от 12:00 до 00:00")
let allsteps = +stepsam + +stepspm;

alert("Вы проходите" + " " + allsteps + " " + "шагов в день");
if(allsteps > humansteps){
  alert ("Вы большой молодец , ведь ходьба - залог здоровья");
}
else if (allsteps < humansteps) {
  notnorm = humansteps / allsteps;
  alert("Вы проходите в" + " " + notnorm + " " + "раз меньше положеного");}
  else  {
    alert = ("Вы проходите норму шагов");}
} 
while (allsteps !== null)

