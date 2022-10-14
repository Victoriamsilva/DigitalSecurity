import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import { AboutUs } from "../Pages/AboutUs";
import CyberAttacks from "../Pages/CyberAttacks";
import FunFacts from "../Pages/FunFacts";
import Home from "../Pages/Home";
import ProtectYourBusiness from "../Pages/ProtectYourBusiness";
import ProtectYourself from "../Pages/ProtectYourself";

export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/protect-yourself" element={<ProtectYourself />}></Route>
        <Route path="/protect-your-business" element={<ProtectYourBusiness />}></Route>
        <Route path="/fun-facts" element={<FunFacts />}></Route>
        <Route path="/cyber-attacks" element={<CyberAttacks />}></Route>
      </Routes>
    </Router>
  );
}