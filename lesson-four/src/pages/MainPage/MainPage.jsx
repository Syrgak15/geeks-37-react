import {useState,useEffect} from 'react'

function MainPage(props) {
    const [count, setCount]= useState(0)
    const [update,setUpdate] = useState(false)
    useEffect(()=>{
        console.log('поменялось состояние')
    },[count,update])
    return (
        <div>
            <h2>Main Page</h2>
            <button onClick={()=> setCount(count + 1 )}>+</button>
            <button onClick={()=> setUpdate(!update)}>Update</button>
            <button onClick={()=> console.log(count)}>show count</button>
        </div>
    );
}

export default MainPage;