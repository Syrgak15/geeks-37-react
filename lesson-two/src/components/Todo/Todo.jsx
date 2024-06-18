import style from '../../pages/TodosPage/TodosPage.module.css'


function Todo({info}) {
    return (
        <div>
                <h2 className={style.info}>{info}</h2>
        </div>
    );
}

export default Todo;