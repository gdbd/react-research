import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from './state'

interface TestProps { 
    msg: string 
    msg_temp: string
    loading : boolean

    setMessage: (val: string)=> void   
    tempChanged: (val: string) => void
}

class TestComponent2 extends React.Component<TestProps, {}>{

    render(){
        const {msg, setMessage, msg_temp, tempChanged, loading } = this.props
        return <div>
                connected component, state message: {msg}    
                <br/>
                <input type="text" value={msg_temp} onChange={e=>tempChanged(e.target.value)} />        
                <br/>            
                <button onClick={e=>setMessage(msg_temp)}>set message</button>
                <br/>            

                { loading && <div>This is loading...</div> }

            </div>
    }
}

const mapState = (state: AppState) =>{
    return {
        msg_temp: state.msg_temp,
        msg: state.msg,
        loading: state.loading
    }
}

const mapDispatch = (dispatch: Dispatch) =>{
    return {
        setMessage: (val:string) => dispatch({ type:"SET_MSG_START", id: 123 }),
        tempChanged: (val: string) => dispatch({ type:"TEMP_CHANGED", text: val })
    }
}

export const Component2 = connect(mapState, mapDispatch)(TestComponent2)