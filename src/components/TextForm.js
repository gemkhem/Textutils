import React, {useState} from 'react'

export default function TextForm(props){
    const handleUPclick = ()=>{
        // console.log("UpperCase was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowerclick = ()=>{
        // console.log("UpperCase was clicked" + text)
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleclearclick = ()=>{
        // console.log("UpperCase was clicked" + text)
        let newtext ="";
        setText(newtext);
    }
    const handleOnchange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const[text,setText] = useState("");
    // text= 'enter the text here 2' it the wrong way to write 
    // setText("Enter the text here 2"); it is correct way 
    return (
        <>
            <div className="conatiner">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value ={text} onChange={handleOnchange} id="textBox" rows="10"></textarea>
                </div>
                <button className="btn btn-info mx-1" onClick={handleUPclick}>convert to UPPERCASE</button> 
                <button className="btn btn-info mx-1" onClick={handleLowerclick}>CONVERT TO lowercase</button>
                <button className="btn btn-danger mx-1" onClick={handleclearclick}>Clear text</button>
            </div>
            <div className="conatiner my-2">
                <h2 className='text-success'>Your text summery</h2>
                <p className='text-info'>{text.split(" ").length} Words and {text.length} Characters {text.split('.').length} Statements</p>
                <p className='text-info'>{0.08 * text.split(" ").length} seconds to Read Text</p>
                <h2 className='text-success'>Preview of the text</h2>
                <p className='text-dark'>{text}</p>
            </div>  
         </>
    )
}
