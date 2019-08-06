var App;
(function (App) {
    App.LoggerMode = {
        Console: 1,
        Alert: 2,
        Toastr: 3
    };
    let Utils;
    (function (Utils) {
        class Logger {
            constructor(mode = App.LoggerMode.Console) {
                this.mode = mode;
                switch (this.mode) {
                    case App.LoggerMode.Alert:
                        this.writer = (msg) => alert(msg);
                        break;
                    case App.LoggerMode.Console:
                        this.writer = (msg) => console.log(msg);
                        break;
                    case App.LoggerMode.Toastr:
                        break;
                }
            }
            write(msg) {
                this.writer(msg);
            }
        }
        Utils.Logger = Logger;
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
//# sourceMappingURL=04-04-utils.js.map