import {useRef,useState} from 'react';

function MainPage() {
    const [users,setUsers] = useState([])
    const inputRef = useRef(null)
    const [newUsers,setNewUsers] = useState([])

    function createUser(){
        const userName = inputRef.current.value
        if(userName!== "" ) {
            setUsers([...users, userName])
            inputRef.current.value = ''
        }
    }
    function editUser(){
        console.log(users)

    }



    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder='Write your name' ref={inputRef}/>
                <button type='button' onClick={createUser}>Add</button>
            </form>
            <h3>Current users:</h3>
            {users.length > 0 ? (
                    <ul>
                        {users.map((user, index) => (
                            <li key={index} style={{padding:"10px"}}>{user}
                                <button style={{marginLeft:"20px"}} onClick={editUser}>Change</button>
                            </li>
                        ))}
                    </ul>
                ):
                <span>Список пуст</span>
            }
        </div>
    )
}


export default MainPage;