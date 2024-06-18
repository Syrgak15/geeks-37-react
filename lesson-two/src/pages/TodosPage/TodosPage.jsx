import Todo from "../../components/Todo/Todo";

const toDos = ["todo 1", "todo 2", "todo 3"]

function TodosPage(props) {
    return (
        <div>
            {
                toDos.map((todo, index) => (
                    <Todo key={index} info={todo}/>
                ))
            }
        </div>
    );
}

export default TodosPage;