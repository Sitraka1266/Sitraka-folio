import TimelineItem from "../Components/TimelineItem";
import { formationEntries } from "../data/formation";

export function Formation() {
  const entries = formationEntries;

  return (
    <section id="formation" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-fade-in">
          Studies & Training</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
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
