import logo from './logo.svg';
import './App.css';
import About from './componets/about/About.jsx';
import Home from './componets/home/Home.jsx'
import Portfolio from './componets/portfolio/Portfolio.jsx';
import Resume from './componets/resume/Resume.jsx';
import Services from './componets/services/Services.jsx';
import Sidebar from './componets/sidebar/Sidebar.jsx';
import Testmonials from './componets/testimonials/Testmonials';
import Blog from './componets/blog/Blog';
import Contact from './componets/contact/Contact';
import Pricing from './componets/pricing/Pricing';

function App() {
  return (
    <>
    <Sidebar/>
    <main>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Pricing/>
      <Testmonials/>``
      <Blog/>
      <Contact/>

    </main>
    </>
  );
}

export default App;
