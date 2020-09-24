import * as React from 'react'

import {render} from 'react-dom'


const TheSection = ({title}) => 
<section>
    <div>{title}</div>
</section>

render(<TheSection title={"asd"}/>, 
    document.getElementById('container1'))