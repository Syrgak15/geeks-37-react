import style from '../NewsPage/NewsPage.module.css'

function NewsPage(props) {
    return (
        <div>
            <h2 className={style.title}>Hello World</h2>
            <h3 className={style.subtitle}>This is my React App</h3>
            <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, quos?</p>
        </div>
    );
}

export default NewsPage;