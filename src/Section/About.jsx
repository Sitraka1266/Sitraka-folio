export function About() {
  return (
    <>
      <section id="a-propos" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title animate-fade-in">

            About Me
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
                I am a passionate web developer, driven by a fascination with how digital systems work internally. My goal is to design robust, reliable, and efficient web solutions that form the core of any application.
                <br />
                <br /> I enjoy tackling complex challenges and turning them into well-structured, highly performant code. My approach focuses on rigorous technical design and building solid foundations for sustainable web applications. <br />
                <br /> I am always eager to expand my skills and make a meaningful contribution within a collaborative team. If you are looking for someone committed to building solid foundations for innovative web software, I would be delighted to connect with you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
