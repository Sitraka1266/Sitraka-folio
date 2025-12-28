export function ContactIcon({ icon, link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="mx-2 social-icon icon-shadow-hover">
            <i className={`${icon} fa-2x`}></i>
        </a>
    );
}