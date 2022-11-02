import { Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group'

import Layout from './components/layouts/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const location = useLocation()

  return (
    <Layout>
      <SwitchTransition>
        <CSSTransition key={location.key} exit={false} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  )
}

export default App
