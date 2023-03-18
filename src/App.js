import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/love_nature" element={<Home />}></Route>
        <Route exact path="/" element={<h2>hello</h2>} />
        <Route path="/" element={<h2>hello2</h2>} />
        <Route index path="/" element={<h2>hello3</h2>} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
