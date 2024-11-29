import {useState,useEffect} from 'react';
import "./style.css";

function Article() {
  const [article,setArticle] = useState({
    id:"",
    idCategorie:"",
    designation:"",
    quantite:"",
    prix:"",
  });

  const [listArticles,setListArticles] = useState([]);

  const [categorie,setCategorie] = useState([]);

  const [couleurInput,setCouleurInput] = useState("");

  let sommePrix = 0

  function vider(){
    setArticle({
        id:"",
        idCategorie:"",
        designation:"",
        quantite:"",
        prix:"",
    })
  }

  function ajouter(){
    setListArticles ([...listArticles,article]);
    console.log(listArticles)
    vider();
  }

  function supprimer(){
    let newArticles = listArticles.filter(function(item){
      return item.id !== article.id
    })
    setListArticles([...newArticles]);
    vider();
  }

  function modify(){
    let newArticles = listArticles.map(function(item){
      if(item.id == article.id){
        item = article
      }
      return item
    })
    setListArticles([...newArticles]);
    vider();
  }

  useEffect(function(){
    setCategorie([{id:1,labelle:"Informatique"},
                  {id:2,labelle:"Gestion"},
                  {id:3,labelle:"Consommable"}
                ])
  },[])

  useEffect(function(){
    if(article.idCategorie == 1){
      setCouleurInput("bg-red-100");
    }else if(article.idCategorie == 2){
      setCouleurInput("bg-blue-100");
    }else if(article.idCategorie == 3){
      setCouleurInput("bg-green-100");
    }
  },[article.idCategorie])


  return (
    <>
      <div className="form-container">
        <h1 className="form-title">ADD A STUDENT2</h1>
        <div className={`${couleurInput} form`}>
          <input
            type="text"
            name="id"
            required
            placeholder="Enter the ID"
            value={article.id}
            onChange={(e)=>setArticle({...article,id:e.target.value})}
          />
          <input
            type="text"
            name="fname"
            required
            placeholder="Entrer designation"
            value={article.designation}
            onChange={(e)=>setArticle({...article,designation:e.target.value})}
          />

          <select onChange={(e)=>setArticle({...article,idCategorie:e.target.value})}>
            {categorie.map(function(item,index){
              return <option value={item.id} key={index} >{item.labelle}</option>
            })}
            
          </select>

          <input
            type="text"
            name="lname"
            required
            placeholder="Entrer la quantite"
            value={article.quantite}
            onChange={(e)=>setArticle({...article,quantite:e.target.value})}
          />
          <input
            type="number"
            name="age"
            required
            placeholder="Entrer prix"
            value={article.prix}
            onChange={(e)=>setArticle({...article,prix:e.target.value})}
          />
          <button className="btn save-btn" onClick={ajouter}>
            SAVE
          </button>
          <button
          
          >
            MODIFIER
          </button>
        </div>
      </div>

      <div className="table-container">
        {/* <h1 className="table-title">STUDENT LIST</h1> */}
        <table className="student-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Designation</th>
              <th>Quantite</th>
              <th>Prix</th>
              <th>Prix Totale</th>
            </tr>
          </thead>
          <tbody>
            {listArticles.map(function(item,index){
              let prixTotal = Number(item.quantite) * Number(item.prix)

              sommePrix += prixTotal;

              let couleurQuantite = 'black';
              if(item.quantite <= 5){
                couleurQuantite = 'red'
              }else if(item.quantite > 5 && item.quantite <=20){
                couleurQuantite = 'blue';
              }else if(item.quantite > 20){
                couleurQuantite = 'green';
              }

              return(
                <tr key={index} onClick={()=> setArticle({...item})} className={`${item.id == article.id ? 'bg-red-100' : 'bg-white'}`}>
                  <td>{item.id}</td>
                  <td>{item.designation}</td>
                  <td style={{color:couleurQuantite}}>{item.quantite}</td>
                  <td>{item.prix}</td>
                  <td>{prixTotal}</td>
                </tr>
              )
              
            })}
            
              
            
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2" id="best">Somme</th>
              <td id="best-note" colSpan="3">{sommePrix}</td>
            </tr>
          </tfoot>
        </table>

      </div>
      <button className="btn modify-btn" onClick={modify}>Modify</button>
      <button className="btn delete-btn" onClick={supprimer}>Remove</button>
    </>
  );
}

export default Article;
