import React, { useState, useEffect, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer";


const userData = [
    { name: "Jeevan" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" },
];
function App() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        //axios
        //setUsers(res.data)
        setUsers(userData)
    }, [])
    const inputRef = useRef()
    const handleChange = ( e) => {
        const {name, checked} = e.target;
        if ( name === "allSelect") {
            let tempUser = users.map((user) => {
                return {...user, isChecked: checked}
            })
            setUsers(tempUser)
        } else {
            let tempUser = users.map((user) => user.name === name ? {...user, isChecked: checked} : user )
            setUsers(tempUser)
        }
        console.log(checked)
    }
    
    return (
        <div className="container my-4" style={{width: 400}}>
            <form className="form">
                <h3>Select Usss</h3>
                <div className="form-check">
                    <label className="form-check-label ms-2">
                            
                        <input
                            type="checkbox" 
                            className="form-check-input check-all" 
                            name="allSelect"
                            checked={users.filter(user => user?.isChecked !== true).length < 1}
                            onChange={handleChange}
                        />
                        All Select
                    </label>
                </div>
                {users.map((user, index) => (
                     <div className="form-check" key={index}>
                        <input
                            
                            ref={inputRef}
                            type="checkbox" 
                            className="form-check-input" 
                            name={user.name} 
                            checked={user?.isChecked || false}
                            onChange={handleChange}
                        />
                        <label className="form-check-label ms-2" >{user.name}</label>
                     </div>
                ))}
            </form>
            <Footer />
        </div>
    )
}

export default App;
