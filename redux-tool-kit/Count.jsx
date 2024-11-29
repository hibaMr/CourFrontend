import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./features/counter/countSlice"
import { useState } from "react"

function Count(){

    const [selectedN,setSelectedN] = useState(0)

    const dispatch = useDispatch()

    const nombreState = useSelector((state)=>state.counter.nombre)

    console.log(selectedN)

    console.log(nombreState)

    function incrementHandel(){
        dispatch(increment())
    }

    function decrementHandel(){
        dispatch(decrement())
    }

    function incrementByAmountHandel(){
        dispatch(incrementByAmount(selectedN))
    }

    return (
        <>
            <button onClick={incrementHandel}>incement</button>    
            <button onClick={decrementHandel}>decrement</button>
            <input type="number" onChange={(e)=> setSelectedN(Number(e.target.value))} />
            <button onClick={incrementByAmountHandel}>increment by Amount</button>
                
            <p>number is : {nombreState}</p>
        </>
    )
}

export default Count