function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter;
    }
    return increase;
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

const counter1 = createCounter();

console.log(counter1());
console.log(counter1());


// ====================== App ======================
console.log('====================== App ======================');
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}]: ${message}`);
    }

    return logger;
}
console.log('====================== info ======================');
const infoLogger = createLogger('Info');
infoLogger('Start send email');
infoLogger('Unsuccessful send email, send again');
infoLogger('Success send email');

console.log('====================== error ======================');
const errorLogger = createLogger('Error');
errorLogger('Email is not exist in database');
errorLogger('Unsuccessful send email, send again');
errorLogger('Success send email');

// ====================== Storage ======================
console.log('====================== Storage ======================');
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));

    }
    const storage = {
        get(key) {
            return store[key];
        },

        set(key, value) {
            store[key] = value;
            save();
        },

        remove(key) {
            delete store[key];
            save();
        },
    }

    return storage;
}

// Profile.js
const profileSetting = createStorage('profile_setting');

console.log(profileSetting.get('fullname'));
profileSetting.set('fullname', 'Ngoc Tan');

console.log(profileSetting.get('age'));
profileSetting.set('age', 21);


console.log(profileSetting.get('address'));
profileSetting.set('address', 'Quang Ngai');
profileSetting.remove('fullnamagee');



// ====================== App Car ======================
console.log('====================== App Car ======================');
function createApp() {
    const cars = [];

    return {
        add(car) {
            cars.push(car);
        },

        show() {
            console.log(cars);
        },
    };
}

const app = createApp();

app.show();
app.add('BWM');
app.add('Audi');
app.show();
