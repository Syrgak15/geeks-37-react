import User from "../../components/User/User";


const users = ['anna','nina','nick']

function UsersPage(props) {
    return (
        <div>
            <h2>UsersPage</h2>
            {users.map((user,index) => <User name={user}/>)}
        </div>
    );
}

export default UsersPage;