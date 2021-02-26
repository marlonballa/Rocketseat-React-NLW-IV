import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%'}} id="experienceBarStatus">
                    <span className={styles.currentExperience} style={{ left: '50%'}}>
                        500 pts
                    </span>
                </div>
            </div>
            <span>1000 xp</span>
        </header>
    );
}