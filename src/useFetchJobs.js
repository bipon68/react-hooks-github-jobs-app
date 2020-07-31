import { useReducer, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://jobs.github.com/positions.json'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action){
    // action.payload.x
    switch(action.type){
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, jobs: []}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, jobs: []}

        default: 
            return state
    }
}
    

export default function useFetchJobs(params, page){

    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true});
    // dispatch({type: 'hello', payload: {x: 3}})

    useEffect(() =>{
        dispatch({ type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL, {
            params: {markdown: true, page: page, ...params}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data}})
        }).catch(e => {
            dispatch({type: ACTIONS.ERROR, payload: {error: e}})
        })
    }, [params, page])


    return state;

}