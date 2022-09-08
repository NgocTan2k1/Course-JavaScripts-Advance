const teacher = {
   firstName: 'Son',
   lastName: 'Dang',
   isOnline: false,

   goOnline() {
      this.isOnline = true;
      console.log(this.firstName + ' ' + this.lastName + ' is online');
   },

   goOffline() {
      this.isOnline = false;
      console.log(this.firstName + ' ' + this.lastName + ' is offline');
   }
};

function greet(greeting, message) {
   return `${greeting} ${this.firstName} ${this.lastName} ${message}`;
};

let result = greet.apply(teacher, ['Hi Brother', ', My name is Tan']);
console.log(result);

let result2 = greet.call(teacher, 'Hi Brother', ', My name is Tan');
console.log(result2);

const me = {
   firstName: 'Son',
   lastName: 'Dang',
   isOnline: false,
}

console.log('Teacher: ', teacher.isOnline);
teacher.goOnline();
console.log('Teacher: ', teacher.isOnline);
console.log('--------------------------------------------------------');
console.log('Me: ', me.isOnline);
teacher.goOnline.apply(me);
console.log('Me: ', me.isOnline);

console.log('--------------------------------');
function Animal(name, weight) {
   this.name = name;
   this.weight = weight;

}


function Parrot() {
   Animal.apply(this, arguments);
   this.speak = function() {
      console.log('Has Visitor');
   };
};

const parrot = new Parrot('Son', 300); 
console.log(parrot);
parrot.speak();


