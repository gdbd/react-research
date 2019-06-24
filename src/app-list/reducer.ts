import { AppState } from './state'

export function reducer(state: AppState, action: any){
    console.log(action)

    let ns2 = {...state}

    switch(action.type){
        case "INIT":
            ns2.Items = [];
            break;

        case "ADD":
            ns2.Items = [...state.Items, action.item]
            break;
    }

    return ns2;
}
