import "./css/App.css";
import "./css/Dashboard.css";
import "./css/Inventory.css";
import "./css/Cart.css";
import "./css/Reports.css";
import "./css/Suppliers.css"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Cart from "./components/Cart";
import Reports from "./components/Reports";
import ManageStore from "./components/ManageStore";
import Suppliers from "./components/Suppliers";
import Reports_user from "./components/Reports_user";
import Reports_transaction from "./components/Reports_transaction";
function App(){
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/Inventory" element={<Inventory/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
          <Route exact path="/Reports" element={<Reports/>}/>
          <Route exact path="/Suppliers" element={<Suppliers/>}/>
          <Route exact path="/Manage-Store" element={<ManageStore/>}/>
          
          <Route exact path="/Reports-User" element={<Reports_user/>}/>
          <Route exact path="/Reports-Transaction" element={<Reports_transaction/>}/>
        </Routes>
        
      
      </Router>
    </div>
    
  )

}
export default App