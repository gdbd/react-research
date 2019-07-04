import * as React from 'react'
import { createStore, Dispatch, applyMiddleware } from 'redux'
import * as ReactDOM from 'react-dom'
import{ Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'


import { Component2 } from './component2'
import { AppState } from './state'
import { reducer } from './reducer'
import mySaga from './sagas'

const init = (container: string) => {

    const sagaMw = createSagaMiddleware()
    const store = createStore(reducer, new AppState(), applyMiddleware(sagaMw))
    sagaMw.run(mySaga)

    store.dispatch({ type: "INIT", message: "initial saga", temp: "enter message" })

    ReactDOM.render(
    <Provider store={store}> 
         <Component2/>       
    </Provider>, document.getElementById(container))
}

(window as any).global = (window as any).global || {};
(window as any).global.init = (window as any).global.init || {};
(window as any).global.init["appSaga"] = (container:string)=>init(container)
