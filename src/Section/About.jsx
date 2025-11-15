export function About() {
  return (
    <>
      <section id="a-propos" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title animate-fade-in">
            À Propos de Moi
          </h2>
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0 animate-fade-in delay-100">
              <img
                src="/img/profil.jpg"
                alt="Votre Photo"
                className="img-fluid rounded-circle profile-img-shadow"
              />
            </div>
            <div className="col-md-8 animate-fade-in delay-200">
              <p className="lead">
                Je suis un développeur web passionné, animé par une fascination
                pour le fonctionnement interne des systèmes numériques. Mon
                objectif est de concevoir des solutions web robustes, fiables et
                efficaces qui constituent le cœur de toute application.
                <br />
                <br /> J'aime relever les défis complexes et les transformer en
                un code bien structuré et hautement performant. Mon approche est
                axée sur une conception technique rigoureuse et la création de
                bases solides pour des applications web durables. <br />
                <br /> Je suis toujours désireux d'élargir mes compétences et
                d'apporter une contribution significative au sein d'une équipe
                collaborative. Si vous recherchez quelqu'un d'engagé à bâtir les
                fondations solides de logiciels web innovants, je serais ravi
                d'échanger avec vous !
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
