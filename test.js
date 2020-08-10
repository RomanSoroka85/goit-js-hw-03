// let year =2000;
// if (year%4 === 0) {
// if (year%100 === 0){
//     console.log()
// }
// }

let enter = confirm("не хотите-ли сыграть");
while (enter) {
  enter = prompt("введите число от 1 до 10");
  if (enter === null) {
    alert("отменено пользователем");
    break;
  }
  let random = Math.round(Math.random() * (10 - 1) + 1);
  if (random === +enter) {
    alert("вы выиграли");
    break;
  } else {
    alert(`попробуйте еще раз, ${random}`);
  }
}
   

