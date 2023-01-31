import React,{useEffect, useState} from 'react'

export default function JokesFunctional() {
    const[jokes, setJokes]=useState([])
    let GetJoke=async()=>{
        let url =""
        let data=await fetch(url)
        let parsedData= await data.json
        setJokes(parsedData.joke)
        return jokes
    }
    
  return (
    <div className='mycontainer my-3'>
        <h2>Jokes</h2>
        <div>
           <button onClick={GetJoke()}>Get Joke</button>
        </div>

    </div>
  )
}
