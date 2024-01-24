import {Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import AdminPage from "./Pages/Admin";
import SettingPage from "./Pages/Setting";
import DashboardPage from "./Pages/Dashboard";
import StorePage from "./Pages/Store";
import BuyOrders from "./Pages/BuyOrders";
import SellOrders from "./Pages/SellOrders";
import { UserProvider } from "./Providers/UserContext";
import SignUp from "./Pages/SignUp";

//App component 
const App = () => {
  return (
    <UserProvider>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/" element={<DashboardPage />} />
      <Route path="/buyorder" element={<BuyOrders />} />
      <Route path="/sellorder" element={<SellOrders />} />
      <Route path="/profile" element={<AdminPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/store"  element={<StorePage />} />
    </Routes>
    </UserProvider>
  );
}

export default App;
