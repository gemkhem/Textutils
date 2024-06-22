import React, {useState} from 'react'

export default function TextForm(props){
    const handleUPclick = ()=>{
        console.log("UpperCase was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleOnchange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const[text,setText] = useState('Enter text here');
    // text= 'enter the text here 2' it the wrong way to write 
    // setText("Enter the text here 2"); it is correct way 
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnchange} id="textBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUPclick}>convert to UPPERCASE</button>
        </div>
    )
}
