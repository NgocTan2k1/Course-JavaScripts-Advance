var tip = 100;

(function () {
    console.log(tip);
    console.log("I have $" + husband());

    function wife() {
        console.log('tip  * 2:', tip  * 2);
        return tip * 2;
    }

    function husband() {
        console.log('wife() / 2:', wife() / 2);
        return wife() / 2;
    }

    var tip = 10;
    console.log(tip);
})();
// Output: ?
