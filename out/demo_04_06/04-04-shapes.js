/// <reference path="04-04-utils.ts" />
var App;
(function (App) {
    var Shapes;
    (function (Shapes) {
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            getDist() {
                return Math.sqrt(this.x * this.x + this.y);
            }
        }
        Shapes.Point = Point;
        class Rectangle {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
            getPerimeter() {
                return this.height * 2 + this.width * 2;
            }
            getArea() {
                return this.height * this.width;
            }
        }
        Shapes.Rectangle = Rectangle;
    })(Shapes = App.Shapes || (App.Shapes = {}));
})(App || (App = {}));
var Shapes = App.Shapes;
var Utils = App.Utils;
var log = new Utils.Logger(App.LoggerMode.Console);
var p = new Shapes.Point(3, 4);
var dist = p.getDist();
log.write("distance = " + dist);
var rect = new Shapes.Rectangle(1, 2);
var perimeter = rect.getPerimeter();
log.write("perimeter = " + perimeter);
//# sourceMappingURL=04-04-shapes.js.map