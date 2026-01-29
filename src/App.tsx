import './App.scss';
import NavMenu from './components/NavMenu/NavMenu';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Landing from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <body>
      <NavMenu />
      <Landing />
      <About />
      <Experience />
      <Projects />
      {/* <ProjectGallery /> */}
    </body>
  )
}

export default App
