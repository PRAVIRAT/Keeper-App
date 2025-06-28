import React,{useState} from "react";
import Note from "./Note";

function CreateArea() {

    const [input,setInput] = useState({title: "", content: ""});
    const [items,setItems] = useState([]);
    const [option,setOption] = useState("Add");

    function upd(event) {
      const {name,value} = event.target;

      setInput((prevValue)=> {
        return {...prevValue, [name]:value}
      });
    }

    function exe(event) {
      event.preventDefault();

      if (input.title.trim()!=="" && input.content.trim()!=="") {
        setItems((prevValue)=> {
        return [...prevValue,input]
      });
      }
      
       if (input.title.trim()==="" || input.content.trim()==="") {
        alert(`Enter the proper TITLE and CONTENT`);
      }

      setInput({title: "", content: ""});
      setOption("Add");
    }

    function remove(id) {
      setItems((prevValue)=> {
        return prevValue.filter((item,index)=> index!==id);
      });
    }

    function edt(title, content, id) {
      setInput({title, content});
      setOption("Save");

      setItems((prevValue)=> {
        return prevValue.filter((item,index)=> index!==id);
      });
    }

  return ( <>
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={upd} value={input.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={upd} value={input.content}/>
        <button onClick={exe}>{option}</button>
      </form>
    </div>

    <div>
      {items.map((item,index)=> <Note term={item} key={index} id={index} press={remove} diff={edt}/>)}
    </div>
 </>);
}

export default CreateArea;
