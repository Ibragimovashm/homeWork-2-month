for (let a = 1;a <= 20; a++){
	if (a%2===0) {
		console.log("четные числа : " + a);
	}
}
////////////////////////////////////////////2 задание/////////////////////////////////////
let num = 0;
let sum = 0;
do{
    num = Number(prompt('Введите число:'));
    if (num <= 0) {
        console.log(num);
    }
    else {
        sum = sum + num;
        console.log (sum);
    }
}
while (num > 0 );

