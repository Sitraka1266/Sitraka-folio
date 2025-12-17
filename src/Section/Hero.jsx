export function Hero() {
  return (
    <>
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center text-center vh-100 position-relative overflow-hidden"
      >
        <div
          id="heroCarousel"
          className="carousel slide h-100 w-100"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img
                src="/img/1749801946371.jpg"
                className="d-block w-100 h-100 object-fit-cover"
                alt="Image Hero 1"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src="/img/IMG-20250317-WA0007.jpg"
                className="d-block w-100 h-100 object-fit-cover"
                alt="Image Hero 2"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src="/img/Diary&Diamondra-1143.jpg"
                className="d-block w-100 h-100 object-fit-cover"
                alt="Image Hero 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div
          className="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white"
          style={{ zIndex: 2 }}
        >
          <h1 className="display-3 mb-4 text-shadow-deep animate-fade-in">
            Hi I'm Sitraka RATOVONARIVO
          </h1>
          <p className="lead mb-5 text-shadow-soft animate-fade-in delay-200">
            I am a web developer specializing in Backend
          </p>
          <div className="d-flex flex-column flex-md-row gap-3">
            <a
              href="#projets"
              className="btn btn-primary btn-lg button-shadow-elevate animate-fade-in delay-400 text-white"
            >
              See my projects<i className="fas fa-arrow-down ms-2"></i>
            </a>
            <a
              href="/cv/sitraka.pdf"
              download
              className="btn btn-outline-light btn-lg button-shadow-elevate animate-fade-in delay-500 "
            >
              Download my CV <i className="fas fa-download ms-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
