import { AppState } from './state'

export function reducer(state: AppState, action: any){
    console.log(action)

    let ns2 = {...state}

    switch(action.type){
        case "INIT":
            ns2.msg = action.message
            ns2.msg_temp = action.temp
            break;

        case "SET_MSG":
            ns2.msg = action.message
            break;

        case "TEMP_CHANGED":
            ns2.msg_temp = action.text
            break;
    }

    return ns2;
}