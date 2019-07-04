import * as React from 'react'
import {useEffect, useState} from 'react';

export const List = () => {

    const [items, add] = useState(["asd", "zxc"]);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);

    useEffect(() =>{

        console.log('effect there');
    });

    return <div>
        <div>{count}</div>
        <div>{count2}</div>

        {items.join(', ')}

        <div>
            <input type="button" onClick={() => {
                setCount(count + 1);
                setCount2(count2 - 1)
            }} value="Add"/>
        </div>


        <div>
            <input type="button" onClick={() => {
                add([...items, "qaz"])
            }} value="Add item"/>
        </div>

    </div>
};
