import {useState} from "react";
import Modal from "../../components/Modal/Modal";


function PostsPage(props) {
    const[modal,setModal]= useState(false)

    return (
        <div>
            <button onClick={()=>setModal(!modal)}>show modal</button>
            {
                modal? <Modal/> : ""
            }
        </div>
    );
}

export default PostsPage;