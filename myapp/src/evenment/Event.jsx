import {useState} from "react";

function Event(){
    //useState
    const [nombre,setNombre] = useState(0);
    function click(){
        setNombre(nombre + 1);
    }
    return (
        <>
            <h1>This in number : {nombre}</h1><br />
            <button onClick={click} style={{padding:'10px',background:'green',color:'white',borderRadius:'5px'}}>Click</button><br /><br />
        </>
    )
}

export default Event;