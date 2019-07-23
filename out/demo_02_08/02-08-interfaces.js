var demo_02_08;
(function (demo_02_08) {
    var squareItBasic = (num) => num * num;
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
    var p = {
        name: 'Luc',
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        },
        makeYounger: function (years) {
            this.age -= years;
        }
    };
    var pets = p.calcPets();
    console.log('total pets: ' + pets);
    p.makeYounger(15);
    console.log('new age: ' + p.age);
    var msg = p.greet('Good day to you');
    console.log(msg);
})(demo_02_08 || (demo_02_08 = {}));
//# sourceMappingURL=02-08-interfaces.js.map