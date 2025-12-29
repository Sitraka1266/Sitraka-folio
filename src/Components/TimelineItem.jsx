import React from "react";

export function TimelineItem({ iconClass, title, subtitle, addwhite, companylogo ,description, animation = "animate-slide-in-right", delay = "100" }) {
  return (
    <div className={`timeline-item card-shadow-hover ${animation} delay-${delay}`}>
      <div className={companylogo ? "timeline-icon-wl" : "timeline-icon"}>
        {companylogo ? <img src={companylogo} alt={title} className={addwhite ? "company-logo-white" : "company-logo"} /> : <i className={iconClass}></i>}
      </div>
      <div className="timeline-content">
        <h3>{title}</h3>
        {subtitle && <h5 className="text-darker">{subtitle}</h5>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default TimelineItem;
