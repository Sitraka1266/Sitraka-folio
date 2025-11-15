import React from "react";

export function SkillIcon({ iconClass, imgSrc, label, style, imgWidth }) {
  return (
    <div className="skill-icon-item">
      {imgSrc ? (
        <img src={imgSrc} width={imgWidth || 65} alt={label} />
      ) : (
        <i className={iconClass} style={style}></i>
      )}
      <p className="mb-0 mt-2">{label}</p>
    </div>
  );
}

export default SkillIcon;
