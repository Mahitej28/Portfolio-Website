import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Sociallinks from './Components/Sociallinks';
import Contacts from './Components/Contacts'
import Blog from './Components/Blog';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Sociallinks/>
      <Blog/>
      <Contacts/>
    </div>

  );
}

export default App;
