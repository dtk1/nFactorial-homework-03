//Task 1
let user = {

};
user.name = prompt("Введите ваше имя:");
user.age = prompt("Введите ваш возраст:");
user.gender = confirm("Вы мужчина?") ? "мужчина" : "женщина";
console.log(user)
//Task 2
if (prompt("Сколько тебе лет?") > 18) {
    alert("Поздравляю ты совершеннолетний!");
}
else {
    alert("Тебе надо еще подрасти)");
}
//Task 3
let a = +prompt('a?', '');
console.log(a);
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert(2, 3);
        break;
}
//Task 4
//1
let sum = 0;
for(let i = 2; i <= 100; i+=2){
    sum += i;
}
console.log(sum);
//2
let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}
