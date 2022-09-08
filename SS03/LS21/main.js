const teacher = {
   firstName: 'Son',
   lastName: 'Dang',
}

const me = {
   firstName: 'Ngoc',
   lastName: 'Tan',

   showFullName() {
      console.log(`${this.firstName} ${this.lastName}`);
   },
};

me.showFullName.call(me);
me.showFullName.call(teacher);
// me.showFullName.call();

function Animal(name, weight) {
   this.name = name;
   this.weight = weight;
} 

function Chicken(name, weight, legs) {
   Animal.call(this, name, weight);
   this.legs = legs;
};

const chicken = new Chicken('NgocTan', 73.5, 2);

console.log(chicken);


function logger() {
   const arr = Array.prototype.slice.call(arguments, 9);

   arr.forEach(item => {
      console.log(item);
   });
}

logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);