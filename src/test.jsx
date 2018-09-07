
import React from 'react'
import ReactDOM from 'react-dom'
import './test.css'

import {log} from './inc.js'

const TheDiv = () => <div>test</div>


class TestComponent extends React.Component{
    render(){
        return <div className="containers">component and <TheDiv/> here</div>
    }

    componentDidMount(){
        log("componentDidMount")
    }
}

$(document).ready(() => {
    log("started!")
    ReactDOM.render(<TestComponent/>, document.getElementById('container'))
})