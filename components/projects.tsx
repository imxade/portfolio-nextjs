import { projects } from "@/config"
import ProjectCard from "./projectCard"

export default function Projects() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-8 grid gap-3 px-4 container mx-auto text-center">
        <h1 className="from-primary bg-gradient-to-r to-gray-400 bg-clip-text pb-[2px] leading-tight font-bold text-transparent text-5xl">
          Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:mx-auto md:px-0 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  )
}
