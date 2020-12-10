import React from 'react'
import React, { useState, useEffect } from 'react'


const sample = () => {

    const [count, setCount] = useState(initialState)
    useEffect(() => {
        document.title = 'You Clicked ${count} times';
    })
    return (
        <div>
            <p>You Clicked {count}</p>
            <button onClick={()=>setCount(count+1)}></button>
        </div>
    )
}

export default sample
