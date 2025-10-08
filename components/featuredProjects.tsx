import Link from "next/link"
import { projects } from "@/config"
import ProjectCard from "./projectCard"

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="pb-24">
      {/* Header */}
      <h2 className="mb-12 text-3xl font-bold">Featured Projects</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:mx-auto md:px-0 lg:grid-cols-3">
        {featured.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <Link
        href="/projects"
        className="link btn btn-ghost mt-8 inline-flex gap-2 underline-offset-2"
      >
        All projects
      </Link>
    </section>
  )
}
