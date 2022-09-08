// datatypes
console.log('========== DataType ==========');
let a = 1;
let b = a;
a = 2;
console.log(b);

let c = {
   name: 'Mercedes',
};

let d = c;
c.name = 'BWM';
console.log(d); 

let n = {
   name: 'Ngoc Tan',
}

let m = n;
n = {
   name: 'Pham Ngoc Tan',
   age: 21
}
console.log(m);

// datatypes with function
console.log('========== DataType With Function ==========');
function swap(x, y) {
   console.log('Before swap');
   console.log('x: ', x);
   console.log('y: ', y);
   x = x + y;
   y = x - y;
   x = x - y;
   console.log('After swap');
   console.log('x: ', x);
   console.log('y: ', y);
}

var x = 10;
var y = 20;

swap(x, y);
console.log('out function swap');
console.log('x: ', x);
console.log('y: ', y);
