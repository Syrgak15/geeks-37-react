import style from '../AboutPage/AboutPage.module.css'
import Description from "../../components/Description/Description";


function AboutPage(props) {
    return (
        <div>
          <Description info={{title: "Title 2", description: "description 2"}}/>
        </div>
    );
}

export default AboutPage;