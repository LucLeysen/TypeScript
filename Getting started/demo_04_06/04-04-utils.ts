module App {
    export var LoggerMode = {
        Console: 1,
        Alert: 2,
        Toastr: 3
    }

    export namespace Utils {
        export interface ILogger {
            write: (msg: string) => void;
        }

        export class Logger implements ILogger {

            private writer: any;

            constructor(public mode: number = LoggerMode.Console) {
                switch (this.mode) {
                    case LoggerMode.Alert:
                        this.writer = (msg: string) => alert(msg);
                        break;
                    case LoggerMode.Console:
                        this.writer = (msg: string) => console.log(msg);
                        break;
                    case LoggerMode.Toastr:
                        break;
                }
            }

            write(msg: string) {
                this.writer(msg);
            }

        }
    }
}