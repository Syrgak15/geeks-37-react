import { useForm } from 'react-hook-form';
import style from './MainPage.modules.css';
import TablePage from "../TablePage/TablePage";
import { useState } from "react";
import UserPage from "../UserPage/UserPage";

function MainPage() {
    const [user, setUser] = useState([]);
    const [inputValues, setInputValues] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    };

    const submit = (value) => {
        setUser([...user, value]);
        setInputValues({
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
        });
    };

    function clearTable(){
        setUser([])
    }

    const handleDelete = (index) => {
        const updatedUsers = [...user];
        updatedUsers.splice(index, 1);
        setUser(updatedUsers);
    };

    return (
        <div>
            <h1>Inputs:</h1>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <label>
                    <input
                        type="text"
                        placeholder='name'
                        name="name"
                        value={inputValues.name}
                        {...register("name", { required: true })}
                        onChange={handleChange}
                    />
                    {errors.name && <small>Введите имя</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder='username'
                        name="username"
                        value={inputValues.username}
                        {...register("username", { required: true })}
                        onChange={handleChange}
                    />
                    {errors.username && <small>Введите фамилию</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder='email'
                        name="email"
                        value={inputValues.email}
                        {...register("email", { required: true })}
                        onChange={handleChange}
                    />
                    {errors.email && <small>Введите email</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder='phone'
                        name="phone"
                        value={inputValues.phone}
                        {...register("phone", { required: true })}
                        onChange={handleChange}
                    />
                    {errors.phone && <small>Введите номер</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder='website'
                        name="website"
                        value={inputValues.website}
                        {...register("website")}
                        onChange={handleChange}
                    />
                </label>
                <button>Создать</button>
                <button type='button' onClick={clearTable}>Очистить таблицу</button>
            </form>
            {user.length > 0 ? (
                <TablePage>
                    <ul>
                        {user.map((item, index) => (
                            <UserPage key={index} user={item}  onDelete={() => handleDelete(index)} />
                        ))}
                    </ul>
                </TablePage>
            ) : (
                <span>Список пуст</span>
            )}
        </div>
    );
}

export default MainPage;
