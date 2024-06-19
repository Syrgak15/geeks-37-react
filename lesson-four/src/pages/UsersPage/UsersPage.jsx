import {useState} from 'react'


function UsersPage(props) {
    const[users,setUsers]=useState([])
    return (
        <div>
            <button onClick={()=>setUsers(['Anna','Nick','Sam'])}>add 3 users</button>
            {
                users.map(el => <p>{el}</p>)
            }
        </div>
    );
}

export default UsersPage;