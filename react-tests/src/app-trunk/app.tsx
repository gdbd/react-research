import * as React from 'react'
import { createStore, Dispatch, applyMiddleware } from 'redux'
import * as ReactDOM from 'react-dom'
import{ Provider } from 'react-redux'
import { Component2 } from './component2'
import { AppState } from './state'
import { reducer } from './reducer'
import thunk from 'redux-thunk'

const init = (container: string) => {
    const store = createStore(reducer, new AppState(), applyMiddleware(thunk))

    store.dispatch({ type: "INIT", message: "initial thunk", temp: "enter message" })

    ReactDOM.render(
    <Provider store={store}> 
         <Component2/>       
    </Provider>, document.getElementById(container))
}

(window as any).global = (window as any).global || {};
(window as any).global.init = (window as any).global.init || {};
(window as any).global.init["appThunk"] = (container:string)=>init(container)
