import './App.css';
import Home from './Pages/Home/Home';
// import Dashboard from './components/Dashboard/Dashboard';
// import RightSide from './components/RightSide/RightSide';
// import Sidebar from './components/Sidebar/Sidebar';
import Entry from './Pages/Entry/Entry';
import Customers from './Pages/Customers/Customers';
import Inventory from './Pages/Inventory/Inventory';
import Orders from './Pages/Orders/Orders';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NewCustomer from './Pages/Customers/NewCustomer';
import Customer from './Pages/Customers/Customer';
import NewOrder from './Pages/Orders/NewOrder';
import Order from './Pages/Orders/Order';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Entry />}/>
            <Route path="Home" element={<Home />}/>
            <Route path="Customers">
              <Route index element={<Customers />}/>
              <Route path="NewCustomer" element={<NewCustomer />} />
              <Route path=":customerId" element={<Customer />} />
            </Route>
            <Route path="Inventory" element={<Inventory />}/>
            <Route path="Orders">
              <Route index element={<Orders />}/>
              <Route path="NewOrder" element={<NewOrder />} />
              <Route path=":orderId" element={<Order />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
