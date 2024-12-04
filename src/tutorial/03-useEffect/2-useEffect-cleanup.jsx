import {useState, useEffect} from 'react'

//clean up functions

import React from 'react'

const UseEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log('use effect')
        window.addEventListener('resize', checkSize)
        return () => {
            console.log('cleanup')
            window.removeEventListener('resize', checkSize)
        }
    })
    console.log('rendering component')
    return (
        <>
            <h1>Window Size:</h1>
            <h2>{size} px</h2>
        </>
    )
}

export default UseEffectCleanUp