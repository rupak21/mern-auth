import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Sigin from "./pages/Sigin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Header from "./Components/Header";

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<Sigin />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  
  
  </BrowserRouter>;
    

}
