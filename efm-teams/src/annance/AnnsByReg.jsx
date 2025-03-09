import { useState } from "react";
import { useSelector } from "react-redux";

function AnnsByReg(){

    const annonces = useSelector((state)=>state.annonces);
    const regions = useSelector((state)=>state.regions)
    const _annonces = []

    const [idSelect,setIdSelect] = useState();
    
    annonces.map(function(item){
        if(item.regid == idSelect){
            return item
        }
        _annonces = [..._annonces,{...item}]
     
    })
    

    console.log(_annonces)

    return(
       <>
       <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Consulter les annonces par région</h2>
      
      <select className="w-full p-2 border rounded-md" onChange={(e)=>setIdSelect(e.target.value)}>
        <option value="">-- Choisir une région --</option>
        {regions.map(function(item,index){
            return(
                <option value={item.regid} key={index}>{item.regnom}</option>
            )
            
        })}
        
      </select>

      <div className="mt-4">
        <ul className="space-y-3">
            
                
                
          <li className="p-4 border rounded-md shadow-sm bg-gray-50">
            <h3 className="font-semibold"></h3>
            <p className="text-sm text-gray-600"></p>
            <p className="text-sm text-blue-500"></p>
          </li>
          
        </ul>
      </div>
      </div>
       </>
    )
}
export default AnnsByReg;