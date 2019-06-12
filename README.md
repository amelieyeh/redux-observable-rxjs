# Redux-Observable and RxJS practice
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Observable
```
window.addEventListener('click', function(e) {
  console.log(e);
});

observable.fromEvent(window, 'click')
	.subscribe(e => {
    console.log(e);
	});
```

Create an Observable
```
Observable().pipe(
  a series conversion of data...
).subscribe({
  next: payload => {},

  complete: () => {},

  error: error => {},
});
```
once `complete` and `error` is executed, then the Observer is out of action.

```
// try to comment out observer.complete() too see the differents

Observable.create(observer => {
  observer.next('Jerry');
  observer.next('Anna');

  // observer.complete();

  setTimeout(() => {
    observer.next('5 secs later...');
  }, 5000);

  observer.next('Jerry');
  observer.next('Anna');
}).subscribe({
  next: value => {
    console.log(value);
  },

  complete: () => {
    console.log('Complete');
  },

  error: (err) => {
    conosole.log('Error: ', err);
  },
});
```

### mapTo
`mapTo` emits the given constant value on the output Observable every time the source Observable emits a value.
```
source: -----0-----1-----2-----3--...
-------------------------------------
|               mapTo(2)            |
-------------------------------------
newest: -----2-----2-----2-----2--...
```

### scan
`scan` is like the reduce, but emits the current accumulation whenever the source emits a value.
```
source: -----1-----3-----5--...
-------------------------------------
| scan((acc, curr) => acc + curr, 0)|
-------------------------------------
newest: -----1-----4-----9--...
```

```
source: -----h-----e-----l-----l------o|
---------------------------------------------
| scan((origin, next) => origin + next, '') |
---------------------------------------------
newest: -----h-----he-----hel-----hell-----hello|
```

try simple +1/-1 click button
```
const counter = document.getElementById('count');
const addButton = document.getElementById('addBtn');
const minusButton = document.getElementById('minusBtn');
const addClick = fromEvent(addBtn, 'click').mapTo(1);
const minusClick = fromEvent(minusBtn, 'click').mapTo(-1);

merge(addClick, minusClick).pipe(
  scan((accumulator, current) => accumulator + current);
).subscribe({
  next: (value) => { count.innerText = value; },
  complete: () => { console.log('complete'); },
  error: (err) => { console.log('Error: ' + err); },
);
```

### tap
`tap` performs a side effect for every emission on the source Observable, but return an Observable that is identical to the source.

it won't change the data, nor will it affect the entire RxJS data flow.

usually use it to check out the value of Observable's subscribe or log out the value.
```
source: -----1-----2-----3--...
-------------------------------
|   tap(x => console.log(x))  |
-------------------------------
newest: -----1-----2-----3--...
```

### mergeMap (flatMap)
`mergeMap` => `map` + `mergeAll`
it projects each source value to an Observable which is merged in the output Observable.
```
source: --1--------3-----5--...
        --10-10-10-...
-------------------------------------
| mergeMap(i => i*10-i*10-i*10---|) |
-------------------------------------
newest: --10-10-10-30-30-50---...
```

### takeUntil
`takeUntil` emits the values emitted by the source Observable until a notifier Observable emits a value.

Lets values pass until a second Observable, notifier, emits a value. Then, it completes.
```
source: --a--b--c--d--e--f--...
        -----------z-----------
-------------------------------
|          takeUntil          |
-------------------------------
newest: --a--b--c--d|-------...
```

### ajax
`ajax` creates an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.

read more of [ajax()](https://rxjs-dev.firebaseapp.com/api/ajax/ajax).

### debounceTime
`debounceTime` emits a value from the source Observable only after a particular time span has passed without another source emission.

It's like delay, but passes only the most recent value from each burst of emissions.
```
source: ---a----b--c-----d-----...
--------------------------------
|       debounceTime(20)       |
--------------------------------
newest: ------a--------c------d--...
```

### switchMap
`switchMap` projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.

it maps each value to an Observable, then flattens all of these inner Observables.
```
source: -1----------3-----5---------...
        -10-10-10-...
---------------------------------------
|  switchMap(i => i*10-i*10-i*10-|)   |
---------------------------------------
newest: -10-10-10---30-30-50-50-50--...
```

### filter
`filter` is to filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.

Like `Array.prototype.filter()`, it only emits a value from the source if it passes a criterion function.`
```
source: ---0---1---2---3---4---...
----------------------------------
|    filter(x => x % 2 === 1)    |
----------------------------------
newest: -------1-------3-------...
```



<!--refs:
https://rxjs-dev.firebaseapp.com/api
https://ithelp.ithome.com.tw/articles/10187248 
-->