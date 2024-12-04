import {useState, useEffect} from 'react'

//by default useEffect runs every re-render

import React from 'react'

const UseEffectBasics = () => {
    const [value, setValue] = useState(0)

    useEffect(()=>{
            console.log('useEffect called')
            if(value > 0){
                document.title=`New Messages: (${value})`
            }
        }, )
        
        console.log('Rendering Component')
    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={()=>{setValue(value + 1)}}>Press Me</button>
        </>
    )
}

export default UseEffectBasics