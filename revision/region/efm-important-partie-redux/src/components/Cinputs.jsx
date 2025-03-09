import { useState } from "react";
import { useDispatch } from "react-redux";
import { Addition, Division, Multiplication, Soustraction } from "./action";

function Cinputs(){

    const [op,setOp] = useState({
        val1:"",
        val2:"",
        ops:"",
        rslt:""
    })
    const dispatch = useDispatch();



    function add(){
        
        return dispatch(Addition(op))
    }

    function sous(){
        
        return dispatch(Soustraction(op))
    }

    function mult(){
       
        return dispatch(Multiplication(op))
    }

    function divis(){
        
        return dispatch(Division(op))
    }

    return(
        <>
            
            <input type="text" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="VALEUR 1" onChange={(e)=>setOp({...op,val1:e.target.value})}/>
            
            <input type="text" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="VALEUR 2"  onChange={(e)=>setOp({...op,val2:e.target.value})}/>

            <br />
            <button class="cursor-pointer mx-2 rounded-lg bg-blue-700 px-2 py-1 text-lg font-semibold text-white" onClick={add} >+</button>
            <button class="cursor-pointer mx-2 rounded-lg bg-red-700 px-2 py-1 text-lg font-semibold text-white" onClick={sous}>-</button>
            <button class="cursor-pointer mx-2 rounded-lg bg-green-700 px-2 py-1 text-lg font-semibold text-white" onClick={mult}>*</button>
            <button class="cursor-pointer mx-2 rounded-lg bg-blue-400 px-2 py-1 text-lg font-semibold text-white" onClick={divis}>/</button>

            <br />
        </>
    )
}

export default Cinputs;