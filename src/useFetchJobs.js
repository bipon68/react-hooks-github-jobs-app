import { useReducer, useEffect } from 'react';
import axios from 'axios';

// cross issue ref - https://stackoverflow.com/questions/63010119/how-to-fix-cors-issue-in-reactjs

const BASE_URL = 'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json'

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
        const cancelToken1 = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL, {
            params: {markdown: true, page: page, ...params}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data}})
            console.log('data : ', res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({type: ACTIONS.ERROR, payload: {error: e}})
        })
        return () => {
            cancelToken1.cancel()
          }
    }, [params, page])


    return state;

}