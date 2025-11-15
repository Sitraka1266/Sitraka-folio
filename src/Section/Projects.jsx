export function Projects() {
  return (
    <section id="projets" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-fade-in">Mes projets</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col animate-slide-up delay-100">
            <div className="card h-100 project-card card-shadow-hover">
              <img src="/project/zarao.svg" style={{ width: '90%', marginLeft: 20, marginTop: 20 }} className="card-img-top pro" alt="Image Projet 1" />
              <div className="card-body">
                <h5 className="card-title">Zarao</h5>
                <p className="card-text">Zarao est une plateforme freelance malgache conçue pour mettre en valeur les compétences des développeurs malgaches.</p>
                <a href="http://zarao.com/" id="projectin" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm button-shadow-flat ss not-online">Live demo <i className="fas fa-external-link-alt ms-1"></i></a>
              </div>
            </div>
          </div>
          <div className="col animate-slide-up delay-100">
            <div className="card h-100 project-card card-shadow-hover">
              <img src="/project/" style={{ width: '90%', marginLeft: 20, marginTop: 20 }} className="card-img-top pro" alt="fanorona" />
              <div className="card-body">
                <h5 className="card-title">Fanorona</h5>
                <p className="card-text">Projet rebuild du jeux fanorona malagasy en version web.</p>
                <a href="http://zarao.com/" id="projectin" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm button-shadow-flat ss not-online">Live demo <i className="fas fa-external-link-alt ms-1"></i></a>
              </div>
            </div>
          </div>
          <div className="col animate-slide-up delay-100">
            <div className="card h-100 project-card card-shadow-hover">
              <img src="/project/" style={{ width: '90%', marginLeft: 20, marginTop: 20 }} className="card-img-top pro" alt="fanorona" />
              <div className="card-body">
                <h5 className="card-title">Dactylo</h5>
                <p className="card-text">Jeux web multijoueur de dactylographie avec websocket.</p>
                <a href="http://zarao.com/" id="projectin" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm button-shadow-flat ss not-online">Live demo <i className="fas fa-external-link-alt ms-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
