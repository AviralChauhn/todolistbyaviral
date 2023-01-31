import React, { useState } from 'react'

export default function Message() {
    const [text, setText] = useState("")
    const onChange = (event) => {
        setText(event.target.value)
    }
    const onupper =()=>{
        let upper=text.toUpperCase()
        setText(upper)
    }
    const onlower=()=>{
        let lower=text.toLowerCase()
        setText(lower)
    }
    const onClear=()=>{
        let clear=""
        setText(clear)
    }
    const oncopy=()=>{
        var text = document.getElementById("exampleformControlarea1")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    return (
        <div className="container">

            <div className='mb-3'>
                <h1>Text Area Box</h1>
                <textarea className="form-control"
                    id="exampleformControlarea1" onChange={onChange}
                    rows="9" value={text}></textarea>
            </div>
            <div className='mx-3'>
                <button onClick={onupper} type="button" class="btn btn-primary">Uppercase</button>
                <button onClick={onlower} type="button" class="btn btn-secondary">Lowercase</button>
                <button onClick={onClear} type="button" class="btn btn-success">Clear</button>
                <button onClick={oncopy} type="button" class="btn btn-danger">Copy</button>
            </div>
        </div>
    )
}
