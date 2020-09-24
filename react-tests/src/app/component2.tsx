import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from './state'
import { Link } from 'react-router-dom'

interface TestProps { 
    msg: string 
    setMessage: (val: string)=> void
    msg_temp: string
    tempChanged: (val: string) => void
}

class TestComponent2 extends React.Component<TestProps, {}>{

    render(){
        const {msg, setMessage, msg_temp, tempChanged} = this.props
        return <div>
                connected component, state message: {msg}    
                <br/>
                <input type="text" value={msg_temp} onChange={e=>tempChanged(e.target.value)} />        
                <br/>            
                <button onClick={e=>setMessage(msg_temp)}>set message</button>
                <br/>            
                <Link to="/1">goto #1</Link>
            </div>
    }
}

const mapState = (state: AppState) =>{
    return {
        msg_temp: state.msg_temp,
        msg: state.msg
    }
}

const mapDispatch = (dispatch: Dispatch) =>{
    return {
        setMessage: (val:string) => dispatch({ type:"SET_MSG", message: val }),
        tempChanged: (val: string) => dispatch({ type:"TEMP_CHANGED", text: val })      
    }
}

export const Component2 = connect(mapState, mapDispatch)(TestComponent2)