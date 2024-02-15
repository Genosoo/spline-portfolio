import Sidebar from "./components/sidebar/Sidebar";
import Blobs from './3D/Blobs'
import Navbar from "./components/navbar/Navbar";
import './App.css'
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";

export default function App() {
  return (
    <div className="AppContainer">
      <Blobs />
      <div className="layoutContainer">
        <Sidebar />
        
        <div className="contentContainer">
            <Navbar />
             <Home />
             <About />
             <Blog />
             <Project />
             <Contact />
        </div>
      </div>
    </div>
  )
}
