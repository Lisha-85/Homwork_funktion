/*

1)Написать функцию, которая получает в качестве аргумента число и строку, 
где число обозначает сколько раз должна быть добавлена эта строка в массив. 
Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, 
в результате мы получаем [“dog”,”dog”,”dog”].
const createArray = (number, string) => { 
    const array = []; 
    for (let index = 0; index < number; index++) { 
        array.push(string); 
    } 
    return array; 
} 
console.log(createArray(3, 'dog'));

function creatArray (number, string){
    const array =[];
    for (let index = 0; index < number; index++){
        array.push(string);
    }
    return array;

}
console.log(creatArray(3, 'dog'));

2)Написать функцию, которая получает в качестве аргумента массив с числами. 
Функция нужна для расчета суммы четных чисел в массиве. 
Так же написать новую функцию для расчета суммы нечетных чисел в массиве. 

function calkEvenNumber (array){
    const sum = 0;
    for (let index = 0; index < array.length; index ++){
        if (array[index]%2 ===0){
         sum = sum + array[index];  
        }

    }
    return sum;
}
function calkOddNumber (array){
    const sum = 0;
    for (let index = 0; index < array.length; index ++){
        if (array[index]%2 !==0){
         sum = sum + array[index];  
        }

    }
    return sum;
}

Написать функцию, которая принимает как аргумент две полученные суммы 
и выводит наибольшее из них.

function result (sum1, sum2){
    if (sum1 < sum2 ){
        console.log(sum2);
    }else {
        console.log(sum1);
    }
    
    
}


3)Напишите функцию, которая как аргумент принимает строку. 
Эта функция возвращает это слово в развернутом виде. Пример:  “cat” => “tac”
 
function reversWord (string){
    return string.revers()

}
console.log(reversWord('cat'))

4)Написать функцию, которая будет находить максимальное число в массиве.
5)написать функцию, которая будет находить минимальное число в массиве.

 */