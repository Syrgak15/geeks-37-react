import style from '../Description/Description.module.css'

function Description({info}) {
    return (
        <div>
                <h1 className={style.title}>{info.title}</h1>
                <span className={style.description}>{info.description}</span>
        </div>
    );
}

export default Description;