import styles from "./SkillsStyles.module.css"
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList"


function Skills() {
    return (
        <section id='skills' className={styles.container} >
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill={"Node"} />
                <SkillList src={checkMarkIcon} skill={"Etherum"} />

                <SkillList src={checkMarkIcon} skill={"JavaScript"} />
                <SkillList src={checkMarkIcon} skill={"Solidity"} />
                <SkillList src={checkMarkIcon} skill={"Smart Contract"} />
                <SkillList src={checkMarkIcon} skill={"HardHat"} />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill={"React"} />
                <SkillList src={checkMarkIcon} skill={"Web3"} />

                <SkillList src={checkMarkIcon} skill={"Ether JS"} />
                <SkillList src={checkMarkIcon} skill={"Rust"} />
                <SkillList src={checkMarkIcon} skill={"Go Lang"} />
                <SkillList src={checkMarkIcon} skill={"Git"} />
            </div>

        </section>
    )
}

export default Skills