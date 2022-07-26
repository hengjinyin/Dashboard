import Cards from "../Cards/Cards"
import BasicTable from "../Table/BasicTable"
import "./Dashboard.scss"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Cards/>
            <h2>Recent Orders</h2>
            <BasicTable/>
        </div>
    )
}

export default Dashboard