import { useState } from "react";
import "./style.css";
import EtudiantsListe from "./EtudiantsListe";

function EtudiantForm() {
  const [id, setId] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [etudiants, setEtudiants] = useState([]);
  const [selectedID, setSelectedID] = useState();
  const [selectedItem, setSelectedItem] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  function handleSave(e) {
    e.preventDefault();
    setEtudiants([...etudiants, { id, firstName, lastName, age }]);
  }

  function handleDelete(item) {
    let newEtudiants = etudiants.filter(
      (element) => element.id !== item.id
    );
    setEtudiants([...newEtudiants]);
  }

  function handleUpdate(){
    let newEtudiants = etudiants.map(function(item){
      if(item.id === id){
        item.firstName = firstName;
        item.lastName = lastName;
        item.age = age;
      }
      return item
      
    })
    setEtudiants(newEtudiants)
  }

  function handleSupprimer() {
    let newEtudiants = etudiants.filter(
      (element) => element.id !== id
    );
    setEtudiants([...newEtudiants]);
  }



  return (
    <>
      <div className="form-container">
        <h1 className="form-title">ADD A STUDENT2</h1>
        <div className="form">
          <input
            type="text"
            name="id"
            required
            placeholder="Enter the ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            name="fname"
            required
            placeholder="Enter the first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="lname"
            required
            placeholder="Enter the last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="number"
            name="age"
            required
            placeholder="Enter the age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={handleSave} className="btn save-btn">
            SAVE
          </button>
          <button
            type="button"
            className="btn display-btn"
            onClick={(e) => {
              e.preventDefault();
              console.log(etudiants);
            }}
          >
            AFFICHER
          </button>
          <button
          onClick={handleUpdate}
          >
            MODIFIER
          </button>
        </div>
      </div>

      <EtudiantsListe etudiants = {etudiants} setId = {setId} setFirstName = {setFirstName} setLastName = {setLastName} setAge = {setAge} handleSupprimer = {handleSupprimer} />
    </>
  );
}

export default EtudiantForm;
