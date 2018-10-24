
import React from 'react'
import ReactDOM from 'react-dom'
import './test.css'

import {log} from './inc.js'

const TheDiv = () => <div>test</div>


export class Component1 extends React.Component{
    render(){
        return <div className="containers">component and <TheDiv/> here</div>
    }

    componentDidMount(){
        log("Component1 mount")
    }
}

window.global = window.global || {}
window.global.init = window.global.init || {}
window.global.init.component1 = (container)=>ReactDOM.render(<Component1/>, document.getElementById(container))