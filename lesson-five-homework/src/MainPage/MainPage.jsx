import {useRef,useState} from 'react';
import Post from "../Post/Post";

function MainPage() {
    const [users,setUsers] = useState([])
    const [name,setName]= useState('')

    function handleChange(e){
        setName(e.target.value)
    }

    function createUser(){
       setUsers([...users,name])
        setName("")
    }
    function editUser(id){
        const newName = [...users]
        newName[id] = name
        setUsers(newName)
        setName("")
    }
    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={name} placeholder='Write your name' onChange={(e)=>handleChange(e)}/>
                <button type='button' disabled={!name} onClick={createUser}>Add</button>
            </form>
            <h3>Current users:</h3>
            {users.length > 0 ? (
                    <ul>
                        {users.map((user, index) => (
                           <Post value={user}
                                 disabled={name}
                                 editUser={editUser}
                                 key={index}
                                 id={index}
                           />
                        ))}
                    </ul>
                ):
                <span>Список пуст</span>
            }
        </div>
    )
}


export default MainPage;