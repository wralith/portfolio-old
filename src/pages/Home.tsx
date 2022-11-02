import { IconFile, IconPointer } from '@tabler/icons'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

function Home() {
  return (
    <div className="flex-1 flex flex-col  mx-6 lg:mx-auto lg:w-1/2 justify-center overflow-hidden">
      <h1 className="text-7xl mb-12 flex justify-between">
        Ayberk Caliskan <span className="cursive text-gray-900/30 translate-y-12">Wralith</span>
      </h1>
      <h2 className="text-4xl mb-6">Full-Stack Developer</h2>
      <p className="text-gray-200 mb-8">
        I am self-taught full-stack developer based in Turkey. You can check my projects or directly my github account
        to see my passion!
      </p>
      <div className="flex gap-5">
        <Link to="/projects">
          <Button icon={<IconPointer />}>See Projects</Button>
        </Link>
        <Button icon={<IconFile />}>Download Resume</Button>
      </div>
    </div>
  )
}

export default Home
