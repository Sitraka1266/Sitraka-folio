export function Contact() {
  const contactEmail = "sitrakaratovonarivo84@gmail.com"; // Replace with your email

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-fade-in">Contact</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="contact-info text-center animate-fade-in delay-200">
              <h4 className="mb-4">Mes coordonnées</h4>
              <p className="mb-3">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactEmail}`} className="text-decoration-none text-primary">
                  {contactEmail}
                </a>
              </p>
            </div>

            <div className="social-links text-center mt-4 animate-fade-in delay-300">
              <a href="https://github.com/Sitraka1266" target="_blank" rel="noreferrer" className="mx-2 social-icon icon-shadow-hover"><i className="fab fa-github fa-2x"></i></a>
              <a href="https://www.linkedin.com/in/sitraka-ratovonarivo-6a656529b/" target="_blank" rel="noreferrer" className="mx-2 social-icon icon-shadow-hover"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="https://x.com/sitrakarat16009" target="_blank" rel="noreferrer" className="mx-2 social-icon icon-shadow-hover"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
