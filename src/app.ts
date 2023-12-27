import { Observable, Observer } from "rxjs";

const myObservable$ = new Observable((subscriber) => {
	subscriber.next("observer is working");
});

const observer: Partial<Observer<unknown>> = {
	next: (value: any) => {
		console.log(value);
	},
};

myObservable$.subscribe(observer);
