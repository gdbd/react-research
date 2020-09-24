import * as React from 'react'

import * as ReactDOM from 'react-dom'

const TheDiv = ({title}) =>
<div>
    <span>{title}</span>
</div>

ReactDOM.render(<TheDiv title={"zxc"}/>, 
    document.getElementById('container2'))