import * as React from 'react'
import { createStore, Dispatch } from 'redux'
import * as ReactDOM from 'react-dom'
import{ Provider } from 'react-redux'
import { Component1 } from './component1'
import { Component2 } from './component2'
import { AppState } from './state'
import { reducer } from './reducer'
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'


const init = (container: string) => {
    const store = createStore(reducer, new AppState())

    /*store.subscribe(() => {
        console.log("listener: ")
        console.log(store.getState())
    })*/

    store.dispatch({ type: "INIT", message: "initial", temp: "enter message" })
    ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Component1} />
                <Route exact path="/1" component={Component1} />
                <Route path="/2" component={Component2} />
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById(container))
}



(window as any).global = (window as any).global || {};
(window as any).global.init = (window as any).global.init || {};
(window as any).global.init["app"] = (container:string)=>init(container)
