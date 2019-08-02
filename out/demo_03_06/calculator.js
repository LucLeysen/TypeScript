var demo_03_01;
(function (demo_03_01) {
    window.onload = function () {
        var calc = new Calculator('X', 'Y', 'Output');
    };
    class Calculator {
        constructor(xId, yId, outputId) {
            this.x = document.getElementById(xId);
            this.y = document.getElementById(yId);
            this.output = document.getElementById(outputId);
            this.wireEvents();
        }
        wireEvents() {
            document.getElementById('Add').addEventListener('click', event => {
                this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
            });
            document.getElementById('Substract').addEventListener('click', event => {
                this.output.innerHTML = this.substract(parseInt(this.x.value), parseInt(this.y.value)).toString();
            });
        }
        add(x, y) {
            return x + y;
        }
        substract(x, y) {
            return x - y;
            ;
        }
    }
})(demo_03_01 || (demo_03_01 = {}));
//# sourceMappingURL=calculator.js.map