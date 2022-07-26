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
} from "react-router-dom";
import NewCustomer from './Pages/Customers/NewCustomer';
import Customer from './Pages/Customers/Customer';
import NewOrder from './Pages/Orders/NewOrder';
import Order from './Pages/Orders/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Settings from './Pages/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Entry />} />
            {/* <Route path="Home" element={<Home />}/> */}
            <Route path="Dashboard" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path="Customers">
              <Route index element={
                <PrivateRoute>
                  <Customers />
                </PrivateRoute>} />
              <Route path="NewCustomer" element={
                <PrivateRoute>
                  <NewCustomer />
                </PrivateRoute>
              } />
              <Route path=":customerId" element={
                <PrivateRoute>
                  <Customer />
                </PrivateRoute>
              } />
            </Route>
            <Route path="Inventory" element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            } />
            <Route path="Orders">
              <Route index element={
                <PrivateRoute>
                  <Orders />
                </PrivateRoute>
              } />
              <Route path="NewOrder" element={
                <PrivateRoute>
                  <NewOrder />
                </PrivateRoute>} />
              <Route path=":orderId" element={
                <PrivateRoute>
                  <Order />
                </PrivateRoute>} />
            </Route>
            <Route path="Settings" element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
