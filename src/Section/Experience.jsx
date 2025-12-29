import TimelineItem from "../Components/TimelineItem";
import { experienceEntries } from "../data/experience";

export function Experience() {
  const entries = experienceEntries;

  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-fade-in">
          Professional Experience
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline experience">
              {entries.map((e) => (
                <TimelineItem key={e.id} {...e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
