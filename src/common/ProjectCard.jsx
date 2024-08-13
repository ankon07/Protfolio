
// import vibeer from '../assets/viberr.png'
function ProjectCard({ src, link, h3, p }) {
    return (
        <a href={link} target="_blank">
            <img className="hover" src={src} alt={`${h3} logo`} />
            {/* </a> */}
            <h3>{h3}</h3>
            <p>{p}</p>
        </a>
    )
}

export default ProjectCard