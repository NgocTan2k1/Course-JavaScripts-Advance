// var, function declaration
console.log('================== var, function declaration =================');
console.log(age);// undefined
//console.log(fullName);// Uncaught ReferenceError: fullName is not defined
var age = 16;

// var age;
// console.log(age);
// console.log(fullName);
// age = 16;

console.log(sum(6, 9)); // 15
function sum(a, b) {
    return a + b;
}
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(6, 9)); // 15


// let, const
console.log('================== let, const =================');
{
    // console.log(fullName);//Uncaught ReferenceError: Cannot access 'fullName' before initialization
    // let fullName = 'Ngoc Tan';

    let name;
    console.log(name);//Uncaught ReferenceError: Cannot access 'name' before initialization
    name = 'Ngoc Tan';

}

{
    let fullName = 'Ngoc Tan 1';
    {
        let fullName = 'Ngoc Tan 2';
        {
            console.log(fullName);
            // let fullName = 'Ngoc Tan 3';
        }
    }
}

// Express
console.log('================== Express =================');

const counter1 = makeCounter();
console.log(counter1());

function makeCounter() {
    let counter = 0;
    return increase;

    function increase() {
        return ++counter;
    }

}