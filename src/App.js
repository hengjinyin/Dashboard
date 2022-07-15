import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <Dashboard/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
