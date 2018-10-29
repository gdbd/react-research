import * as React from 'react'
import { Link } from 'react-router-dom'


interface TestProps { 
    msg: string 
}

export class Component1 extends React.Component<TestProps, {}>{

    render(){
        const {msg} = this.props
        return <div>
                connected component, state message: {msg}    
                <br/>
                <input type="text" value={msg} />        
                <br/>  
                <Link to="/2">goto #2</Link>
            </div>
    }
}