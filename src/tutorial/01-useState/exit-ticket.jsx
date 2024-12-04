import {useState} from 'react'

const UseStateCounter = () => {
    const [value, setValue] = useState(0)
    const [isFalse, setState] = useState(true);

    const handleClick = () => {
        setState(prevState => !prevState)
        setValue(prevCount => prevCount + 1)
    }

    return (
        <>
            <div>
                {isFalse ? <h3>False</h3> : <h3>True</h3>}
                {isFalse ? (<button className='btn' style={{backgroundColor: 'red'}} onClick={handleClick}>Toggle True</button>) : (<button className='btn' style={{backgroundColor: 'green'}} onClick={handleClick}>Toggle False</button>)}
                <h1>{value}</h1>
            </div>
        </>
    )
}

export default UseStateCounter