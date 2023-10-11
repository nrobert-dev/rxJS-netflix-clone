import {ajax} from 'rxjs/ajax';
import {
    map,
    switchMap,
    startWith,
    debounceTime,
    tap,
    mapTo,
    takeWhile,
    takeUntil,
    scan,
    repeat
} from "rxjs/operators";
import {Subject, combineLatest, interval} from "rxjs";
import {dispatch} from "./store";
import {setIsLoadingActionCreator} from "./actions";


/* Searching and Filtering */
const searchSubject = new Subject();
const selectSubject = new Subject();
const typeSubject = new Subject();

export const onSearch$ = searchSubject.pipe(
    map(e => e.target.value),
    debounceTime(1000),
    startWith('')
);
export const onSelect$ = selectSubject.pipe(
    map(e => e.target.value),
    startWith('')
);
export const onType$ = typeSubject.pipe(
    startWith('movies')
);

export const browse$ = combineLatest([onSearch$, onSelect$, onType$]).pipe(
    tap(() => dispatch(setIsLoadingActionCreator(true))),
    switchMap(([term,select,type]) => ajax.getJSON(`https://netflixcloneapi.onrender.com/video/list?term=${term}&select=${select}&type=${type}`)),
    tap(() => dispatch(setIsLoadingActionCreator(false)),
));

/* Initializing a movie play */
const onPlay$ = new Subject();
export const onCancel$ = new Subject();

export const playCountDown$ = onPlay$.pipe(
    switchMap(() => interval(1000)),
    mapTo(-1),
    scan((acc, curr) => acc+curr, 4),
    takeWhile(val => val >= 0),
    startWith(4),
    takeUntil(onCancel$),
    repeat()
);





