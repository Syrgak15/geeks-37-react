import style from './ModalPage.modules.css'

function ModalPage({ message, onClose }) {
    return (
        <div className='modal'>
            <div className='modalContent'>
                <h2>{message}</h2>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
}

export default ModalPage;