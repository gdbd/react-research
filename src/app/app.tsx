import * as React from 'react'
import { createStore, Dispatch } from 'redux'
import * as ReactDOM from 'react-dom'
import{ Provider } from 'react-redux'
import { Component2 } from './component2'
import { AppState } from './state'
import { reducer } from './reducer'


function init(container: string) {
    const store = createStore(reducer, new AppState())

    /*store.subscribe(() => {
        console.log("listener: ")
        console.log(store.getState())
    })*/

    store.dispatch({ type: "INIT", message: "initial", temp: "enter message" })
    ReactDOM.render(<Provider store={store}><Component2 /></Provider>, document.getElementById(container))
}

(window as any).global = {
    init: {
        component2: (container:string)=>init(container)
    }
}