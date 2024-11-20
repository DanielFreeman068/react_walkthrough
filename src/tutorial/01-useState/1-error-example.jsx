//this is an example of why we need to use useState and not variables
import React from 'react'

const ErrorExample = () => {
    let title = "some book title"

    const handleClick = () => {
        title='Holes'
        console.log(title)
    }
    return (
    <>
        <h2>{title}</h2>
        <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </>
    )
}

export default ErrorExample

//this is an error because we are not rendering the site
//this will also fail because we do not have a way of perserving the variables between renders
//now that you can see why you would error and the usecase for useState, lets learn to make it work