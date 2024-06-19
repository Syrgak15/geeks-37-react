import {useState} from "react";
import MainPage from "../MainPage/MainPage";
import ErrorPage from "../ErrorPage/ErrorPage";

function PromptPage(props) {
    const askName = prompt('What is your name?')
    const askLastName = prompt('What is your last name?')
    const[name,setName] = useState(askName)
    const[lastName, setLastName] = useState(askLastName)
    if(name === "John" && lastName === "Johns"){
        return (
            <MainPage user={{name:name, lastName:lastName}}/>
        )
    }
    return (
        <ErrorPage user={{name:name, lastName:lastName}}/>
    )

}

export default PromptPage;