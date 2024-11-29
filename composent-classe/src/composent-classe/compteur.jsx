import React from 'react';
import Stagiaires from '../pratique/Stagiaires';

class Compteur extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    // il s'exécute aprés chaque render
    componentDidMount = ()=>{
        console.log('rendered!!!!!!!')
    }

    // il s'exécute aprés chaque modification du state
    componentDidUpdate = ()=>{
        console.log('state updated!!!!!!!')
    }


    // il s'exécute juste avant la dispraition du composant
    componentWillUnmount = ()=>{
        console.log('component unmounted!!!!!!!')
    }




    incrementer = ()=>{
        this.setState({...this.state,count:this.state.count + 1})
    }

    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementer} className="btn-primary p-2 text-white bg-red-900 rounded-md">incrementer</button>
                {this.state.count < 3 && <Stagiaires/>}
            </>
        )
    }
}

export default Compteur