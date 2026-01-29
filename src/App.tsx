import { useRef } from 'react';
import './App.scss';
import NavMenu from './components/NavMenu/NavMenu';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Landing from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';
import useIntersection from './hooks/useIntersection';

function App() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const isIntersecting = useIntersection(sentinelRef!, {threshold: 0})
  if (isIntersecting) {
    console.log('intersected :D');
  }

  const topSentinel = useRef<HTMLDivElement | null>(null);
  const aboutSentinel = useRef<HTMLDivElement | null>(null);
  const experienceSentinel = useRef<HTMLDivElement | null>(null);
  const projectsSentinel = useRef<HTMLDivElement | null>(null);

  const navItems = [
    {
      sentinel: topSentinel,
      key: 'top',
      label: 'top',
    },
    {
      sentinel: aboutSentinel,
      key: 'about',
      label: 'about',
    },
    {
      sentinel: experienceSentinel,
      key: 'experience',
      label: 'experience',
    },
    {
      sentinel: projectsSentinel,
      key: 'projects',
      label: 'projects',
    }
  ]

  return (
    <body>
      <NavMenu navItems={navItems} />
      <Landing sentinelRef={topSentinel}/>
      <About sentinelRef={aboutSentinel} />
      <Experience sentinelRef={experienceSentinel}/>
      <Projects sentinelRef={projectsSentinel} />
    </body>
  )
}

export default App
