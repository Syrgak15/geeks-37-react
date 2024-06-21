
function Post({value,editUser,id,disabled}) {
    return (
        <div>
            {value}
            <button disabled={!disabled} onClick={()=> editUser(id) }>Change</button>
        </div>
    );
}

export default Post;