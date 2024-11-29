import {useState} from "react";

function Changement(){
    //useState
    const [text,setText] = useState('');
    function change(e){
        setText(e.target.value) ;
    }
    return (
        <>
            <input type="text" onChange={change}  style={{border:'solid 2px black'}} placeholder="taxt"/><br />

            <h1>{text}</h1><br />
        </>
    )
}

export default Changement;