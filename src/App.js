
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project'
import projects_data from './components/projects_data'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Home/>
      <About/>
      <div id = 'projects'>
        <h3>Projects</h3>
        {projects_data.map(Project)}
      </div>
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
