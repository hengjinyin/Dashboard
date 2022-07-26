import "./DefaultLayout.scss"
import RightSide from '../components/RightSide/RightSide';
import Sidebar from '../components/Sidebar/Sidebar';

const DefaultLayout = ({children}) => {
    return (
        <div className='defaultLayout'>
            <div className="appGlass">
                <Sidebar />
                {children}
                <RightSide />
            </div>
        </div>
    )
}

export default DefaultLayout