import { SkillIcon } from "../Components/SkillIcon";
import SkillCard from "../Components/SkillCard";
import { color } from "three/tsl";

export function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-fade-in">
          Mes Compétences Techniques
        </h2>
        <div className="row justify-content-center text-center">
          <SkillCard
            wrapperClass="col-md-6 col-lg-4 mb-4 animate-slide-in-right delay-100"
            title="Langages"
          >
            <SkillIcon
              iconClass="fab fa-html5 fa-4x"
              style={{ color: "#E34F26" }}
              label="HTML5"
            />
            <SkillIcon
              iconClass="fab fa-css3-alt fa-4x"
              style={{ color: "#1572B6" }}
              label="CSS3"
            />
            <SkillIcon
              iconClass="fab fa-js fa-4x"
              style={{ color: "#F7DF1E" }}
              label="JavaScript"
            />
            <SkillIcon iconClass="devicon-php-plain colored" label="PHP" />
            <SkillIcon
              iconClass="devicon-python-plain colored fa-4x"
              label="Python"
            />
          </SkillCard>

          <SkillCard
            wrapperClass="col-md-6 col-lg-4 mb-4 animate-slide-in-left delay-200"
            title="Frameworks & Librairies"
          >
            <SkillIcon
              iconClass="devicon-bootstrap-plain colored fa-4x"
              label="Bootstrap"
            />
            <SkillIcon
              iconClass="devicon-laravel-plain colored fa-4x"
              label="Laravel"
            />
            <SkillIcon
              iconClass="fab fa-react fa-4x"
              style={{ color: "#61DAFB" }}
              label="React"
            />
            <SkillIcon
              iconClass="devicon-django-plain colored fa-4x"
              label="Django"
            />
          </SkillCard>

          <SkillCard
            wrapperClass="col-md-6 col-lg-4 mb-4 animate-slide-in-right delay-300"
            title="Base de donnée"
          >
            <SkillIcon
              iconClass="devicon-mysql-plain colored fa-4x"
              label="MySQL"
            />
            <SkillIcon
              iconClass="devicon-postgresql-plain colored fa-4x"
              label="Postgresql"
            />
            <SkillIcon
              iconClass="devicon-sqlite-plain colored fa-4x"
              label="SQLite"
            />
          </SkillCard>

          <SkillCard
            wrapperClass="col-md-6 col-lg-4 mb-4 animate-slide-in-right delay-300"
            title="Outils"
          >
            <SkillIcon
              iconClass="devicon-github-plain colored fa-4x"
              label="Git/GitHub"
            />
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
