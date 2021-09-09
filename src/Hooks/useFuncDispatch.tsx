import { useDispatch } from 'react-redux';

export const useFuncDispatch = (  func: () => any  ) => {

    const dispatch = useDispatch();

    const realizeDispatch = ( fun:Function ) => {
        dispatch( fun )
    }


    return [ realizeDispatch ]
}
