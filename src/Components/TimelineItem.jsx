import React from "react";

export function TimelineItem({ iconClass, title, subtitle, description, animation = "animate-slide-in-right", delay = "100" }) {
  return (
    <div className={`timeline-item card-shadow-hover ${animation} delay-${delay}`}>
      <div className="timeline-icon"><i className={iconClass}></i></div>
      <div className="timeline-content">
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default TimelineItem;
