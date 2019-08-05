var demo_03_09;
(function (demo_03_09) {
    class Engine {
        constructor(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        start(callback) {
            window.setTimeout(() => {
                callback(true, this.engineType);
            }, 1000);
        }
        stop(callback) {
            window.setTimeout(() => {
                callback(true, this.engineType);
            }, 1000);
        }
    }
    class Accessory {
        constructor(accessoryNumber, title) {
            this.accessoryNumber = accessoryNumber;
            this.title = title;
        }
    }
    class Auto {
        constructor(options) {
            this.engine = options.engine;
            this.basePrice = options.basePrice;
            this.make = options.make;
            this.model = options.model;
            this.year = options.year;
        }
        calculateTotal() {
            var taxRate = .08;
            return this.basePrice + (taxRate * this.basePrice);
        }
        addAccessories(...accessories) {
            this.accessoryList = '';
            for (var i = 0; i < accessories.length; i++) {
                var acc = accessories[i];
                this.accessoryList += acc.accessoryNumber + ' ' + acc.title + '<br />';
            }
        }
        getAccessoryList() { return this.accessoryList; }
        get basePrice() { return this._basePrice; }
        set basePrice(value) {
            if (value < 0) {
                throw 'price must be > 0';
            }
            ;
            this._basePrice = value;
        }
        get engine() { return this._engine; }
        set engine(value) {
            if (value == undefined) {
                throw 'Please supply an engine';
            }
            ;
            this._engine = value;
        }
    }
    class Truck extends Auto {
        constructor(options) {
            super(options);
            this.bedLength = options.bedLength;
            this.fourByFour = options.fourByFour;
        }
    }
    window.onload = function () {
        var truck = new Truck({
            engine: new Engine(250, 'V6'),
            basePrice: 45000,
            make: 'Chevy',
            model: 'Silverado',
            bedLength: 'Long Bed',
            fourByFour: true,
            year: 2000
        });
        truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing package'));
        truck.engine.start((status, engineType) => {
            alert(engineType + ' was started');
        });
    };
})(demo_03_09 || (demo_03_09 = {}));
//# sourceMappingURL=auto.js.map