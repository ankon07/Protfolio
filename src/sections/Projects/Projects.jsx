import styles from "./ProjectsStyles.module.css"
import vibeer from '../../assets/viberr.png'
import caffee from '../../assets/hipsster.png'
import ProjectCard from "../../common/ProjectCard"

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='selectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={vibeer} link="https://github.com/ankon07/EthersWallet"
                    h3='Krypton'
                    p="Ethers transfer website" />
                <ProjectCard src={caffee} link="https://github.com/ankon07/decentralized_caffee"
                    h3='D_Caffee Shop'
                    p="A Decentralized Coffe Shop" />
                {/* <ProjectCard src={caffee} link="https://github.com/ankon07/decentralized_caffee"
                    h3='D_Caffee Shop'
                    p="A Decentralized Coffe Shop" /> */}
            </div>
        </section>
    )
}

export default Projects