//Expression function
let i = 0;
const callNow = function() {
    console.log("callNow");
}

//IIFE
;(function() {
    console.log("callNow1");
})()


;(() => {
    console.log("callNow2");
})()


;(function(message) {
    console.log(message);
})('Ngoc Tan')


;((message) => {
    console.log(message);
})('is handsome')

;(function myFunc() {
    i++;
    console.log(i);

    if(i < 10) {
        myFunc();
    }
})();

// myFunc(); //error

//example
const app = {
    cars: [],

    add(car) {
        this.cars.push(car);
    },

    edit(car,index) {
        this.cars[index] = car;
    },

    delete(index) {
        this.cars.splice(index);
    },
};

//example
const app2 = (function() {
        const cars = [];

        return {
            get(index) {
                return cars[index];
            },

            add(car) {
                cars.push(car);
            },
        
            edit(car,index) {
                cars[index] = car;
            },
        
            delete(index) {
                cars.splice(index);
            },
        }
})();


