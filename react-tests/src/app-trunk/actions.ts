import { Dispatch } from "redux";
import { AppState } from "../app/state";

export const doChangeText = (val: string)=>{

    return (dispatch: Dispatch, getState: any) => {
        const state = getState() as AppState      
        dispatch({ type:"TEMP_CHANGED", text: val }) 
    }
}

export function doChangeMessage (message: string) {
    return (dispatch: Dispatch, getState: any) => {

        const state = getState() as AppState

        setTimeout(() => {
            dispatch({ type:"SET_MSG", message: message })
        }, 1000);        
        
    }
}