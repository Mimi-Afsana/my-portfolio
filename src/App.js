import { Route, Routes } from "react-router";
import About from "./About/About";
import "./App.css";
import Banner from "./Banner/Banner";
import FruitDetails from "./FruitDetails/FruitDetails";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Header from "./Shared/Header";

function App() {
  return (
    <div className=" bg-slate-900">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="fruitss" element={<FruitDetails></FruitDetails>}></Route>
        <Route path="services" element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}

export default App;
