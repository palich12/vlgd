var FirstClass = /** @class */ (function () {
    function FirstClass() {
    }
    FirstClass.prototype.run = function () {
        console.log("run");
    };
    return FirstClass;
}());
var myclass = new FirstClass();
myclass.run();
