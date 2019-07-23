var demo_02_07;
(function (demo_02_07) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = (h, w) => h * w;
    var helloWorld;
    helloWorld = (name) => {
        console.log('Hello ' + (name || 'unknown person'));
    };
    helloWorld();
    helloWorld('Luc');
})(demo_02_07 || (demo_02_07 = {}));
//# sourceMappingURL=02-07-functions.js.map