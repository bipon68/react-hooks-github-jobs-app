import { useReducer } from 'react';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action){
    // action.payload.x
    switch(action.type){
        case ACTIONS.MAKE_REQUEST:

        case ACTIONS.GET_DATA:

        case ACTIONS.ERROR:

        default: 
            return state
    }
}
    

export default function useFetchJobs(params, page){

    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true});
    dispatch({type: 'hello', payload: {x: 3}})

    return{
        jobs: [4, 4, 8],
        loading: false,
        error: false
    }

}