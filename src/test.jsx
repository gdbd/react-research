
import React from 'react'
import ReactDOM from 'react-dom'

const TheDiv = () => <div>test</div>


$(document).ready(() => {
    ReactDOM.render(<TheDiv/>, document.getElementById('container'))
})

