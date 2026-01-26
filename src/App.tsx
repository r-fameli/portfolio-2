import './App.scss';
import Experience from './pages/Experience/Experience';
import Landing from './pages/Landing/Landing';
import ProjectGallery from './pages/NewProjects/ProjectGallery';

function App() {
  return (
    <body>
      <Landing />
      <Experience />
      {/* <Projects /> */}
      <ProjectGallery />
    </body>
  )
}

export default App
