import {useState} from 'react'

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name:'John',
        age:24,
        message:"John Cottontail is COMING FOR YOU"
    })

    const changeMessage= () => {
        setPerson({...person, message:"Peter Cottontail is HERE FOR YOU"})
    }
    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button className="btn" onClick={changeMessage}>
                Change Message
            </button>
        </>
    )
}

export default UseStateObject