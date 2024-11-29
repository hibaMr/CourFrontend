import { useEffect, useState } from "react"
import axios from "axios";

function Produits(){

    const [produits,setProduits] = useState([]);

    

        /// I-normale

            // 1- Async

                // useEffect(function(){
                //     async function getProduits(){
                //         const data = await fetch("https://jsonplaceholder.typicode.com/users");
                //         const produitsData = await data.json();
                //         setProduits(produitsData);
                //     }
                //     getProduits();
                // },[])

            // 2- fetch

                // useEffect(function(){
                //     //API
                //     fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
                //         return response.json()
                //     }).then(function(data){
                //         setProduits(data)
                //     })
                // },[])
        

        /// II- Axios

            // 1- Async

                // useEffect(function(){
                //     async function getProduits(){
                //         const ProduitData = await axios.get("https://jsonplaceholder.typicode.com/users")
                //         setProduits(ProduitData.data)
                //     }
                //     getProduits();
                // },[])

            // 2- fetch

                useEffect(function(){
                   //API
                   axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
                       setProduits(response.data)
                    })
                },[])


    return(
        <>
            {produits.map(function(item,index){
                return(
                    <ul key={index}>
                        <li>{item.nom}</li>
                    </ul>
                )
            })}
        </>
    )
}
export default Produits