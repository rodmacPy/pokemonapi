import { useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () =>{
        setState({
            ...state,
            isLoading: true,
        })
        const resp = await fetch(url);
        const {results} = await resp.json();
        setState({
            data: results,
            isLoading: false,
            hasError: null
        })
    }
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        getFetch,
    }
}
