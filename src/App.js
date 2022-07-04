import { Route, Routes } from "react-router";
import About from "./About/About";
import "./App.css";
import Banner from "./Banner/Banner";
import ConventionCenter from "./ConventionCenter/ConventionCenter";
import FruitDetails from "./FruitDetails/FruitDetails";
import Home from "./Home/Home";
import HomeButton from "./HomeButton";
import Instasohor from "./Instasohor/Instasohor";
import Manufracturer from "./Manufracturer/Manufracturer";
import Medical from "./Medical/Medical";
import MoneyMaster from "./MoneyMaster/MoneyMaster";
import PhoneHunter from "./PhoneHunter/PhoneHunter";
import Services from "./Services/Services";
import Header from "./Shared/Header";

function App() {
  return (
    <div className=" bg-slate-900">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="homebutton" element={<HomeButton></HomeButton>}></Route>
        <Route path="fruitss" element={<FruitDetails></FruitDetails>}></Route>
        <Route path="" element={<About></About>}></Route>
        <Route
          path="manufrac"
          element={<Manufracturer></Manufracturer>}
        ></Route>
        <Route path="medical" element={<Medical></Medical>}></Route>
        <Route path="money" element={<MoneyMaster></MoneyMaster>}></Route>
        <Route
          path="center"
          element={<ConventionCenter></ConventionCenter>}
        ></Route>
        <Route path="hunter" element={<PhoneHunter></PhoneHunter>}></Route>
        <Route path="influencer" element={<PhoneHunter></PhoneHunter>}></Route>
        <Route path="sohor" element={<Instasohor></Instasohor>}></Route>
      </Routes>
    </div>
  );
}

export default App;
