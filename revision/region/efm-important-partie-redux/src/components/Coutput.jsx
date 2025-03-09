import { useSelector } from "react-redux"

function Coutput(){
    const opiratin = useSelector((state)=>state.opiration);
    return(
        <>
            <span>{opiratin.val1}</span> <span> </span> <span>{opiratin.ops}</span> <span> </span> <span>{opiratin.val2}</span>  <span> </span> <span>=</span>  <span> </span> <span>{opiratin.rslt}</span>
        </>
    )
}

export default Coutput