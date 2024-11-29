import Etudiants from '../exercice2/Etudiants.jsx';
import Logo from './Logo.js';
import Nav from './Nav.js';
import Login from '../classeComponent/Login.jsx';


function Header(){
    let isLooged = true;                                                    //false
    let nom = "Hiba";

    return(<>
        {isLooged ? 
        <h1>Welcome {nom} !!! </h1>
        : <h1>Please logged in</h1>
        }

        {/* {isLooged &&
        <h1>Welcome {nom} !!! </h1>                                             //imken lina ndiro hadi hta hiya condition ila mab4inache ndiro else hite lewla khase darori else li hiya : mais hena kaykone 3adna le choix wache ndiroha ola la ila b4ina ndiro else kandiro !&
        } */}
        <Etudiants/>
        <Nav/>
        <Logo/>
        <Login/>
    </>)
    
}

export default Header
