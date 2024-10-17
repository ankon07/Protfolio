import React from 'react'
import styles from "./HeroStyles.module.css"
// import heroImg from '../../assets/hero-img.png'
import ankon from '../../assets/c-ankon-2.png'
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import LinkedInLight from "../../assets/linkedin-light.svg"
import LinkedInDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme } from '../../common/ThemeContext'

function Hero() {

    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedInIcon = theme === 'light' ? LinkedInLight : LinkedInDark;
    return (
        // <div>Hero</div>
        <section id='hero' className={styles.container}>

            <div className={styles.colorModeContainer}>
                <img src={ankon} alt='Profile picture of Ankon' />

                <img className={styles.colorMode}
                    src={themeIcon}
                    alt='Color Mode icon'
                    onClick={toggleTheme} />



            </div>
            <div className={styles.info}>
                <h1>
                    Ankon
                    <br />
                    Ahamed
                </h1>
                <h2>BlockChain Developer</h2>
                <span>
                    <a href='https://twitter.com' target='_blank'>
                        <img src={twitterIcon} />
                    </a>
                    <a href='https://github.com/ankon07' target='_blank'>
                        <img src={githubIcon} />
                    </a>
                    <a href='https://linkedin.com' target='_blank'>
                        <img src={LinkedInIcon} />
                    </a>
                </span>
                <p className={styles.description}>With a passion for developing modern BlockChain based apps and commercial business</p>

                <a href={CV} download >
                    <button className="hover"> Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero