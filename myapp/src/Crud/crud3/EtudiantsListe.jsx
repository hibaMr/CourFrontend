function EtudiantsListe({etudiants, setId, setFirstName, setLastName, setAge, handleSupprimer}){
    
    return (
        <>
            <div className="table-container">
        {/* <h1 className="table-title">STUDENT LIST</h1> */}
        <table className="student-table">
          <thead>
            <tr>
              <th>Check</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {etudiants.map((item) => (
              <tr key={item.id} onClick={()=>{                
                setId(item.id);
                setFirstName(item.firstName);
                setLastName(item.lastName);
                setAge(item.age);}}>
                <td >
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setId(item.id);
                        setFirstName(item.firstName);
                        setLastName(item.lastName);
                        setAge(item.age);
                      }
                    }}
                  />
                </td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <button className="btn modify-btn"
                    
                  >Modify</button>
                  <button
                  onClick={handleSupprimer}
                    className="btn delete-btn"
                  >
                    Remove
                  </button>
        </>
    )
}

export default EtudiantsListe