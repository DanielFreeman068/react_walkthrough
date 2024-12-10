import {useState} from 'react'

//short circuit evaluation aka ternary in returns

const ShortCircuit = () => {
    const [text, setText] = useState('Daniel')
    const [isError, setIsError] = useState(false)
    const firstValue = text || "Herro World"
    const secondValue = text && "Hello World"

    return (
        <>
            <h1>{firstValue}</h1>
            <h1>Value : {secondValue}</h1>
            {/* <h1>{text || "John Doe"}</h1> */}
            <button className="btn" onClick={()=>setIsError(!isError)}>Toggle Error</button>
            {isError && <h1>Error...Brain Lost</h1>}
            {isError ? (<p>There is an Error, Please Help</p>) : (<div><h2>There is no Error</h2></div>)}
        </>
    )
}

export default ShortCircuit