import style from '../MainPage/MainPage.module.css'
import Description from "../../components/Description/Description";
function MainPage(props) {
    return (
        <div>
            <Description info={{title: "Title", description: "description"}}/>
        </div>
    );
}

export default MainPage;