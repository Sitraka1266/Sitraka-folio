import React from "react";

export function ProjectCard({ title, description, imageSrc, tech = [], hasDemo = true, demoUrl, sourceCode, notOnline = true, delay = "100" }) {
  const techMap = {
    react: { type: "img", src: "/assets/react.svg", alt: "React" },
    vite: { type: "img", src: "/vite.svg", alt: "Vite" },
    laravel: { type: "icon", className: "fa-brands fa-laravel text-danger" },
    php: { type: "icon", className: "devicon-php-plain colored" },
    node: { type: "icon", className: "fa-brands fa-node-js text-warning" },
    github: { type: "icon", className: "fa-brands fa-github" },
    socketio: { type: "text", label: "Socket.IO" },
    js: { type: "icon", className: "fa-brands fa-js text-warning" },
    html: { type: "icon", className: "fa-brands fa-html5 c-orange" },
    css: { type: "icon", className: "fa-brands fa-css3-alt c-blue" },
  };

  return (
    <div className={`col animate-slide-up delay-${delay}`}>
      <div className="card h-100 project-card card-shadow-hover">
        <img
          src={imageSrc}
          style={{ width: "90%", marginLeft: 20, marginTop: 20 }}
          className="card-img-top pro"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          {tech && tech.length > 0 && (
            <div className="project-tech d-flex align-items-center gap-2 mb-3">
              {tech.map((t, i) => {
                const key = String(t).toLowerCase();
                const info = techMap[key];
                if (!info) {
                  return (
                    <span key={i} className="tech-pill">{t}</span>
                  );
                }
                if (info.type === "img") {
                  return (
                    <img key={i} src={info.src} alt={info.alt} className="tech-img" />
                  );
                }
                if (info.type === "icon") {
                  return (
                    <i key={i} className={`${info.className} tech-icon`} title={key}></i>
                  );
                }
                return (
                  <span key={i} className="tech-pill">{info.label || t}</span>
                );
              })}
            </div>
          )}

          <div className="d-flex justify-content-between align-items-center mt-2">

          {hasDemo == true ?
            <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-outline-primary btn-sm button-shadow-flat ss ${!notOnline ? "" : "disabled"}`}
            >
              Live demo <i className="fas fa-external-link-alt ms-1"></i>
            </a> : ''
          }
          {sourceCode ? <a
            href={sourceCode}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary text-end btn-sm button-shadow-flat ss"
            
            >Source code <i className="fa-brands fa-github"></i></a> : ''}
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
