import './style.css';
import React from 'react';

class Stagiaires extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            stagiaire:{id:"",nom:"",prenom:"",age:"",groupe:""},
            listStagiaires:[]
        }
    }

    ajouter = ()=>{
        this.setState({listStagiaires:[...this.state.listStagiaires,{...this.state.stagiaire}]})
    }

    supprimer = ()=>{
        let newStagiaires = this.state.listStagiaires.filter((item)=>{
            return item.id !== this.state.stagiaire.id
        })
        this.setState({listStagiaires:[...newStagiaires]});
    }

    modify = ()=>{
        let newStagiaires = this.state.listStagiaires.map((item)=>{
            if(item.id == this.state.stagiaire.id){
                item = {...this.state.stagiaire}
            }
            return item
        })
        this.setState({listStagiaires:[...newStagiaires]})
    }


    render(){
        return(
            <>
                
                <form  className="mt-6" id="form">
                    <div className="mb-4">
                        <label htmlFor="Id" className="block text-sm font-medium text-gray-700">
                        ID
                        </label>
                        <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={this.state.stagiaire.id} onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,id:e.target.value}})} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                        Nom
                        </label>
                        <input 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={this.state.stagiaire.nom} onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,nom:e.target.value}})}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Lastname" className="block text-sm font-medium text-gray-700">
                        Prenom
                        </label>
                        <input 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={this.state.stagiaire.prenom} onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,prenom:e.target.value}})}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Age
                        </label>
                        <input 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={this.state.stagiaire.age} onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,age:e.target.value}})}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Groupe
                        </label>
                        <input 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={this.state.stagiaire.groupe} onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,groupe:e.target.value}})}
                        />
                    </div>
                    
                </form>
                <button className="btn-primary p-2 text-white bg-red-900 rounded-md" onClick={this.ajouter}>Ajouter</button>


                <div className="table-container">
        {/* <h1 className="table-title">STUDENT LIST</h1> */}
        <table className="student-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Age</th>
              <th>Groupe</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listStagiaires.map((item,index)=>{
                return(
                    // <tr key={index} onClick={()=>this.setState({stagiaire:{...item}})}>
                    <tr key={index} onClick={() => this.setState({ stagiaire: { ...item } })}>
                        <td>{item.id}</td>
                        <td>{item.nom}</td>
                        <td>{item.prenom}</td>
                        <td>{item.age}</td>
                        <td>{item.groupe}</td>
                    </tr>
                )
                
            })}          
              
            
              
            
          </tbody>
        </table>

      </div>
      <button className="btn modify-btn" onClick={this.modify}>Modify</button>
      <button className="btn delete-btn" onClick={this.supprimer}>Remove</button>
    
                
            </>
        )
    }
}

export default Stagiaires