
import style from './TablePage.modules.css'
import UserPage from "../UserPage/UserPage";

function TablePage({children}) {
    return (
        <div className='tablePage'>
            {children}
        </div>
    );
}

export default TablePage;