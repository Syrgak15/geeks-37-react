import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import styles from './MainPage.modules.css';
import ModalPage from "../ModalPage/ModalPage";
import TabelPage from "../TabelPage/TabelPage";


function MainPage() {
    const { handleSubmit, register } = useForm();
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');


    useEffect(() => {
        getPosts()
    }, []);


    async function getPosts(){
        const response = await fetch('http://localhost:8000/users')
        const data = await response.json()
        setPosts(data)
    }

    async function submit(value){
        const response = await fetch('http://localhost:8000/users',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(value)
        })
        getPosts()
        setModalMessage('Пользователь успешно создан')
        setIsModalOpen(true)


    }

    async function deleteUser(id){
        const response=await fetch(`http://localhost:8000/users/${id}`,{
            method:'DELETE',

        })
        getPosts()
        setModalMessage('Пользователь успешно удален');
        setIsModalOpen(true)
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className='mainPage'>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder='Name' {...register('name')} />
                <input type="text" placeholder="Email" {...register('email')} />
                <input type="text" placeholder="Username" {...register('username')} />
                <button className='btnCreate'>Create</button>
            </form>
            <TabelPage/>
            <div className='list'>
                <ul>
                    {posts.length > 0 ? (
                        posts.map((post, index) => <li key={index}>
                            <p>{post.name}</p>
                            <p>{post.email}</p>
                            <p>{post.username}</p>
                            <button className='btnDelete' onClick={() => deleteUser(post.id)}>Delete</button>
                        </li>)
                    ) : (
                        <p>Список пуст</p>
                    )}
                </ul>
            </div>
            {isModalOpen && (
                <div className="overlay">
                    <ModalPage message={modalMessage} onClose={handleCloseModal}/>
                </div>
            )}
        </div>
)
    ;
}

export default MainPage