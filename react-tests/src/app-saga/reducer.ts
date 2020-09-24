import { AppState } from './state'

export function reducer(state: AppState, action: any){
    console.log(action)

    let ns2 = {...state}

    switch(action.type){
        case "INIT":
            ns2.msg = action.message
            ns2.msg_temp = action.temp
            break;

        case "SET_MSG_START":
            ns2.loading = true
            break;

        case "SET_MSG_COMPLETE":
        case "SET_MSG_FAIL":
            ns2.loading = false
            ns2.msg = action.message
            break; 

        case "TEMP_CHANGED":
            ns2.msg_temp = action.text
            break;
    }

    return ns2;
}