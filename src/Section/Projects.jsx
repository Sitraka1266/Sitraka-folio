import ProjectCard from "../Components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projets" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-fade-in">
          Mes projets
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
