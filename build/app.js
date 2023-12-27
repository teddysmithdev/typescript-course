"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const myObservable$ = new rxjs_1.Observable((subscriber) => {
    subscriber.next("observer is working");
});
const observer = {
    next: (value) => {
        console.log(value);
    },
};
myObservable$.subscribe(observer);
