export function Formation() {
  return (
    <section id="formation" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-fade-in">Études & Formation</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              <div className="timeline-item card-shadow-hover animate-slide-in-right delay-100">
                <div className="timeline-icon"><i className="fas fa-graduation-cap"></i></div>
                <div className="timeline-content">
                  <h3>2023 - 2025 : DTS en Informatique de gestion</h3>
                  <h4>ESPIC - Ankazomanga</h4>
                  <p>Formation axée sur le développement web et la conception de systèmes d'information. Acquisition de compétences en création de solutions robustes répondant aux besoins métiers et garantissant la qualité des applications.</p>
                </div>
              </div>
              <div className="timeline-item card-shadow-hover animate-slide-in-left delay-200">
                <div className="timeline-icon"><i className="fa-solid fa-language"></i></div>
                <div className="timeline-content">
                  <h3>2023 - 2024 : Langue anglaise</h3>
                  <h4>Englestia</h4>
                  <p>Développement des compétences en anglais. Maîtrise essentielle pour une communication professionnelle et la collaboration dans un environnement global.</p>
                </div>
              </div>
              <div className="timeline-item card-shadow-hover animate-slide-in-left delay-200">
                <div className="timeline-icon"><i className="fas fa-book-open-reader"></i></div>
                <div className="timeline-content">
                  <h3>2023 : Bacc OSE</h3>
                  <h4>Lycée Nanisana</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
