import * as React from 'react'
import * as ReactDOM from 'react-dom'




const TheDiv = () => <div></div>


export interface TestProps { msg: string }
export class TestComponent2 extends React.Component<TestProps, {}>{
    render(){
        return <div>component and <TheDiv/> {this.props.msg}</div>
    }
}

$(document).ready(() => {

    ReactDOM.render(<TestComponent2 msg="tsx"  />, document.getElementById('container2'))
})