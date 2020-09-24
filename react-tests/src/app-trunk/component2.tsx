import * as React from 'react'
//import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from './state'

import { doChangeText, doChangeMessage } from './actions'

import { ThunkDispatch, ThunkAction } from 'redux-thunk'


interface TestProps { 
    msg: string 
    msg_temp: string

    setMessage: (val: string)=> void   
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
        setMessage: (val:string) => dispatch(doChangeMessage(val)),
        tempChanged: (val: string) => dispatch(doChangeText(val))      
    }
}

export const Component2 = connect(mapState, mapDispatch)(TestComponent2)