import React from 'react'
import "./Home.scss"
import Dashboard from '../../components/Dashboard/Dashboard';
import RightSide from '../../components/RightSide/RightSide';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='home'>
            <div className="appGlass">
                <Sidebar />
                <Dashboard />
                <RightSide />
            </div>
        </div>
    )
}

export default Home