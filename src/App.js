import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SetMediaMessage from "./components/SetMediaMessage";
import Settings from "./components/Settings";
import AutocallMessage from "./components/AutocallMessage";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Shareapp from "./components/Shareapp";

//yyy
import Register from "./components/Register";
import CorporateUser from "./components/CorporateUser";
import SingleUser from "./components/SingleUser";
import "./App.css";
import BlockNumber from "./components/BlockNumber";
import ProtectedRoute from "./components/ProtectedRoute";

//dailybanner
import DailyBanner from "./components/DailyBanner";
import FestivalGraphics from "./components/FestivalGraphics";
import FestivalReels from "./components/FestivalReels";
import CategoryPage from "./components/CategoryPage";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}></Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="/autocall" element={<AutocallMessage />} />
      <Route path="/setmedia" element={<SetMediaMessage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Login />} />

      <Route path="/shareapp" element={<Shareapp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/singleuser" element={<SingleUser />} />
      <Route path="/corporateuser" element={<CorporateUser />} />
      <Route path="/blocknumber" element={<BlockNumber />} />

      {/* daily banner */}
      <Route path="/dailybanner" element={<DailyBanner />} />

      <Route path="/category/:type" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
