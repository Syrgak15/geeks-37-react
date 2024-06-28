
import style from './userPage.modules.css'

function UserPage({ user, onDelete }) {
    return (
        <div className="userPage">
            <span>{user.name}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span>{user.phone}</span>
            <span>{user.website}</span>
            <button onClick={onDelete}>Удалить</button>
        </div>
    );
}

export default UserPage;