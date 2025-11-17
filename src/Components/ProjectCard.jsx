import React from "react";

export function ProjectCard({ title, description, imageSrc, hasDemo = true, demoUrl, sourceCode, notOnline = true, delay = "100" }) {
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
          <div className="d-flex justify-content-between align-items-center mt-4">

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
            
            >Source code <i class="fa-brands fa-github"></i></a> : ''}
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
