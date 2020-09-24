import * as React from 'react'
import { createStore, Dispatch } from 'redux'
import * as ReactDOM from 'react-dom'
import{ Provider } from 'react-redux'

import { TestComponentList } from './component'
import { AppState } from './state'
import { reducer } from './reducer'



const init = (container: string) => {
    const store = createStore(reducer, new AppState())
    store.dispatch({ type: "INIT" })
    ReactDOM.render(
        <Provider store={store}>
            <TestComponentList/>
        </Provider>, document.getElementById(container))
}



(window as any).global = (window as any).global || {};
(window as any).global.init = (window as any).global.init || {};
(window as any).global.init["app-list"] = (container:string)=>init(container)
