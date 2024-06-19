
function ErrorPage({user}) {
    return (
        <div>
            <h1>"Тебе сюда нельзя - {user.name} {user.lastName}"</h1>
        </div>
    );
}

export default ErrorPage;