import { Projects } from '../../data/Projects'
import ProjectSingle from './ProjectSingle'

function ProjectList() {
  return (
    <div className="flex gap-5 flex-1 justify-center flex-wrap lg:flex-nowrap">
      {Projects.map(project => (
        <ProjectSingle key={project.name} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
