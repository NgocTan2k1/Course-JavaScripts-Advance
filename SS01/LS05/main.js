var message = 'Learn about Scope';

function log() {
    console.log('function log() {...}')
}

function logger() { 
    console.log(message);    
    log(); 
}

logger();

/**
{
    //code block
}
 */

{
    const age = 18;
    let name = 'Ngoc Tan';
    var fullName = "Pham " + name;

    console.log(fullName);
    console.log(age);
    console.log(name);
}
console.log(fullName);
// console.log(age);
// console.log(name);

///
var fullName = 'Pham';
function logger1(first, last) {
    const age = 21;
    console.log(fullName, first, last, age);
}

logger1('Ngoc', 'Tan');