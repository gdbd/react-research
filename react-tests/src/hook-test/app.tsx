import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { List } from './component'

const init = (container: string) => {
    ReactDOM.render(

            <List/>,
         document.getElementById(container))
}

(window as any).global = (window as any).global || {};
(window as any).global.init = (window as any).global.init || {};
(window as any).global.init["hook-test"] = (container:string)=>init(container)
