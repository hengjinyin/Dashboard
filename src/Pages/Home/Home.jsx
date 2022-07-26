import React from 'react'
import "./Home.scss"
import Dashboard from '../../components/Dashboard/Dashboard';
import DefaultLayout from '../../Layout/DefaultLayout';

const Home = () => {
    return (
        <DefaultLayout>
            <Dashboard />
        </DefaultLayout>
    )
}

export default Home