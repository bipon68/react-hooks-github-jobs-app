import { useReducer } from 'react';

function reducer(state, action){

}

export default function useFetchJobs(params, page){

    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true});

    return{
        jobs: [4, 4, 8],
        loading: false,
        error: false
    }

}