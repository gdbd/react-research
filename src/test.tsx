import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createStore, Dispatch } from 'redux'
import{ Provider, connect } from 'react-redux'

export class AppState { 
    msg: string
    msg_temp: string
}

interface TestProps { 
    msg: string 
    setMessage: (val: string)=> void
    msg_temp: string
    tempChanged: (val: string) => void
}
class TestComponent2 extends React.Component<TestProps, {}>{

    render(){
        const {msg, setMessage, msg_temp, tempChanged} = this.props
        return <div>
                connected component, state message: {msg}    
                <br/>
                <input type="text" value={msg_temp} onChange={e=>tempChanged(e.target.value)} />        
                <br/>            
                <button onClick={e=>setMessage(msg_temp)}>set message</button>
            </div>
    }
}

const mapState = (state: AppState) =>{
    return {
        msg_temp: state.msg_temp,
        msg: state.msg
    }
}

const mapDispatch = (dispatch: Dispatch) =>{
    return {
        setMessage: (val:string) => dispatch({ type:"SET_MSG", message: val }),
        tempChanged: (val: string) => dispatch({ type:"TEMP_CHANGED", text: val })      
    }
}

export const Connected = connect(mapState, mapDispatch)(TestComponent2)

function reducer(state: AppState, action: any){
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

$(document).ready(() => {

    const store = createStore(reducer, new AppState())

    /*store.subscribe(() => {
        console.log("listener: ")
        console.log(store.getState())
    })*/

    store.dispatch({ type: "INIT", message: "initial", temp: "enter message" })
    ReactDOM.render(<Provider store={store}><Connected /></Provider>, document.getElementById('container2'))
})