import {useState} from 'react'

//remember the component name has to be capitalized
//invoke useState inside the function not outside 
//dont call hooks conditionally

const UseStateBasics = () => {
    const [text, setText] = useState('Random Title')
    //function to change the text
    const handleClick = () => {
        if(text === 'Random Title'){
            setText('Hola idiotas')
        }else{
            setText('Random Title')
        }
    }
    return (
        <>
            <h1>{text}</h1>
            <button className="btn" onClick={handleClick}>
                Change Title
            </button>
        </>
    )
}

export default UseStateBasics