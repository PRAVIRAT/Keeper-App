import React,{useState} from "react";

function Note(props) {

  const [strike,setStrike] = useState(false);

  function set() {
    setStrike(!strike);
  }

  return (
    <div className="note">

      <div onClick={set}>
      <h1 style={{textDecoration: strike ? "line-through" : null}}>{props.term.title}</h1>
      <p style={{textDecoration: strike ? "line-through" : null}}>{props.term.content}</p>
      </div>

      <button onClick={()=> {
        props.diff(props.term.title, props.term.content, props.id)
      }}>EDIT</button>
      
      <button onClick={()=> {
        props.press(props.id)
      }}>DELETE</button>

    </div>
  );
}

export default Note;