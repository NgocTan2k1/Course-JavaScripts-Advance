const iPhone = {
   //Properties
   name: "iPhone7",
   color: 'White',
   weight: 300,

   //methods
   takePhoto() {
      console.log("Take Photo");
   },
};

console.log(iPhone.takePhoto());


const iPhone7 = {
   //Properties
   name: "iPhone7",
   color: 'White',
   weight: 300,

   //methods
   takePhoto() {
      console.log(this);
   },

   objChild: {
      name: 'Child Object',

      methodChild() {
         console.log(this);
      },
   },
};

iPhone7.takePhoto();
iPhone7.objChild.methodChild();


function Car(name, color, weight) {
   this.name = name;
   this.color = color;
   this.weight = weight;
   this.run = function() {
      console.log('Running...', this);
   };
};

const mercedesS450 = new Car('Mercedes S450', 'Black', 1200);
console.log(mercedesS450);
mercedesS450.run();

const button = document.querySelector('button');

button.onclick = function(event) {
   event.preventDefault();
   console.dir(this);
}

