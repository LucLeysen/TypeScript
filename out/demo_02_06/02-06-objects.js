var demo_02_06;
(function (demo_02_06) {
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log('rect area = ' + rectangle.calcArea());
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1 = squareIt({ h: 10 });
    console.log('rect h and w 10 = ' + sq1);
    var sq2 = squareIt({ h: 10, w: 5 });
    console.log('rect h and w 5 = ' + sq2);
})(demo_02_06 || (demo_02_06 = {}));
//# sourceMappingURL=02-06-objects.js.map