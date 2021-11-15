import {useEffect, useState} from 'react';
import {dispatch, store$} from "./store";

export const useStore = () => {
    const [internalState, setInternalState] = useState(null);

    useEffect(() => {
        const sub = store$.subscribe((state) => {
            setInternalState({...state});
        });

        return () => sub.unsubscribe();
    },[]);

    return [internalState, dispatch];
}