import { useState } from "react";

function EtudiantForm(){
    const [id,setId] = useState(1);
    const [firstName,setFisrtName] = useState('');
    const [lastName,setLastName] = useState('');
    const [age,setAge] = useState(0);
    const [etudiants,setEtudiants] = useState([]);
    const [selectedID,setSelectedID] = useState();
    const [selectedItem,setSelectedItem] = useState({
        id:'',
        firstName:'',
        lastName:'',
        age:''
    });

    function handleSave(e){
        e.preventDefault();
        setEtudiants([...etudiants,{id:id,firstName:firstName,lastName:lastName,age:age}])

    }
    function handleDelete(item){
        let newEtudiants = etudiants.filter(function(element){
            return element.id !==  item.id
            }
        )
        setEtudiants([...newEtudiants])
    }
    function handleDeleteCheck(){
        let newEtudiants = etudiants.filter(function(element){
            return element.id !==  selectedID 
            }
        )
        setEtudiants([...newEtudiants])
    }

    function handleModifyCheck(e){
        e.preventDefault();
        let newEtudients = etudiants.map(function(item){
            if(item.id === id){
                item.firstName = firstName;
                item.lastName = lastName;
                item.age = age;
            }
            return item;
        })
        setEtudiants(newEtudients)
    }



    return(
        <>
            <div className="mt-8 mb-8 p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">ADD A STUDENT</h1>
            <form className="flex flex-col space-y-4" >
            <input
                    type="text"
                    name="id"
                    required="required"
                    placeholder="Enter the ID"
                    className="p-2 border border-gray-300 rounded"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    
                />
                <input
                    type="text"
                    name="fname"
                    required="required"
                    placeholder="Enter the first name"
                    className="p-2 border border-gray-300 rounded"
                    value={firstName}
                    onChange={(e) => setFisrtName(e.target.value)}
                    
                />
                <input
                    type="text"
                    name="lname"
                    required="required"
                    placeholder="Enter the last name"
                    className="p-2 border border-gray-300 rounded"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}

                    
                />
                <input
                    type="number"
                    name="age"
                    required="required"
                    placeholder="Enter the age"
                    className="p-2 border border-gray-300 rounded"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}

                    
                />
                
                <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    onClick={handleSave}
                >
                    SAVE
                </button>
                <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    onClick={handleModifyCheck}
                >
                    MODIFY
                </button>
            </form>
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">STUDENT LIST</h1>
                <table className="min-w-full table-auto bg-white border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                        <th className="px-4 py-2 text-gray-600 font-semibold uppercase text-sm">check</th>
                            <th className="px-4 py-2 text-gray-600 font-semibold uppercase text-sm">First Name</th>
                            <th className="px-4 py-2 text-gray-600 font-semibold uppercase text-sm">Last Name</th>
                            <th className="px-4 py-2 text-gray-600 font-semibold uppercase text-sm">Age</th>
                            <th className="px-4 py-2 text-gray-600 font-semibold uppercase text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {etudiants.map((item) => (
                            <tr key={item.id} onClick={()=>{                
                                setId(item.id);
                                setFisrtName(item.firstName);
                                setLastName(item.lastName);
                                setAge(item.age);}}>


                                <td><input type="checkbox" onClick={(e) => {
                                    if(e.target.checked === true){
                                        setSelectedID(item.id)
                                        //UPDATE SELECTED ITEM
                                        setSelectedItem({...item})
                                        setId(item.id)
                                        setFisrtName(item.firstName)
                                        setLastName(item.lastName)
                                        setAge(item.age)

                            
                                    }
                                }}  /></td>
                                <td className="border px-4 py-2">{item.firstName}</td>
                                <td className="border px-4 py-2">{item.lastName}</td>
                                <td className="border px-4 py-2">{item.age}</td>
                                {/* <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2"></td> */}
                                <td className="border px-4 py-2 flex justify-center">
                                    <button
                                        className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 mr-2"
                                    >
                                        Modify
                                    </button>
                                    <button //SUPPRESSION
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        onClick={() => handleDelete(item)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                            ))}
                                                                    
                    </tbody>
                </table>
                <div className="flex-row">
                    <button //SUPPRESSION
                            className="bg-red-800 text-white px-3 py-1 rounded hover:bg-red-600 m-4"
                            onClick={handleDeleteCheck}
                    >
                        DELETE
                    </button>

                    <button //MODIFICATION
                            className="bg-green-800 text-white px-3 py-1 rounded hover:bg-red-600"
                            onClick={handleModifyCheck}
                    >
                        MODIFY
                    </button>
                </div>
                
            </div>
        </>
    )  
}

export default EtudiantForm;