import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
