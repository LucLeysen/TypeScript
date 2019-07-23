module demo_02_08 {

    interface SquareFunction {
        (x: number): number;
    }
    var squareItBasic: SquareFunction = (num) => num * num;

    // interface rectangle
    interface Rectangle {
        h: number;
        w?: number;
    }

    var squareIt: (rect: Rectangle) => number;

    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };

    squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }

    console.log(squareIt(rectA));
    console.log(squareIt(rectB));

    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        name: 'Luc',
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        greet: function (msg: string) {
            return msg + ', ' + this.name;
        },
        makeYounger: function (years: number) {
            this.age -= years;
        }
    };

    var pets = p.calcPets();
    console.log('total pets: ' + pets);

    p.makeYounger(15);
    console.log('new age: ' + p.age);

    var msg = p.greet('Good day to you');
    console.log(msg);
}