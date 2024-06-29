import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import style from './postPage.modules.css'

function PostsPage() {
    const {
        handleSubmit,
        register,
    } = useForm()

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedBody, setUpdatedBody] = useState('');
    const [updatedStatus, setUpdatedStatus] = useState(false);


    useEffect(() => {
        getPosts()
    }, []);


    async function getPosts () {
        const response = await fetch("http://localhost:8000/posts")
        const data = await response.json()
        setPosts(data)
    }

    async function submit(values) {
        const response = await axios.post("http://localhost:8000/posts", values)
        getPosts()
    }

    async function updatePost(id) {
        const data = {
            title: updatedTitle,
            body: updatedBody,
        };
        const response = await fetch(`http://localhost:8000/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        await getPosts();
    }

    async function updatePostStatus(id, status) {
        const data = {
            status: !status
        };
        const response = await fetch(`http://localhost:8000/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        await getPosts();
    }

    async function deletePost (id) {
        const response = await axios.delete(`http://localhost:8000/posts/${id}`)
        getPosts()
    }

    async function getOnePost (id) {
        const response = await axios.get(`http://localhost:8000/posts/${id}`)
        setPost(response.data)
    }

    return (
        <div>
            <h2>Posts list</h2>

            <form onSubmit={handleSubmit(submit)}>
                <input
                    type="text" {...register("title")}
                    placeholder="title"
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                />
                <textarea
                    cols="30"
                    rows="10" {...register("body")}
                    placeholder="body"
                    onChange={(e) => setUpdatedBody(e.target.value)}
                ></textarea>
                <button>create</button>
            </form>
            <ul>
                {
                    posts.length > 0 ?
                        posts.map(post => <li>
                            <input type="checkbox" checked={post.status} onChange={() => updatePostStatus(post.id, post.status)}/>
                            <span className={post.status&&'active'}>{post.title}</span>
                            <button onClick={() => deletePost(post.id)}>delete</button>
                            <button onClick={() => getOnePost(post.id)}>get more info</button>
                            <button onClick={()=>updatePost(post.id)}>UPDATE</button>
                        </li>)
                        :
                        <p>список пуст</p>
                }
            </ul>

            <ul>
                <li>
                    title: {post.title}
                </li>
                <li>
                    body: {post.body}
                </li>

            </ul>


        </div>
    );
}

export default PostsPage;
