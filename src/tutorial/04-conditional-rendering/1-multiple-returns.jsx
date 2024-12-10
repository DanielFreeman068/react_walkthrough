import {useState, useEffect} from 'react'

const url = 'http://api.github.com/users/DanielFreeman068 '

const MultipleReturns = () => {
    //webpage state changes: you can use these to setup your own loading screens progress bars... etc as well as a customer error component for worng pages or permissions
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default-user')

    useEffect(() => {
        fetch(url)
            .then((resp)=>{
                if(resp.status >= 200 && resp.status <= 299){
                    return resp.json()
                }
                else{
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(resp.statusText)
                }
            })
            .then((user)=>{
                const {login} = user
                setUser(login)
                setIsLoading(false)
            })
            .catch((error)=>{
                console.error('Error:', error)
                    setIsLoading(false)
                    setIsError(true)
            })
    })

    if(isLoading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(isError){
        return(
            <div>
                <h1>Error...</h1>
            </div>
                )
    }

    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
    
    return (
        <div>MultipleReturns</div>
    )
}

export default MultipleReturns