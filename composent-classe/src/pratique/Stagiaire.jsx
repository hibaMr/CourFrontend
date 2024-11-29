import React from 'react';
import './style.css';

class Stagiaire extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            stagiaire:{id:"",nom:"",prenom:"",groupe:""},
            stagiaires:[]
        }
    }

    incrementer = ()=>{
        this.setState({stagiaires:{...this.state.stagiaires,...this.state.stagiaire}})
        console.log(this.state.stagiaires);
    }

    render(){
        return(
            <>
                
                <form  className="mt-6" id="form">
                    <div className="mb-4">
                        <label htmlFor="Id" className="block text-sm font-medium text-gray-700">
                        ID
                        </label>
                        <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,id:e.target.value}})}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                        Nom
                        </label>
                        <input 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,nom:e.target.value}})}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Lastname" className="block text-sm font-medium text-gray-700">
                        Prenom
                        </label>
                        <input 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,prenom:e.target.value}})}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Groupe
                        </label>
                        <input 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e)=>this.setState({stagiaire:{...this.state.stagiaire,groupe:e.target.value}})}
                        />
                    </div>
                    
                </form>
                <button onClick={this.incrementer} className="btn-primary p-2 text-white bg-red-900 rounded-md">incrementer</button>


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
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              
            
              
            
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2" id="best">Somme</th>
              <td id="best-note" colSpan="3"></td>
            </tr>
          </tfoot>
        </table>

      </div>
      <button className="btn modify-btn">Modify</button>
      <button className="btn delete-btn">Remove</button>
    
                
            </>
        )
    }
}

export default Stagiaire