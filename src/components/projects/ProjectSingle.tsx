import { IconAirBalloon, IconBrandGithub, IconLiveView } from '@tabler/icons'
import { Project } from '../../data/Projects'

interface Props {
  project: Project
}

function ProjectSingle({ project }: Props) {
  return (
    <div className="card bg-gray-900/50 shadow-xl w-[350px] lg:w-[450px] max-h-[700px]">
      {/* <img src={project.image[0]} alt="Movie" className="w-[500px]" /> */}
      <div className="carousel w-full rounded-lg">
        {project.image.map((image, key) => (
          <CarouselItem id={key} key={project.name + key} name={project.name} url={image} />
        ))}
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        {project.image.map((image, key) => (
          <CarouselNumber id={key} key={project.name + key} name={project.name} />
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end mt-4">
          <a href={project.liveUrl} target="_blank" className="btn flex gap-2">
            <IconAirBalloon />
            Live Demo
          </a>
          <a href={project.repoUrl} target="_blank" className="btn flex gap-2">
            <IconBrandGithub />
            Github Repository
          </a>
        </div>
      </div>
    </div>
  )
}

function CarouselItem({ name, url, id }: { name: string; url: string; id: number }) {
  return (
    <div id={name + id} className="carousel-item w-full">
      <img src={url} className="w-[500px] overflow-auto object-fill" />
    </div>
  )
}

function CarouselNumber({ name, id }: { name: string; id: number }) {
  return (
    <a href={`#${name + id}`} className="btn btn-xs">
      {id + 1}
    </a>
  )
}

export default ProjectSingle
