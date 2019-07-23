var demo_03_01;
(function (demo_03_01) {
    class Engine {
        constructor(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
    }
    class Car {
        constructor(engine) {
            this.engine = engine;
        }
        get engine() {
            return this._engine;
        }
        set engine(value) {
            if (value == undefined) {
                throw 'Please supply an engine';
            }
            this._engine = value;
        }
        start() {
            alert('Car engine started ' + this.engine.engineType);
        }
    }
    window.onload = function () {
        var engine = new Engine(300, 'V8');
        var car = new Car(engine);
        alert(car.engine.engineType);
        car.start();
    };
})(demo_03_01 || (demo_03_01 = {}));
//# sourceMappingURL=03_01_classes.js.map