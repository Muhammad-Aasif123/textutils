import React, { useState } from "react";
import "./TextArea.css";
import Button from "react-bootstrap/Button";
import { useSpeechSynthesis } from "react-speech-kit";
import copy from "copy-to-clipboard";

export const StatePractice = (props) => {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpCase=()=>{
    var newText = text.toUpperCase();
    setText(newText)
  }
  const handleloCase=()=>{
    var newText = text.toLowerCase();
    setText(newText)
  }
  const handleCopyToClipboard = () =>{
    copy(text);
   props.showAlert("Text saved in clipboard! ", 'success')
  }

  const handleColorBlue = () => {
    document.getElementById('myBox').style.color = "blue";
    let newText = text;
    setText(newText)
}

const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
}
  return (
    <>
      <div className="textField"  style={{color: props.mode === 'dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <textarea
        style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}}
        id='myBox'
          onChange={handleChange}
          className="form-control"
          rows="8"
          value={text}
        ></textarea>
        <Button className="mx-2 my-2" variant="primary" onClick={handleUpCase}>Convert to UpperCase</Button>
        <Button className="mx-2 my-2" variant="primary" onClick={handleloCase}>Convert to LowerCase</Button>
        <Button className="mx-2 my-2" variant="primary" onClick={handleCopyToClipboard}>Copy Text</Button>
        <Button className="mx-2 my-2" variant="primary" onClick={handleCapitalize}>Capital First Letter</Button>
        <button  className="btn btn-primary mx-2 my-2" onClick={() => speak({ text: text })}>Speech</button>
        <button className="btn btn-primary mx-2 my-2" onClick = {handleColorBlue}>Blue Text</button>
      </div>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
           <h3>Your text summary...</h3>
           <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words and {text.trim().length} characters</p>
           <p>{0.008 * text.split(' ').length} minutes need to read your text</p>
           <h3>Preview..</h3>
           <p>{text.length>0?text:"Enter something in the text box above to preview it here..."}</p>
      </div>

    </>
  );
};



